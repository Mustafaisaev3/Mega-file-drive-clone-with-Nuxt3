<template>
  <div class="w-full h-screen">
    <NuxtLayout>
       <NuxtPage />
       <FilesViewerProvider />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import FilesViewerProvider from './components/providers/FilesViewerProvider.vue';
import { useUser } from 'vue-clerk';

const user = useUser()
console.log(user)
</script>