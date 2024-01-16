<template>
    <div class="w-full h-screen flex bg-[#333333]">
        <Sidebar />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import Sidebar from '../components/shared/Sidebar.vue';
</script>

<style>
</style>