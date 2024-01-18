<template>
    <div class="w-[64px] h-full bg-[#333333] py-4">
        <div class="w-full h-full flex flex-col justify-between">
            <!-- Sidebar TOP -->
            <div class="w-full h-auto flex flex-col gap-5">
                <NuxtLink href="/" class="w-full p-4 flex items-center justify-center hover:bg-[#222222] cursor-pointer">
                    <Logo />
                </NuxtLink >
                <SidebarItem v-for="item in sidebarLinks" :key="item.label" :item="item" />
            </div>

            <!-- Sidebar BOTTOM -->
            <div class="w-full h-auto">
            <TooltipProvider :delay-duration="100">
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
import SidebarItem from '../shared/SidebarItem.vue'

const sidebarLinks = [
    {
      label: "Диск",
      icon: 'mdi:folder',
      path: "/storage",
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
</style>