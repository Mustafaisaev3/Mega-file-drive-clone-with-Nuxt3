import { defineStore } from 'pinia'

export enum ModalTypes {
    PLAN_VIEW,
    RENAME_FILE_VIEW
}

interface ModalType {
    isOpen: boolean
    view: ModalTypes | null
}

const useModal = defineStore('modal', {
    state: () => ({ 
        isOpen: false,
        view: null,
    } as ModalType),

    actions: {
        onOpen () {
            console.log('open modal')
            this.isOpen = true
        },
        onClose () {
            this.view = null
            this.isOpen = false
        },
    },
})

export default useModal