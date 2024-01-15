<template>
    <div class="w-full h-auto flex items-center justify-between px-4">
        <div>
            <h2 class="text-[#f1f1f1]">Облачный диск</h2>
        </div>
        <div class="flex items-center gap-6">
            <Popover>
              <PopoverTrigger asChild>
                <div class="flex gap-1 items-center cursor-pointer">
                  <IconCSS name="material-symbols:add-circle-outline" class="text-[#81cfb3] text-[26px]"/>
                  <h2 class="text-[#f1f1f1] text-sm">Создать папку</h2>
                </div>
              </PopoverTrigger>
              <PopoverContent class="py-4 w-[400px]">
                <AddFolderPopover />
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <div class="flex gap-1 items-center cursor-pointer">
                    <IconCSS name="streamline:upload-circle" class="text-[#6fd7ff] text-[21px]"/>
                    <h2 class="text-[#f1f1f1] text-sm">Загрузить файл</h2>
                </div>
              </PopoverTrigger>
              <PopoverContent class="py-2 px-2 w-[200px]">
                <UploadFilePopover />
              </PopoverContent>
            </Popover>
            <div class="flex items-center gap-2">
                <IconCSS name="material-symbols:grid-on-sharp" class="text-[#f1f1f1] text-[24px] cursor-pointer"/>
                <IconCSS name="material-symbols:lists" class="text-[#f1f1f1] text-[24px] cursor-pointer"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import AddFolderPopover from '../popover-actions/AddFolderPopover.vue';
import UploadFilePopover from '../popover-actions/UploadFilePopover.vue';

</script>

<style scoped>
</style>