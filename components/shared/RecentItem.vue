<template>
    <div class="w-full h-auto border-b-[1px] group border-[gray] py-1">
        <div class="w-full h-full rounded-lg p-2 group-hover:bg-[#444444] flex items-center justify-between">
            <div class="flex gap-4">
                <div class="w-12 h-12 rounded-lg overflow-hidden">
                    <img
                      v-if="file.isImage" 
                      :src="file.url" 
                      class="w-full h-full object-cover"
                      alt="file-img"  
                    />
                    <IconCSS 
                        v-if="file.isFolder" 
                        name="mdi:folder" 
                        class="text-[50px] text-[#ffecb5]" 
                    />
                    <IconCSS 
                        v-if="file.isDocument" 
                        name="mdi:file" 
                        class="text-[50px] text-[#6fd7ff]" 
                    />
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-[#ffffff] text-sm pb-1">{{ file.name }}</div>
                    <div class="flex gap-1">
                        <IconCSS name="ph:folder-bold" class="text-[20px] text-[#c7c7c7]" />
                        <div class="flex items-center">
                            <div class="text-sm text-[#888888]">Облачный диск</div>
                            <IconCSS name="ph:dot-bold" class="text-[20px] text-[#c7c7c7]" />
                            <div class="text-sm text-[#888888]">созданно - </div>
                        </div>
                        <div class="text-[#6fdcff]">
                            {{ downloadDate }}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Popover>
                  <PopoverTrigger asChild>
                    <div class="w-[26px] h-[26px] flex items-center justify-center cursor-pointer">
                        <IconCSS name="mdi:dots-horizontal" class="text-[26px] text-[#f6f6f6]"/>
                    </div>
                  </PopoverTrigger>
                  <PopoverContent class="p-2 w-[240px] border border-[#3d3d3d]">
                    <FileActionsPopover :file="file" />
                  </PopoverContent>
                </Popover>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../components/ui/popover'
import type { IFile } from '../../types';
import FileActionsPopover from '../popover-actions/FileActionsPopover.vue';
import { intlFormatDistance, formatDistanceToNow } from 'date-fns'

const { file } = defineProps({
  file: {
    type: Object as PropType<IFile>,
    required: true,
  },
})

const downloadDate = computed(() => {
    let date = intlFormatDistance(file.timestamp.toDate(), Date.now(), {
        numeric: 'auto',
        style: 'long',
        unit: 'day'
    })
    return date
})

</script>
<style>
</style>