import firebase from 'firebase';
import 'firebase/firestore';



if(!firebase.apps.lenght){
    firebase.initializeApp({
        apiKey: process.env.local.NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: process.env.local.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.local.NEXT_PUBLIC_FIREBASE_PROJECT_ID
    })
}

export default firebase