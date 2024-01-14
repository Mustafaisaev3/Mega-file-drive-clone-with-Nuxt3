<template>
    <div class="w-full h-screen bg-gray-100">
        <Header />
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import Header from '@/components/auth/Header.vue'
</script>

<style>
</style>