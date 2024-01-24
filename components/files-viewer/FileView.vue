<template>
    <div class="w-full h-full flex flex-col">
      <div class="header min-h-[70px] w-full bg-[#444444] flex items-center justify-between py-2 px-5">
        <div class="w-auto h-full flex items-center gap-6">
            <IconCSS name="mdi:arrow-down-bold-circle-outline" class="text-[25px] text-[#c7c7c7] hover:text-[white] cursor-pointer" />
            <IconCSS name="mdi:link" class="text-[28px] text-[#c7c7c7] hover:text-[white] cursor-pointer" />
            <IconCSS name="mdi:dots-horizontal" class="text-[28px] text-[#c7c7c7] hover:text-[white] cursor-pointer" />
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
      </div>
    </div>
</template>
<script setup lang="ts">
import useFilesViewer from '../../store/useFilesViewer'
import { storeToRefs } from 'pinia'
import ImageView from './views/ImageView.vue';
import PlayerView from './views/PlayerView.vue';

const { onClose } = useFilesViewer()
const { file } = storeToRefs(useFilesViewer())
</script>

<style>
</style>