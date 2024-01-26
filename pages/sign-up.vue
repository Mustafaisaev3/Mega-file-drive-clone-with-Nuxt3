<template>
  <div class="flex items-center justify-center flex-col h-screen px-4 sm:px-8 py-5">
    <div class="w-400px h-auto flex flex-col gap-2 pb-4">
      <div>
        email: <span class="font-bold text-lg">mihajlovicm930@gmail.com</span>
      </div>
      <div>
        password: <span class="font-bold text-lg">MegaUser123</span>
      </div>
    </div>
    <SignUp sign-in-url="/sign-in" />
  </div>
</template>

<script setup>
import { SignUp } from 'vue-clerk';

definePageMeta({
  layout: "auth",
  // middleware: ['public']
});
</script>
