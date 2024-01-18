import { collection, getDocs, query, where } from 'firebase/firestore';
import { defineStore } from 'pinia'
import { useAuth } from 'vue-clerk'
import { db } from '../lib/firebase';

// enum LayoutType {
//     'LIST',
//     'GRID'
// }

interface UIType {
    layout: 'LIST' | 'GRID'
}

const useUI = defineStore('UI', {
    state: () => ({ 
        layout: 'LIST'
     } as UIType),

    actions: {
        setLayoutType (LayoutType: 'LIST' | 'GRID') {
            this.layout = LayoutType
        }
    },
})

export default useUI