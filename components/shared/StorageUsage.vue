<template>
    <div class="w-full h-[80px] border-t-2 border-[#333333] p-2">
        <div class="title-block flex justify-between items-center pb-1">
            <div class="text-[12px] text-[#ffffff]">Бесплатный</div>
            <Dialog>
              <DialogTrigger>
                <div class="text-[12px] text-[#5afee8]">
                  Улучшить
                </div>
              </DialogTrigger>
              <PlanModal />
            </Dialog>
        </div>
        <div class="progress w-full h-auto my-1">
            <Progress :model-value="33" />
        </div>
        <div class="info text-sm text-[#ffffff]">
            <span class="text-sm text-[#5afee8]">925 КБ</span> из 20 ГБ
        </div>
    </div>
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
import { Progress } from "../ui/progress";
import useModal from '../../store/useModal'
import PlanModal from '../modals/PlanModal.vue'

const { onOpen } = useModal()
</script>

<style scoped>
</style>