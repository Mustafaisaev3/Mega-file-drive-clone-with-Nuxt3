import { Timestamp } from "firebase/firestore";

export interface IFile {
    id: string;
    name: string;
    uid: string;
    timestamp: Timestamp;
    image: string;
    type: string;
    size: number;
    isStar: boolean;
    isFolder: boolean;
    isDocument: boolean;
    isImage: boolean;
    archivedTime: Timestamp;
}