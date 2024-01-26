<template>
    <div class="w-full h-full flex flex-col">
      <div class="header min-h-[70px] w-full bg-[#444444] flex items-center justify-between py-2 px-5">
        <div class="w-auto h-full flex items-center gap-6">
            <IconCSS 
              name="mdi:arrow-down-bold-circle-outline" 
              class="text-[25px] text-[#c7c7c7] hover:text-[white] cursor-pointer" 
              @click="onDownload"
            />
            <IconCSS 
              name="mdi:link" 
              class="text-[28px] text-[#c7c7c7] hover:text-[white] cursor-pointer" 
              @click="onShare"
            />

            <Popover>
              <PopoverTrigger asChild>
                <IconCSS 
                  name="mdi:dots-horizontal" 
                  class="text-[28px] text-[#c7c7c7] hover:text-[white] cursor-pointer" 
                />
              </PopoverTrigger>
              <PopoverContent class="p-2 w-[240px] border border-[#3d3d3d]">
                <FileActionsPopover :file="file!" />
              </PopoverContent>
            </Popover>
        </div>
        <div class="w-full h-full px-4 flex items-center justify-center">
            <h2 class="text-lg text-[#ffffff]">{{ file?.name }}</h2>
        </div>
        <div class="w-auto h-full flex items-center">
            <IconCSS name="mdi:close" class="text-[28px] text-[#c7c7c7] hover:text-[white] cursor-pointer" @click="onClose" />
        </div>
      </div>
      <div class="content h-full flex-1 w-full bg-[#000000] overflow-hidden">
        <ImageView v-if="file?.isImage" />
        <PlayerView v-if="file?.isVideo" />
        <AudioView v-if="file?.isAudio" />
      </div>
    </div>
</template>
<script setup lang="ts">
import useFilesViewer from '../../store/useFilesViewer'
import { storeToRefs } from 'pinia'
import ImageView from './views/ImageView.vue';
import PlayerView from './views/PlayerView.vue';
import AudioView from './views/AudioView.vue';
import FileActionsPopover from '../popover-actions/FileActionsPopover.vue';

const { onClose } = useFilesViewer()
const { file } = storeToRefs(useFilesViewer())

console.log(file)

const onDownload = async () => {
  const fileItem = await fetch(file.value!.url, {
    mode: 'no-cors'
  })

  const fileBlog = await fileItem.blob()
  const fileURL = URL.createObjectURL(fileBlog)

  const link = document.createElement('a')
  link.href = fileURL
  link.download = file.value!.name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
};


const onShare = () => {
  if (file.value!.isFolder) {
    return;
  }
  navigator.clipboard.writeText(file.value!.url);
};
</script>

<style>
</style>