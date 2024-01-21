import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { defineStore } from 'pinia'
import { db } from '../lib/firebase';

const useFilesStorage = defineStore('Files', {
    state: () => ({ 
        files: [] as any[],
        trashFiles: [] as any[],
        recentFiles: [] as any[],
        loading: false,
     }),

    getters: {
        wishFiles: (state) => state.files.filter(item => item.isWish),
    },

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
        async fetchTrashFiles(userId: any) {
            this.loading = true
            let data: any[] = [];
            const q = query(
              collection(db, "files"),
              where("uid", "==", userId),
              where("isArchive", "==", true),
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              data.push({ ...doc.data(), id: doc.id });
            });
          
            this.trashFiles = data

            this.loading = false
        },
        async fetchRecentFiles(userId: any) {
            this.loading = true
            let data: any[] = [];
            const q = query(
              collection(db, "files"),
              where("uid", "==", userId),
              where("isArchive", "==", false),
              limit(4)
            );
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
              data.push({ ...doc.data(), id: doc.id });
            });
            this.recentFiles = data

            this.loading = false
        },
    },
})

export default useFilesStorage