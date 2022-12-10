import { initializeApp } from 'firebase/app'
import { getFirestore, Timestamp, collection, addDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBCFxHO71qawyuI9QPqZ-Lb41RJAjS01EY",
    authDomain: "db-paquetes-c7193.firebaseapp.com",
    projectId: "db-paquetes-c7193",
    storageBucket: "db-paquetes-c7193.appspot.com",
    messagingSenderId: "416257868961",
    appId: "1:416257868961:web:650826cdcc62dc5f61dce0"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

export const sendPackage = async ({ paquete, cc_cliente, ciudad_cliente, nombre_cliente, telefono_cliente, direccion_cliente, cc_recibe, pais_recibe, ciudad_recibe, nombre_recibe, telefono_recibe, direccion_recibe }) => {
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