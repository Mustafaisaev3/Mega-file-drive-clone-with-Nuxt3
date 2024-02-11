<template>
    <div class="border rounded-md p-4 bg-[#444444] border-none">
      <h1 class="text-center text-xl text-[#ffffffce]">{{ name }}</h1>
      <div class="text-center mt-3 text-3xl font-semibold">{{ description }}</div>
      <div class="flex justify-center items-baseline my-8">
        <span class="mr-2 text-5xl font-extrabold text-white">
          {{ price !== "Free" ? "$" : ""}}
          {{ price }}
        </span>
        <span class="text-gray-500 dark:text-gray-400">/месяц</span>
      </div>
      <div class="w-full flex justify-center">
          <Button @click="onSubmit" variant="green">
            Submit
          </Button>
      </div>
      <Separator class="mt-4" />
      <p class="mt-3 opacity-75 text-sm text-white">Включает в себя:</p>

      <div class="flex flex-col space-y-2 mt-4">
        <div v-for="option in options" :key="option" class="flex items-center">
          <IconCSS name="mdi:check" class="mr-2 text-lg text-[#50fc50]" />
          <span class="text-sm text-[#3cc73c]">{{ option }}</span>
        </div>
      </div>
    </div>
</template>
<script setup lang="ts">
import { Button } from "../ui/button";
import { Separator } from "radix-vue";
// import { Separator } from "../ui/separator";
import { useUser } from "vue-clerk";

const { user } = useUser();

interface PlanCardProps {
  name: string;
  description: string;
  price: string;
  options: string[];
  priceId?: string;
}

const {
  description,
  name,
  options,
  price,
  priceId,
} = defineProps<PlanCardProps>()

const onSubmit = () => {
//   const promise = axios
//     .post("/api/subscription", {
//       email: user?.value!.emailAddresses[0].emailAddress,
//       name: user?.value!.fullName,
//       userId: user?.value!.id,
//       priceId,
//     })
//     .then((res) => {
//       window.open(res.data, "_blank")
//       console.log(res)
//     });
}
</script>
<style> 
</style>