<template>
    <div class="absolute left-0 top-0 w-full h-auto flex justify-between px-8 py-5">
        <div class="flex items-center gap-6">
            <Logo />
            <Button variant="gray" class="hidden sm:block">MEGA для бизнесса</Button>
        </div>
        <div class="flex items-center gap-6">
            <div class="flex gap-2 cursor-pointer">
                <LanguagesIcon />
                RU
            </div>
            <div class="w-[1px] h-full bg-[gray]/20"></div>
            <NuxtLink href="/sign-up" v-if="routeName == 'IN'">
                <Button variant="red">Регистрация</Button>
            </NuxtLink>
            <NuxtLink href="/sign-in" v-if="routeName == 'UP'">
                <Button variant="gray">Вход</Button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
import Logo from '../Logo.vue'
import { LanguagesIcon } from 'lucide-vue-next';

const route = useRoute()

const routeName = computed(() => {
    return route.name == 'sign-in' ? 'IN' : 'UP'
})
console.log(route)

</script>
<style lang="">
</style>