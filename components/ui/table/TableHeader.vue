<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <thead :class="cn('[&_tr]:border-b border-b-[2px] border-[#444444]', props.class)">
    <slot />
  </thead>
</template>
