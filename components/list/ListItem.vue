<template>
  <TableRow class="border-b-[1px] border-[#444444] rounded-md px-2">
    <TableCell v-if="!trash" class="font-medium w-[50px]">
      <IconCSS v-if="!file.isWish" name="ci:dot-04-l" class="text-[14px] text-[#c7c7c7] inline-block cursor-pointer" />
      <IconCSS v-if="file.isWish" name="mdi:cards-heart" class="text-[14px] text-[#c7c7c7] inline-block cursor-pointer" />
    </TableCell>
    <TableCell class="text-white">
      <div class="flex gap-4">
        <div class="w-5 h-5 flex items-center justify-center">
          <img v-if="file.isImage" class="w-5 h-5 object-containe rounded-sm" :src="file.url" alt="">
          <IconCSS 
            v-if="file.isFolder" 
            name="mdi:folder" 
            :class="`
              text-[25px] text-[#ffecb5]
              ${trash ? 'text-[#cdcdcd]' : 'text-[#ffecb5]'}
            `" 
          />
          <IconCSS 
            v-if="file.isDocument" 
            name="mdi:file" 
            :class="`
              text-[25px] text-[#6fd7ff]
              ${trash ? 'text-[#cdcdcd]' : 'text-[#6fd7ff]'}
            `" 
          />
          <IconCSS 
            v-if="file.isVideo" 
            name="akar-icons:video" 
            :class="`
              text-[25px] text-[#c986f7]
              ${trash ? 'text-[#cdcdcd]' : 'text-[#c986f7]'}
            `" 
          />
          <IconCSS 
            v-if="file.isAudio" 
            name="ph:music-note-fill" 
            :class="`
              text-[25px] text-[#db5757]
              ${trash ? 'text-[#cdcdcd]' : 'text-[#db5757]'}
            `" 
          />
        </div>
        {{ file.name }}
      </div>
    </TableCell>
    <TableCell>{{ file.size ? byteConverter(file.size) : '-' }}</TableCell>
    <TableCell>{{ file.isImage ? file.type.split('/')[1] : file.isFolder ? "Папка" : "Файл"}}</TableCell>
    <TableCell>{{ format(new Date(file.timestamp.seconds * 1000), "MM.dd.yyyy  mm:hh") }}</TableCell>
    <TableCell class="text-right">
      <Popover>
        <PopoverTrigger asChild>
          <div class="w-[26px] h-[26px] flex items-center justify-center cursor-pointer">
            <IconCSS name="mdi:dots-horizontal" class="text-[26px]"/>
          </div>
        </PopoverTrigger>
        <PopoverContent class="p-2 w-[240px] border border-[#3d3d3d]">
          <FileActionsPopover :file="file" />
        </PopoverContent>
      </Popover>
    </TableCell>
  </TableRow>
</template>
<script setup lang="ts">
import type { IFile } from '../../types'
import { byteConverter } from '../../lib/utils'
import { format } from 'date-fns'
import FileActionsPopover from '../popover-actions/FileActionsPopover.vue';

const { file } = defineProps({
  file: {
    type: Object as PropType<IFile>,
    required: true,
  },
  trash: {
    type: Boolean,
    default: false
  },
})

console.log(file)
</script>
<style lang="">
  
</style>