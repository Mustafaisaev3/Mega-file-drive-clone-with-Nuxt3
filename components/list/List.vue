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
        <ListItem v-for="file in files" :key="file.id" :file="file" :trash="trash" />
      </TableBody>
    </Table>
  </div>

</template>
<script setup lang="ts">
import type { IFile } from '../../types'
import ListItem from './ListItem.vue'


const { files } = defineProps({
  files: Array<IFile>,
  trash: Boolean,
})

</script>
<style scoped>
</style>