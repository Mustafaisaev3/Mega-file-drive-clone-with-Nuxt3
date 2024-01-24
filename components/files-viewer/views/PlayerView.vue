<template>
    <div class="w-full h-[calc(100vh-70px)] flex flex-col">
        <VideoPlayer
          :src="file.url"
          controls
          :volume="0.6"
          class="w-full h-full"
        />
    </div>
</template>

<script setup lg="ts">
import useFilesViewer from '../../../store/useFilesViewer'
import { VideoPlayer } from '@videojs-player/vue'
import { storeToRefs } from 'pinia'

const { file } = storeToRefs(useFilesViewer())
</script>
