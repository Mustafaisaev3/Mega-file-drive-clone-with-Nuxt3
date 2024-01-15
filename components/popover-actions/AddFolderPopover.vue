<template>
    <div class="w-full h-auto bg-[#333333] rounded-lg">
        <Input placeholder="Имя папки" class=" gree" :leftIcon="'mdi:folder'"/>
        <div class="w-full flex gap-3 justify-end pt-6">
            <Button variant="gray">Отмена</Button>
            <Button variant="green">Создать</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Input from '../Input.vue'

</script>

<style scoped>
</style>