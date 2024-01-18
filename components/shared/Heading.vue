<template>
    <div class="w-full h-auto flex items-center justify-between px-4">
        <div>
            <h2 class="text-[#f1f1f1]">{{ title }}</h2>
        </div>
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
const { title } = defineProps(['title'])
</script>

<style scoped>
</style>