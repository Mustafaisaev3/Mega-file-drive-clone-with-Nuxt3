<template>
    <div class="w-full h-screen flex bg-[#333333]">
        <Sidebar />
        <div class="w-full h-full flex">
            <LeftPanel :storageUsage="true">
                <div class="w-full h-[300px] flex flex-col gap-2">

                    <NuxtLink v-for="link in PanelLinks" :href="link.path">
                    <div 
                        class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2"
                        :class="{
                        'bg-[#242424]': currentRoute.path === link.path,
                        }"
                    >
                        <IconCSS 
                        :name="link.icon" class="text-[#c7c7c7] text-[20px]"
                        :style="{color: currentRoute.path === link.path ? '#77d7ff' : '#f1f1f1'}" 
                        />
                        <div class="text-base text-[#c7c7c7]">{{ link.label }}</div>
                    </div>
                    </NuxtLink>

                </div>
            </LeftPanel>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import Sidebar from '../components/shared/Sidebar.vue';
import LeftPanel from '../components/shared/LeftPanel.vue';

const currentRoute = useRoute()

// Left Panel Links
const PanelLinks = [
    {
      label: "Облачный диск",
      icon: 'mdi:cloud',
      path: "/storage",
    },
    {
      label: "Недавние",
      icon: 'mdi:clock-time-four',
      path: "/storage/recents",
    },
    {
      label: "Избранное",
      icon: 'mdi:cards-heart',
      path: "/storage/favorites",
    },
    {
      label: "Корзина",
      icon: 'mdi:delete',
      path: "/storage/trash",
    },
];
</script>

<style>
</style>