<template>
  <DialogContent class="max-w-[700px] bg-[#333333] border-none">
    <DialogHeader>
      <!-- <Image src={"/one.svg"} alt="one" width={50} height={50} /> -->
    </DialogHeader>
    <div class="opacity-75 text-center text-white">
      Выберите план <span class="text-[red] font-semibold">Mega</span>, который подходит именно вам.
    </div>
    <div class="grid grid-cols-2 gap-4">
      <PlanCard
        v-for="plan in PLANS"
        :key="plan.name"
        :name="plan.name"
        :description="plan.description"
        :options="plan.options"
        :price="plan.price"
        :priceId="plan.priceId"
      />
    </div>
  </DialogContent>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog'
import PlanCard from '../shared/PlanCard.vue';

const PLANS = [
    {
        name: 'Бесплатный',
        description: '1.5 GB',
        price: 'Free',
        options: [
          '1.5 GB памяти',
          'Безопасный обмен файлами',
          'Приватные сообщения',
        ]
    },
    {
        name: 'Премиум',
        description: '150 GB',
        price: '150',
        options: [
          '150 GB памяти',
          'Безопасный обмен файлами',
          'Приватные сообщения',
          'Защищённые паролем ссылки',
          'Обмен объёмами передач',
        ],
        priceId: 'price_1OiMecBfsROzEFg4yxPrSxqc'
    },
]
</script>