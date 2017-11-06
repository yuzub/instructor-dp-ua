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


// Users can only write data they own

// This app has user feedbacks nested under their user id.
// You can prevent other users from accessing or writing this data
// by comparing the auth.uid to the uid database key.
// See Example of Firebase Database Rules below

// "rules": {
//   "feedbacks": {
//      "$uid": {
//        ".read": "$uid === auth.uid",
//        ".write": "$uid === auth.uid"
//      }
//    }
//  }
