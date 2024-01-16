<template>
    <div class="w-full h-auto bg-[#333333] rounded-lg">
        <form @submit.prevent="onSubmit">
          <FormField v-slot="{ componentField }" name="folderName">
            <FormItem>
                <FormControl>
                    <Input placeholder="Имя папки" class=" gree" :leftIcon="'mdi:folder'" v-bind="componentField"/>
                </FormControl>
                <FormMessage />
            </FormItem>
          </FormField>
            <div class="w-full flex gap-3 justify-end pt-6">
                <Button variant="gray">Отмена</Button>
                <Button variant="green" type="submit">Создать</Button>
            </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import Input from '../Input.vue'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useUser } from 'vue-clerk';
import { useRouter } from 'vue-router';
import { db } from '../../lib/firebase';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../ui/form'


const { user } = useUser()
const router = useRouter()

const formSchema = toTypedSchema(z.object({
  folderName: z.string().min(2, 'Введите имя папки').max(50,'Имя должно содержать не более 50 символов'),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values: any) => {
    addDoc(collection(db, "files"), {
      name: values.folderName,
      timestamp: serverTimestamp(),
      uid: user?.value?.id,
      isArchive: false,
      isDocument: false,
      isFolder: true,
    }).then(() => {
      form.resetForm();
      router.go(0)
    })
})

</script>

<style scoped>
</style>