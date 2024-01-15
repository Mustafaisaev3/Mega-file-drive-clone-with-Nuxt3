<template>
    <div class="w-full h-[70px] flex items-center justify-between px-4 py-2">
        <div>
            <Searchbar />
        </div>
        <div class="flex items-center gap-6">
            <IconCSS name="mdi:bell" class="text-[30px] text-[#f8e78e] cursor-pointer" />
            <UserButton />
        </div>
    </div>
</template>

<script setup lang="ts">
import { UserButton } from 'vue-clerk'
import Searchbar from './Searchbar.vue';
</script>

<style scoped>
</style>