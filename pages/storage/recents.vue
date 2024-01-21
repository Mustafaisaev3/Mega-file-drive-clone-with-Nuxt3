<template>
  <div class="w-full h-auto flex flex-col">
    <!-- Topbar -->
    <Topbar />
    <!-- Topbar -->

    <!-- Heading -->
    <Heading :title="'Недавние'" >
    </Heading>
    <!-- Heading -->

    <div class="flex-1">
      <!-- Empty Trash -->
        <EmptyRecent v-if="!recentFiles || recentFiles.length == 0" />
        <!-- <EmptyRecent v-if="!recentFiles || recentFiles.length == 0" /> -->
      <!-- Empty Trash -->
  
      <!-- Data table -->
      <div v-if="recentFiles.length" class="w-full h-auto p-4 overflow-y-auto border-t-[1px] border-[gray]">
        <div>
          <!-- <div class="text-[#6fdcff] ">пятница, 19 января 2024 г.</div> -->
          <div class="flex flex-col gap-1 px-10 py-4">
            <RecentItem v-for="file in recentFiles" :file="file"/>
          </div>
        </div>
      </div>
      <!-- Data table -->
    </div>

  </div>
</template>

<script setup lang="ts">
import Topbar from '../../components/shared/Topbar.vue';
import Heading from '../../components/shared/Heading.vue';
import RecentItem from '../../components/shared/RecentItem.vue'
import EmptyRecent from '../../components/empty/EmptyRecent.vue';
import useFilesStorage from '../../store/useFilesStorage'
import { storeToRefs } from 'pinia'
import { useAuth } from 'vue-clerk';

const { fetchRecentFiles } = useFilesStorage()
const { recentFiles } = storeToRefs(useFilesStorage())
const { isLoaded, userId } = useAuth()

const getFiles = async () => {
  fetchRecentFiles(userId.value)
}

watch(isLoaded, () => {
  getFiles()
})

onMounted(() => {
  getFiles()
})

definePageMeta({
  layout: 'storage'
})
</script>

<style scoped>
</style>