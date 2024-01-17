<template>
  <div class="w-[200px] h-[200px] group relative rounded-2xl bg-[#222222] border-[5px] border-[#333333] hover:border-[#494949] transition-all duration-200 overflow-hidden cursor-pointer" >
    <div class="w-full h-full absolute left-0 top-0">
      <div v-if="file.isFolder" class="w-full h-full p-2 flex items-center justify-center">
        <IconCSS name="mdi:folder" class="text-[80px] text-[#ffecb5]" />
      </div>
      <div v-else-if="file.isDocument" class="w-full h-full p-2 flex items-center justify-center">
        <IconCSS name="mdi:file" class="text-[80px] text-[#6fd7ff]" />
      </div>
      <div v-else-if="file.isImage" class="w-full h-full">
        <img :src="file.image" class="w-full h-full object-cover"/>
      </div>
    </div>
    <div class="w-full h-full absolute top-0 left-0 ">
      <div class="w-full h-full flex flex-col justify-between p-2">
        <div class="text-white text-end">
          <IconCSS name="mdi:cards-heart" class="text-white" />
        </div>
        <div class="w-full h-auto relative">
          <div class="w-auto h-[26px] px-2 bg-[#333333d7] rounded-full truncate text-center text-white">{{ file.name }}</div>
          <div class="absolute top-0 right-0 hidden group-hover:block">
            <div class="w-[26px] h-[26px] flex items-center justify-center rounded-full bg-gradient-to-t from-[#6e6e6e] to-[#b9b9b9] text-white">
              <IconCSS name="mdi:dots-horizontal" class="text-[26px]"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IFile } from '../../types'

const { file } = defineProps({
  file: {
    type: Object as PropType<IFile>,
    required: true,
  }
})
</script>
<style lang="">
  
</style>
