<template>
  <div class="w-full h-auto grid grid-cols-7 gap-4 p-4 border-t border-t-[#4b4b4b] mt-2">
    <GridItem 
      v-for="file in files" 
      :key="file.id" 
      :file="file" 
      :trash="trash" 
      @dblclick="() => handleDoubleClick(file)"
    />
  </div>
</template>
<script setup lang="ts">
import type { IFile } from '../../types'
import GridItem from './GridItem.vue';
import useFilesViewer from '../../store/useFilesViewer';

const { onOpen, setFile } = useFilesViewer()

const { files } = defineProps({
  files: Array<IFile>,
  trash: Boolean,
})

// Handling double click on item
const handleDoubleClick = (file: IFile) => {
  if (file.isFolder) {
    return 
  }

  setFile(file)
  onOpen()
}

</script>
<style lang="">
  
</style>