import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
}

const app = initializeApp(firebaseConfig)

const authGoogle = getAuth(app)

export const loginGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    signInWithPopup(authGoogle, googleProvider).then(res => {
        const name = res.user.displayName
        const email = res.user.email

        console.log(`El nombre es: ${name}\nEl correo es: ${email}`)
    }).catch(err => {
        console.error(err)
    })
}