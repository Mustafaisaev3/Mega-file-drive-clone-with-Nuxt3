import { Timestamp } from "firebase/firestore";

export interface IFile {
    id: string;
    name: string;
    uid: string;
    timestamp: Timestamp;
    url: string;
    type: string;
    size: number;
    isWish: boolean;
    isFolder: boolean;
    isDocument: boolean;
    isImage: boolean;
    isVideo: boolean;
    isAudio: boolean;
    isArchive?: boolean;
    archivedTime: Timestamp;
}