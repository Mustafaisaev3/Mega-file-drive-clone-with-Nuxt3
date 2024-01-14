<template>
  <div class="w-full h-full flex items-center justify-center p-8">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
          Auth starts here.
        </h1>
        <p class="py-6">
          A simple and powerful Nuxt template featuring authentication and user management powered by Clerk.
        </p>
        <NuxtLink to="/sign-in" class="btn btn-primary">
          Get Started
        </NuxtLink>
        <UserButton />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {UserButton} from 'vue-clerk'
</script>

