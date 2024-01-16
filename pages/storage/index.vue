<template>
  <div class="w-full h-full flex">
    <LeftPanel :storageUsage="true">
      <div class="w-full h-[300px] flex flex-col gap-2">

        <div class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2">
          <IconCSS name="mdi:cloud" class="text-[#c7c7c7] text-[20px]" />
          <div class="text-base text-[#c7c7c7]">Облачный диск</div>
        </div>
        
        <div class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2">
          <IconCSS name="mdi:clock-time-four" class="text-[#c7c7c7] text-[20px]" />
          <div class="text-base text-[#c7c7c7]">Недавние</div>
        </div>

        <div class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2">
          <IconCSS name="mdi:cards-heart" class="text-[#c7c7c7] text-[20px]" />
          <div class="text-base text-[#c7c7c7]">Избранное</div>
        </div>

        <div class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2">
          <IconCSS name="mdi:delete" class="text-[#c7c7c7] text-[20px]" />
          <div class="text-base text-[#c7c7c7]">Корзина</div>
        </div>

      </div>
    </LeftPanel>
    <div class="w-full h-auto">
      <!-- Topbar -->
      <Topbar />
      <!-- Topbar -->

      <!-- Heading -->
      <Heading>
        <div class="flex items-center gap-6">
            <Popover>
              <PopoverTrigger asChild>
                <div class="flex gap-1 items-center cursor-pointer">
                  <IconCSS name="material-symbols:add-circle-outline" class="text-[#81cfb3] text-[26px]"/>
                  <h2 class="text-[#f1f1f1] text-sm">Создать папку</h2>
                </div>
              </PopoverTrigger>
              <PopoverContent class="py-4 w-[400px] border border-[#3d3d3d]">
                <AddFolderPopover />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <div class="flex gap-1 items-center cursor-pointer">
                    <IconCSS name="streamline:upload-circle" class="text-[#6fd7ff] text-[21px]"/>
                    <h2 class="text-[#f1f1f1] text-sm">Загрузить файл</h2>
                </div>
              </PopoverTrigger>
              <PopoverContent class="py-2 px-2 w-[200px]">
                <UploadFilePopover />
              </PopoverContent>
            </Popover>
            <div class="flex items-center gap-2">
                <IconCSS name="material-symbols:grid-on-sharp" class="text-[#f1f1f1] text-[24px] cursor-pointer"/>
                <IconCSS name="material-symbols:lists" class="text-[#f1f1f1] text-[24px] cursor-pointer"/>
            </div>
        </div>
      </Heading>
      <!-- Heading -->

      <!-- Data table -->
      <div class="w-full h-auto">
        <Table>
        <TableHeader>
          <TableRow>
            <TableHead class="w-[50px] flex items-center">
              <IconCSS name="mdi:cards-heart" class="text-[16px] text-[#c7c7c7] inline-block" />
            </TableHead>
            <TableHead>Имя</TableHead>
            <TableHead>Размер</TableHead>
            <TableHead>Тип</TableHead>
            <TableHead>Дата добавления</TableHead>
            <TableHead class="text-right">
              <!-- Amount -->
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody v-if="isLoaded">
          <TableRow v-for="file in files" class="border-b-[1px] border-[#444444] rounded-md px-2">
            <TableCell class="font-medium w-[50px]">
              <IconCSS name="ci:dot-04-l" class="text-[14px] text-[#c7c7c7] inline-block cursor-pointer" />
            </TableCell>
            <TableCell class="text-white">
              <div class="flex gap-4">
                <div class="w-5 h-5 flex items-center justify-center">
                  <img v-if="file.isImage" class="w-5 h-5 object-containe rounded-sm" :src="file.image" alt="">
                  <IconCSS v-if="file.isFolder" name="mdi:folder" class="text-[25px] text-[#ffecb5]" />
                  <IconCSS v-if="file.isDocument" name="mdi:file" class="text-[25px] text-[#6fd7ff]" />
                </div>
                {{ file.name }}
              </div>
            </TableCell>
            <TableCell>{{ file.size ? byteConverter(file.size) : '-' }}</TableCell>
            <TableCell>{{ file.isImage ? file.type.split('/')[1] : file.isFolder ? "Папка" : "Файл"}}</TableCell>
            <TableCell>{{ format(new Date(file.timestamp.seconds * 1000), "MM.dd.yyyy  mm:hh") }}</TableCell>
            <TableCell class="text-right">
              ...
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
      <!-- Data table -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import LeftPanel from '../../components/shared/LeftPanel.vue';
import Topbar from '../../components/shared/Topbar.vue';
import Heading from '../../components/shared/Heading.vue';
import AddFolderPopover from '../../components/popover-actions/AddFolderPopover.vue';
import UploadFilePopover from '../../components/popover-actions/UploadFilePopover.vue';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../components/ui/table'

import { byteConverter } from '../../lib/utils'
import { format } from 'date-fns'

import { useAuth } from 'vue-clerk';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../lib/firebase';

const { isLoaded, userId } = useAuth()

let folders = ref<any>([])
let files = ref<any>([])

const getData = async (uid: string, type: "files" | "folders") => {
  let data: any[] = [];
  const q = query(
    collection(db, "files"),
    where("uid", "==", uid),
    where("isArchive", "==", false),
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id });
  });

  return data;
};


// const getFolders = async () => {
//   const resData = await getData(userId.value!, "folders")
//   return folders.value = resData
// }

const getFiles = async () => {
  const resData = await getData(userId.value!, "files")
  return files.value = resData
}


watch(isLoaded, () => {
  // getFolders()
  getFiles()
})

</script>

