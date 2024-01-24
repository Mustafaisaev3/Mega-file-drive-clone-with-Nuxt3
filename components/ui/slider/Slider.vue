<script setup lang="ts">
import type { SliderRootEmits, SliderRootProps } from 'radix-vue'
import { SliderRange, SliderRoot, SliderThumb, SliderTrack, useEmitAsProps } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps<SliderRootProps>()
const emits = defineEmits<SliderRootEmits>()

const emitsAsProps = useEmitAsProps(emits)
</script>

<template>
  <SliderRoot
    :class="cn(
      'relative flex w-full touch-none select-none items-center',
      $attrs.class ?? '',
    )"
    v-bind="{ ...props, ...emitsAsProps }"
  >
    <SliderTrack class="relative h-2 w-full grow overflow-hidden rounded-full bg-[#666666]">
      <SliderRange class="absolute h-full bg-[#cccccc]" />
    </SliderTrack>
    <SliderThumb class="block h-5 w-5 rounded-full bg-background" />
  </SliderRoot>
</template>
