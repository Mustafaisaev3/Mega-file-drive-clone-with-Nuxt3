<template>
    <div class="w-[64px] h-full bg-[#333333] py-4">
        <div class="w-full h-full flex flex-col justify-between">
            <!-- Sidebar TOP -->
            <div class="w-full h-auto flex flex-col gap-5">
                <NuxtLink href="/" class="w-full p-4 flex items-center justify-center hover:bg-[#222222] cursor-pointer">
                    <Logo />
                </NuxtLink >
                
                
                <NuxtLink 
                  v-for="item in sidebarLinks"
                  :key="item.label"
                  :href="item.path"
                  class="w-full"
                >
                  <TooltipProvider delay-duration="100">
                    <Tooltip>
                        <TooltipTrigger as-child>
                            <div 
                              class="w-full flex flex-col items-center hover:bg-[#222222] cursor-pointer py-2"
                              :class="{
                                'bg-[#242424]': currentRoute.path === item.path,
                              }"
                            >
                                <IconCSS 
                                  :name="item.icon" 
                                  class="text-[40px]" 
                                  :style="{color: currentRoute.path === item.path ? '#32ade1' : '#f1f1f1'}"
                                />
                                <div class="link-title text-white px-1">{{ item.label }}</div>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>{{ item.label }}</p>
                        </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </NuxtLink>
            </div>

            <!-- Sidebar BOTTOM -->
            <div class="w-full h-auto">
            <TooltipProvider delay-duration="100">
                <Tooltip>
                    <TooltipTrigger as-child>
                        <div class="w-full flex flex-col items-center hover:bg-[#222222] cursor-pointer py-2">
                            <IconCSS name="solar:round-transfer-vertical-bold" class="text-white text-[40px]" />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">
                        <p>Передафа файлов</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            </div>
        
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from '../components/Logo.vue'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const currentRoute = useRoute();

const sidebarLinks = [
    {
      label: "Диск",
      icon: 'mdi:folder',
      path: "/",
    },
    {
      label: "Фотографии",
      icon: 'bi:images',
      path: "/images",
    },
    {
      label: "Чат",
      icon: 'mdi:chat',
      path: "/chat",
    },
];
</script>

<style scoped>
.link-title {
  width: 100%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>