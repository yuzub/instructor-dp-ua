// import { firebase } from '../../firebase';


export interface IFeedback {
  $key?: string;
  instructorKey: string;
  // uidFeedback: string;
  // displayName: string;
  // rating: number;
  // verified: boolean;
  // createdAt: Object;
  text: string;
}


/* export class Feedback implements IFeedback {
  instructorKey: string;
  text: string;
  verified = false; // after checking admin change this to true
  createdAt = firebase.database.ServerValue.TIMESTAMP;

  constructor(instructorKey: string, text: string) {
    this.instructorKey =instructorKey;
    this.text = text;
  }
} */
