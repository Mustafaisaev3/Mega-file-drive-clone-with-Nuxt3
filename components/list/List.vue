<template>
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
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <ListItem v-for="file in files" :file="file" />
      </TableBody>
    </Table>
  </div>

</template>
<script setup lang="ts">
import type { IFile } from '../../types'
import ListItem from './ListItem.vue'


const { files } = defineProps({
  files: Array<IFile>
})

</script>
<style scoped>
</style>