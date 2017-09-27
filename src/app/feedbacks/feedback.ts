// import { firebase } from '../../firebase';


export interface IFeedback {
    $key?: string;
    instructorKey: string;
    uidFeedback: string;
    displayName: string;
    rating: number;
    verified: boolean;
    createdAt: Object;
    title: string;
}


/* export class Feedback implements IFeedback {
    completed = false;
    createdAt = firebase.database.ServerValue.TIMESTAMP;
    title;

    constructor(title: string) {
        this.title = title;
    }
} */