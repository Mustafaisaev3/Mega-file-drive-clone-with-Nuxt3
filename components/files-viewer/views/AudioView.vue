<template>
    <div class="w-full h-[calc(100vh-70px)] flex flex-col items-center justify-center bg-[#222222]">
        <div ref="PlayerContainerRef" class="w-[600px] h-[600px] rounded-2xl p-5 flex flex-col items-center justify-center cursor-pointer">
            <div class="pb-[50px]">
                <IconCSS name="ph:music-note-fill" class="text-[300px] text-[#db5757]" />
            </div>
            <AudioPlayer 
              :src="file.url"
              class=""
            />
        </div>
    </div>
</template>

<script setup lg="ts">
import { ref } from 'vue'
import useFilesViewer from '../../../store/useFilesViewer'
import { AudioPlayer } from 'vue-md-player'
import { storeToRefs } from 'pinia'

const { file } = storeToRefs(useFilesViewer())

const PlayerContainerRef = ref()
onMounted(() => {
    if (PlayerContainerRef) {
        PlayerContainerRef.value.addEventListener('click', () => {
            document.querySelectorAll('.player-btn')[0].click()
        })
    }
})

</script>

<style scoped>
.vuemdplayer {
    background: rgb(24, 24, 24);
    border-radius: 20px;
}
</style>
