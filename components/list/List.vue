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
        <TableRow v-for="file in files" class="border-b-[1px] border-[#444444] rounded-md px-2">
          <TableCell class="font-medium w-[50px]">
            <IconCSS name="ci:dot-04-l" class="text-[14px] text-[#c7c7c7] inline-block cursor-pointer" />
          </TableCell>
          <TableCell class="text-white">
            <div class="flex gap-4">
              <div class="w-5 h-5 flex items-center justify-center">
                <img v-if="file.isImage" class="w-5 h-5 object-containe rounded-sm" :src="file.image" alt="">
                <IconCSS v-if="file.isFolder" name="mdi:folder" class="text-[25px] text-[#ffecb5]" />
                <IconCSS v-if="file.isDocument" name="mdi:file" class="text-[25px] text-[#6fd7ff]" />
              </div>
              {{ file.name }}
            </div>
          </TableCell>
          <TableCell>{{ file.size ? byteConverter(file.size) : '-' }}</TableCell>
          <TableCell>{{ file.isImage ? file.type.split('/')[1] : file.isFolder ? "Папка" : "Файл"}}</TableCell>
          <TableCell>{{ format(new Date(file.timestamp.seconds * 1000), "MM.dd.yyyy  mm:hh") }}</TableCell>
          <TableCell class="text-right">
            ...
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>

</template>
<script setup lang="ts">
import type { IFile } from '../../types'
import { byteConverter } from '../../lib/utils'
import { format } from 'date-fns'

const { files } = defineProps({
  files: Array<IFile>
})

</script>
<style scoped>
</style>