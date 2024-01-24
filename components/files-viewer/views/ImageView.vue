<template>
    <div class="w-full h-[calc(100vh-70px)] flex flex-col">
        <div class="w-full h-full flex-1 overflow-hidden " @wheel="handleOnWheal">
            <img 
              :src="file.url" 
              class="w-full h-full object-contain"
              :style="{scale: scale}" 
            />
        </div>
        <div class="w-full min-h-[70px] bg-[#444444] flex items-center justify-center gap-4">
            <IconCSS name="bi:card-image" class="text-[18px] text-[#c7c7c7]" />
            <Slider
              :default-value="[1]" 
              :max="10" 
              :min="0.1"
              :step="0.1"
              v-model="scale"
              class="w-[300px]"
            />
            <IconCSS name="bi:card-image" class="text-[26px] text-[#c7c7c7]" />
        </div>
    </div>
</template>
<script setup lg="ts">
import { ref } from 'vue'
import useFilesViewer from '../../../store/useFilesViewer'
import { Slider } from '@/components/ui/slider'
import { storeToRefs } from 'pinia'

const { file } = storeToRefs(useFilesViewer())

let scale = ref([1])
const handleOnWheal = (e) => {
    e.deltaY < 0 ? scale.value[0] += 0.1 : scale.value[0] -= 0.1

    if (scale.value[0] < 0.1) {
        scale.value = [0.1]
        return
    } else if (scale.value[0] > 10) {
        scale.value = [10]
        return
    } 
}

</script>