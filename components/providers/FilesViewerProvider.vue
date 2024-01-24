<template>
    <teleport to="body">
        <div v-if="isOpen" class="absolute left-0 top-0 w-full h-full flex items-center justify-center z-10">
            <FileView />
        </div>
    </teleport>
</template>
<script setup lang="ts">
import useFilesViewer from '../../store/useFilesViewer';
import FileView from '../files-viewer/FileView.vue';
import { storeToRefs } from 'pinia'

const { isOpen } = storeToRefs(useFilesViewer())

</script>
<style> 
</style>