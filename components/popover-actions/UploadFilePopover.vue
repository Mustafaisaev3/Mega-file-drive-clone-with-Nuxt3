<template>
    <div class="w-full h-auto">
        <label>
            <div
              class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
              role="button"
            >
              <IconCSS name="ic:baseline-upload-file" class="text-[#cccccc] text-[25px]"/>
              <span class="text-[#cccccc]">Загрузить файл</span>
            </div>
            <input
              type="file"
              class="hidden"
              accept="image/*"
              @change="uploadFile"
            />
        </label>
        <label>
            <div
              class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
              role="button"
            >
            <IconCSS name="ic:outline-drive-folder-upload" class="text-[#cccccc] text-[25px]"/>
              <span class="text-[#cccccc]">Загрузить папку</span>
            </div>
            <input
              type="file"
              class="hidden"
              accept="image/*"
            />
        </label>
    </div>
</template>

<script setup lang="ts">

const uploadFile = (e: any) => {
    console.log(e.target.files)

}


</script>

<style>
</style>