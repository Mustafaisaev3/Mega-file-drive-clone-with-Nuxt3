import { collection, getDocs, query, where } from 'firebase/firestore';
import { defineStore } from 'pinia'
import { useAuth } from 'vue-clerk'
import { db } from '../lib/firebase';

// const { isLoaded, userId } = useAuth()

// console.log(isLoaded, userId)

const useFilesStorage = defineStore('ProModal', {
    state: () => ({ 
        files: [] as any[],
        loading: false,
     }),

    actions: {
        async fetchFiles(userId: any) {
            this.loading = true
            console.log(userId)
            let data: any[] = [];
            const q = query(
              collection(db, "files"),
              where("uid", "==", userId),
              where("isArchive", "==", false),
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              data.push({ ...doc.data(), id: doc.id });
            });
          
            this.files = data

            this.loading = false
        },
    },
})

export default useFilesStorage