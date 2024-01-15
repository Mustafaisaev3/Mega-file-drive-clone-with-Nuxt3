<template>
  <div class="w-full h-full flex">
    <LeftPanel :storageUsage="true">
      <div class="w-full h-[300px] flex flex-col gap-2">

        <div class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2">
          <IconCSS name="mdi:cloud" class="text-[#f1f1f1] text-[20px]" />
          <div class="text-base text-white">Облачный диск</div>
        </div>
        
        <div class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2">
          <IconCSS name="mdi:clock-time-four" class="text-[#f1f1f1] text-[20px]" />
          <div class="text-base text-white">Недавние</div>
        </div>

        <div class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2">
          <IconCSS name="mdi:cards-heart" class="text-[#f1f1f1] text-[20px]" />
          <div class="text-base text-white">Избранное</div>
        </div>

        <div class="w-full h-9 rounded-md hover:bg-[#222222] cursor-pointer hover:shadow-sm px-4 py-2 flex items-center gap-2">
          <IconCSS name="mdi:delete" class="text-[#f1f1f1] text-[20px]" />
          <div class="text-base text-white">Корзина</div>
        </div>

      </div>
    </LeftPanel>
  </div>
</template>

<script setup lang="ts">
import {UserButton} from 'vue-clerk'
import LeftPanel from '../components/shared/LeftPanel.vue';
</script>

