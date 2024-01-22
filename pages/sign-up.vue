<template>
  <div class="grid h-screen place-items-center px-4 sm:px-8 py-5">
    <SignUp sign-in-url="/sign-in" />
  </div>
</template>

<script setup>
import { SignUp } from 'vue-clerk';

definePageMeta({
  layout: "auth",
  middleware: ['public']
});
</script>
