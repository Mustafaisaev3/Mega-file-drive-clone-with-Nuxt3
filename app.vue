<template>
  <div class="w-full h-screen">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useUser } from 'vue-clerk';

const user = useUser()
console.log(user)
</script>