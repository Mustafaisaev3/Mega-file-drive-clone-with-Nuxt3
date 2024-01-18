<template>

  
  <div class="w-full h-full">
    <!-- Rename -->
    <label>
        <div
          class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
          role="button"
        >
        <IconCSS name="mdi:rename-outline" class="text-[#cccccc] text-[18px]"/>
          <span class="text-[#cccccc]">Переименовать</span>
        </div>
    </label>
    <!-- Rename -->
    
    <!-- Add to Wishlist -->
    <label v-if="!file.isWish">
        <div
          class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
          role="button"
          @click="onAddInWish"
        >
        <IconCSS name="mdi:cards-heart" class="text-[#cccccc] text-[18px]"/>
          <span class="text-[#cccccc]">В Избранное</span>
        </div>
    </label>
    <!-- Add to Wishlist -->

    <!-- Delete from Wishlist -->
    <label v-if="file.isWish">
        <div
          class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
          role="button"
          @click="onRemoveFromWish"
        >
        <IconCSS name="mdi:heart-broken" class="text-[#cccccc] text-[18px]"/>
          <span class="text-[#cccccc]">Удалить Избранные</span>
        </div>
    </label>
    <!-- Delete from Wishlist -->

    <!-- Download file -->
    <label v-if="!file.isFolder">
        <div
          class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
          role="button"
          @click="onDownload"
        >
        <IconCSS name="mdi:download" class="text-[#cccccc] text-[18px]"/>
          <span class="text-[#cccccc]">Скачать</span>
        </div>
    </label>
    <!-- Download file -->

    <!-- Share file -->
    <label v-if="!file.isFolder">
        <div
          class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
          role="button"
          @click="onShare"
        >
        <IconCSS name="ic:sharp-link" class="text-[#cccccc] text-[20px]"/>
          <span class="text-[#cccccc]">Поделиться Ссылкой</span>
        </div>
    </label>
    <!-- Share file -->

    <!-- Delete file -->
    <label>
        <div
          class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
          role="button"
          @click="onDelete"
        >
        <IconCSS name="material-symbols:delete-outline" class="text-[#cccccc] text-[18px]"/>
          <span class="text-[#cccccc]">В Корзину</span>
        </div>
        <input
          type="file"
          class="hidden"
          accept="image/*"
        />
    </label>
    <!-- Delete file -->
  </div>
   
</template>
<script setup lang="ts">
import { doc, setDoc } from 'firebase/firestore';
import type { IFile } from '../../types';
import { db } from '../../lib/firebase';
import useFilesStorage from '../../store/useFilesStorage';
import { useAuth } from 'vue-clerk';

const { file } = defineProps({
  file: {
    type: Object as PropType<IFile>,
    required: true,
  }
})

const { fetchFiles } = useFilesStorage()
const { userId } = useAuth()
const getFiles = async () => {
  fetchFiles(userId.value)
}

const reference = doc(db, 'files', file.id);

const onAddInWish = (e: Event) => {
  e.stopPropagation();
  setDoc(reference, {
    ...file,
    isWish: true,
  })

  getFiles()
};

const onRemoveFromWish = (e: Event) => {
  e.stopPropagation();
  setDoc(reference, {
    ...file,
    isWish: false,
  })

  getFiles()
};

const onDownload = async () => {
  const fileItem = await fetch(file.url, {
    mode: 'no-cors'
  })

  const fileBlog = await fileItem.blob()
  const fileURL = URL.createObjectURL(fileBlog)

  const link = document.createElement('a')
  link.href = fileURL
  link.download = file.name
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
};


const onShare = () => {
  if (file.isFolder) {
    return;
  }
  navigator.clipboard.writeText(file.url);
};

const onDelete = (e: Event) => {
  e.stopPropagation();

  setDoc(reference, {
    ...file,
    isArchive: true,
    archivedTime: new Date(),
  })

  getFiles()
};

</script>
<style>  
</style>