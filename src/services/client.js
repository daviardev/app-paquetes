import { initializeApp } from 'firebase/app'
import { getFirestore, Timestamp, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_FIREBASE_APPID
  }

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const sendPackage = async ({paquete, cc_cliente, ciudad_cliente, nombre_cliente, telefono_cliente, direccion_cliente, cc_recibe, pais_recibe, ciudad_recibe, nombre_recibe, telefono_recibe, direccion_recibe}) => {
    return await addDoc(collection(db, 'envios'), {
        paquete,
        cc_cliente,
        ciudad_cliente,
        nombre_cliente,
        telefono_cliente,
        direccion_cliente,
        cc_recibe,
        pais_recibe,
        ciudad_recibe,
        nombre_recibe,
        telefono_recibe,
        direccion_recibe,
        createdAt: Timestamp.fromDate(new Date())
    })
}

// const mapPackageSends = (doc) => {
//     const data = doc.data()
//     const id = doc.id
//     const { createdAt } = data

//     return {
//         id,
//         ...data,
//         createdAt: +createdAt.toDate()
//     }
// }