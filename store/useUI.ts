import { defineStore } from 'pinia'

interface UIType {
    layout: 'LIST' | 'GRID'
}

const useUI = defineStore('UI', {
    state: () => ({ 
        layout: 'LIST',
    } as UIType),

    actions: {
        setLayoutType (LayoutType: 'LIST' | 'GRID') {
            this.layout = LayoutType
        }
    },
})

export default useUI