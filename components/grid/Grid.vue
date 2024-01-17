<template>
  <div class="w-full h-auto grid grid-cols-7 gap-4 p-4 border-t border-t-[#4b4b4b] mt-2">
      <GridItem v-for="file in files" :file="file"/>
  </div>
</template>
<script setup lang="ts">
import type { IFile } from '../../types'
import GridItem from './GridItem.vue';

const { files } = defineProps({
  files: Array<IFile>
})
</script>
<style lang="">
  
</style>