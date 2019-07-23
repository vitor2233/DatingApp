import { Photo } from './photo';

export interface User {
    id: number;
    username: string;
    knowAs: number;
    age: number;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos: Photo[];
}
