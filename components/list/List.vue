<template>
  <div class="w-full h-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead v-if="!trash" class="w-[50px] flex items-center">
            <IconCSS name="mdi:cards-heart" class="text-[16px] text-[#c7c7c7] inline-block" />
          </TableHead>
          <TableHead>Имя</TableHead>
          <TableHead>Размер</TableHead>
          <TableHead>Тип</TableHead>
          <TableHead>Дата добавления</TableHead>
          <TableHead class="text-right">
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <ListItem 
          v-for="file in files" 
          :key="file.id" 
          :file="file" 
          :trash="trash" 
          @dblclick="() => handleDoubleClick(file)" 
        />
      </TableBody>
    </Table>
  </div>

</template>
<script setup lang="ts">
import type { IFile } from '../../types'
import ListItem from './ListItem.vue'
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
<style scoped>
</style>