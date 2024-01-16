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
              <PopoverContent class="py-4 w-[400px]">
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
        <TableBody >
          <TableRow v-for="invoice in 10" :key="invoice" class="border-b-[1px] border-[#444444] rounded-md px-2">
            <TableCell class="font-medium w-[50px]">
              <IconCSS name="ci:dot-04-l" class="text-[14px] text-[#c7c7c7] inline-block cursor-pointer" />
            </TableCell>
            <TableCell class="text-white">
              <div class="flex gap-4">
                <img class="w-5 h-5 object-cover rounded-sm" src="https://www.mansory.com/sites/default/files/styles/view_3_columns/public/2024-01/xm_mansory_studio.6058.jpg?itok=WVDiuItf" alt="">
                neo web.jpeg
              </div>
            </TableCell>
            <TableCell>945 КБ</TableCell>
            <TableCell>JPEG</TableCell>
            <TableCell>16.02.2023, 14.45</TableCell>
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
import LeftPanel from '../components/shared/LeftPanel.vue';
import Topbar from '../components/shared/Topbar.vue';
import Heading from '../components/shared/Heading.vue';
import AddFolderPopover from '../components/popover-actions/AddFolderPopover.vue';
import UploadFilePopover from '../components/popover-actions/UploadFilePopover.vue';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'


</script>

