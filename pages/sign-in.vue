<template>
  <div class="grid h-screen place-items-center px-4 sm:px-8 py-5">
    <SignIn sign-up-url="/sign-up"  />
  </div>
</template>

<script setup>
import { SignIn } from 'vue-clerk';

definePageMeta({
  layout: "auth",
});
</script>
