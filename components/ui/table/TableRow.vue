<script setup lang="ts">
import { cn } from '@/lib/utils'

const props = defineProps<{ class?: string }>()
</script>

<template>
  <tr :class="cn('border-b transition-colors hover:bg-[#444444] data-[state=selected]:bg-muted ', props.class)">
    <slot />
  </tr>
</template>
