<template>
    <div class="w-[280px] h-full bg-[#444444]">
        <div class="w-full h-full flex flex-col" v-if="!chat">
            <div class="w-full h-auto flex items-center px-[16px] py-[14px]">
                <span class="text-[#fff] text-2xl">Диск</span>
            </div>
            <div class="w-full flex-1 flex px-[16px] py-[14px]">
                <slot></slot>
            </div>
            <StorageUsage v-if="storageUsage" />
        </div>
    </div>
</template>

<script setup lang="ts">
import StorageUsage from './StorageUsage.vue';

const { storageUsage, chat } = defineProps({
    chat: Boolean,
    storageUsage: Boolean,
})
</script>

<style scoped>
</style>