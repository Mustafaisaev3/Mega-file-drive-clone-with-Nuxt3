<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class'],
  placeholder?: string,
  leftIcon?: string,
  rightIcon?: string,
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})
</script>

<template>
    <div class="input-container h-10 flex items-center bg-[#222222] border border-[#222222] rounded-sm px-3 py-2">
        <IconCSS v-if="leftIcon" :name="leftIcon" class="left-icon text-[26px] text-[#656565]"/>
        <input v-model="modelValue" :placeholder="placeholder" :class="cn('w-full px-3 bg-transparent placeholder:text-[#656565] border-[#444444] focus:border-1 focus:border-sky-300 text-white outline-none', props.class ?? '')">
        <IconCSS v-if="rightIcon" :name="rightIcon" class="right-icon text-[26px] text-[#656565]"/>
    </div>
</template>

<style scoped>
.input-container:focus-within {
  border: 1px solid #6fd7ff;
}

.left-icon:has(+ input:focus) {
  color: white;
}

input:focus + .right-icon {
    color: white;
}
</style>
