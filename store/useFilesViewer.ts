import { defineStore } from 'pinia'
import type { IFile } from '../types';

interface FilesViewerType {
    isOpen: boolean;
    file: IFile | null
}

const useFilesViewer = defineStore('FilesViewer', {
    state: () => ({ 
        isOpen: true,
        file: null
    } as FilesViewerType),

    actions: {
        onOpen () {
            this.isOpen = true
        },
        onClose () {
            this.isOpen = false
        },
        setFile (file: IFile) {
            this.file = file
        },
        clearFile () {
            this.file = null
        }
    },
})

export default useFilesViewer