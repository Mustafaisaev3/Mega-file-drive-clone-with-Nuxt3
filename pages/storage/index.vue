<template>
  <div class="w-full h-auto">
    <!-- Topbar -->
    <Topbar />
    <!-- Topbar -->

    <!-- Heading -->
    <Heading :title="'Облачный диск'">
      <div class="flex items-center gap-6">
          <Popover>
            <PopoverTrigger asChild>
              <div class="flex gap-1 items-center cursor-pointer">
                <IconCSS name="material-symbols:add-circle-outline" class="text-[#81cfb3] text-[26px]"/>
                <h2 class="text-[#f1f1f1] text-sm">Создать папку</h2>
              </div>
            </PopoverTrigger>
            <PopoverContent class="py-4 w-[400px] border border-[#3d3d3d]">
              <AddFolderPopover @change="() => getFiles()" />
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
            <div class="border-b-2 border-transparent" :class="{'!border-[#6fd7ff]': layout == 'GRID'}">
              <IconCSS
                @click="() => setLayoutType('GRID')" 
                name="material-symbols:grid-on-sharp" 
                class="text-[#f1f1f1] text-[24px] cursor-pointer"
              />
            </div>
            <div class="border-b-2 border-transparent" :class="{'!border-[#6fd7ff]': layout == 'LIST'}">
              <IconCSS 
                @click="() => setLayoutType('LIST')" 
                name="material-symbols:lists" 
                class="text-[#f1f1f1] text-[24px] cursor-pointer"
              />
            </div>
          </div>
      </div>
    </Heading>
    <!-- Heading -->

    <!-- Data table -->
    <List v-if="layout == 'LIST'" :files="files" />
    <Grid v-if="layout == 'GRID'" :files="files"/>
    <!-- Data table -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Topbar from '../../components/shared/Topbar.vue';
import Heading from '../../components/shared/Heading.vue';
import AddFolderPopover from '../../components/popover-actions/AddFolderPopover.vue';
import UploadFilePopover from '../../components/popover-actions/UploadFilePopover.vue';
import List from '../../components/list/List.vue';
import Grid from '../../components/grid/Grid.vue';

import { useAuth } from 'vue-clerk';
import { storeToRefs } from 'pinia'
import useFilesStorage from '../../store/useFilesStorage'
import useUI from '../../store/useUI';

const { setLayoutType } = useUI()
const { layout } = storeToRefs(useUI())

const { fetchFiles } = useFilesStorage()
const { files } = storeToRefs(useFilesStorage())
const { isLoaded, userId } = useAuth()

const getFiles = async () => {
  fetchFiles(userId.value)
}

watch(isLoaded, () => {
  getFiles()
})

onMounted(() => {
  getFiles()
}),

definePageMeta({
  layout: 'storage',
  middleware: 'auth'
})
</script>

