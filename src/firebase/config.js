import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyCteWgMxvYAdcSINJDFBvCePmZ0RFU83w8',
    authDomain: 'readinglistapp-ab3d0.firebaseapp.com',
    projectId: 'readinglistapp-ab3d0',
    storageBucket: 'readinglistapp-ab3d0.appspot.com',
    messagingSenderId: '876190991359',
    appId: '1:876190991359:web:39c23c0396b08898cf9dca',
}

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }