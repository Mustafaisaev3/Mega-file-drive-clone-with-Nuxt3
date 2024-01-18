<template>
    <NuxtLink 
      :key="item.label"
      :href="item.path"
      class="w-full"
    >
      <TooltipProvider :delay-duration="100">
        <Tooltip>
            <TooltipTrigger as-child>
                <div 
                  class="w-full flex flex-col items-center hover:bg-[#222222] cursor-pointer py-2"
                  :class="{
                    'bg-[#242424]': currentRoute.path.includes(item.path!),
                  }"
                >
                    <IconCSS 
                      :name="item.icon" 
                      class="text-[40px]" 
                      :style="{color: currentRoute.path.includes(item.path!) ? '#32ade1' : '#f1f1f1'}"
                    />
                    <div class="w-full text-center text-white px-1 truncate">{{ item.label }}</div>
                </div>
            </TooltipTrigger>
            <TooltipContent side="right">
                <p>{{ item.label }}</p>
            </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </NuxtLink>
</template>
<script setup lang="ts">
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import {useRoute} from 'vue-router'

interface ItemProps {
  icon: string;
  label: string;
  path?: string;
}

const currentRoute = useRoute();

const { item } = defineProps({
    item: {
        type: Object as PropType<ItemProps>,
        required: true
    }
})
</script>
<style>
</style>