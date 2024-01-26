<template>
    <div class="w-full h-auto flex flex-col">
      <!-- Topbar -->
      <Topbar />
      <!-- Topbar -->
  
      <!-- Heading -->
      <Heading :title="'Избранное'">
        <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
              <div class="border-b-2 border-transparent" :class="{'!border-[#6fd7ff]': layout == 'GRID'}">
                <IconCSS
                  @click="() => setLayoutType('GRID')" 
                  name="material-symbols:grid-on-sharp" 
                  class="text-[#f1f1f1] text-[24px] cursor-pointer"
                />
              </div>
              <div class="border-b-2 border-transparent" :class="{'!border-[#6fd7ff]': layout == 'LIST'}">
                <IconCSS 
                  @click="() => setLayoutType('LIST')" 
                  name="material-symbols:lists" 
                  class="text-[#f1f1f1] text-[24px] cursor-pointer"
                />
              </div>
            </div>
        </div>
      </Heading>
      <!-- Heading -->

      <div class="flex-1">
        <!-- Empty Favorites -->
          <EmptyFavorites v-if="!wishFiles || wishFiles.length == 0" />
        <!-- Empty Favorites -->
    
        <!-- Data table -->
        <div v-if="wishFiles.length" class="w-full h-auto">
          <List v-if="layout == 'LIST'" :files="wishFiles" />
          <Grid v-if="layout == 'GRID'" :files="wishFiles" />
        </div>
        <!-- Data table -->
      </div>

    </div>
  </template>

<script setup lang="ts">
import Topbar from '../../components/shared/Topbar.vue';
import Heading from '../../components/shared/Heading.vue';
import List from '../../components/list/List.vue';
import Grid from '../../components/grid/Grid.vue';
import EmptyFavorites from '../../components/empty/EmptyFavorites.vue';
import useUI from '../../store/useUI'
import useFilesStorage from '../../store/useFilesStorage'
import { storeToRefs } from 'pinia'
import { useAuth } from 'vue-clerk';

const { setLayoutType } = useUI()
const { fetchFiles } = useFilesStorage()
const { layout } = storeToRefs(useUI())
const { wishFiles } = storeToRefs(useFilesStorage())

const { isLoaded, userId } = useAuth()

const getFiles = async () => {
  fetchFiles(userId.value)
}

watch(isLoaded, () => {
  getFiles()
})

onMounted(() => {
  getFiles()
})
 
definePageMeta({
  layout: 'storage',
  // middleware: 'auth'
})
</script>

<style scoped>
</style>