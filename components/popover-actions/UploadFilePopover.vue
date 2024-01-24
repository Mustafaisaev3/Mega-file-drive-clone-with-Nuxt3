<template>
    <div class="w-full h-auto">
        <label>
            <div
              class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
              role="button"
            >
              <IconCSS name="ic:baseline-upload-file" class="text-[#cccccc] text-[25px]"/>
              <span class="text-[#cccccc]">Загрузить файл</span>
            </div>
            <input
              type="file"
              class="hidden"
              @change="uploadFile"
            />
        </label>
        <label>
            <div
              class="flex items-center hover:bg-[#444444] transition py-2 px-2 space-x-2 text-sm rounded-md"
              role="button"
            >
            <IconCSS name="ic:outline-drive-folder-upload" class="text-[#cccccc] text-[25px]"/>
              <span class="text-[#cccccc]">Загрузить папку</span>
            </div>
            <input
              type="file"
              class="hidden"
              accept="image/*"
            />
        </label>
    </div>
</template>

<script setup lang="ts">
import { useUser } from "vue-clerk";
import { addDoc, updateDoc, collection, serverTimestamp, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { db, storage } from "../../lib/firebase";
import { useRouter } from "vue-router";

const { user } = useUser()

const uploadFile = (e: Event) => {
  // const { files } = (<HTMLInputElement>e.target)
  // console.log(files)
  const router = useRouter()
  const { files } = (<HTMLInputElement>e.target)
  if (!files) return;

  const file = files[0];
  let fileUrlStr = "";

  const reader = new FileReader();

  if (file) {
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      fileUrlStr = e.target?.result as string;
      console.log(e.target?.result)
    };
  }

  addDoc(collection(db, "files"), {
      name: file.name,
      type: file.type,
      size: file.size,
      uid: user?.value?.id,
      timestamp: serverTimestamp(),
      isArchive: false,
      isVideo: file.type.includes('video') ? true : false,
      isImage: file.type.includes('image') ? true : false,
      isDocument: !file.type.includes('image') && !file.type.includes('video') ? true : false,
      isFolder: false
    }
  ).then((docs) => {
    const refs = ref(storage, `files/${docs.id}/${file.name}`) 
    console.log(refs)
    uploadString(refs, fileUrlStr, "data_url").then(() => {
      getDownloadURL(refs).then((url: string) => {
        console.log(url)
        updateDoc(doc(db, 'files', docs.id), {
          url,
        }).then(() => {
          router.go(0)
        })
      });
    });
  });
}

</script>

<style>
</style>