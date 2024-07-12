// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { products } from '../data/asyncMock.jsx';
import { collection, addDoc } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBvrOitOfwGYrPUnqCfY5_R6IC0YqvMZ2U',
    authDomain: 'coderhouse-ecommerce-er.firebaseapp.com',
    projectId: 'coderhouse-ecommerce-er',
    storageBucket: 'coderhouse-ecommerce-er.appspot.com',
    messagingSenderId: '53578659167',
    appId: '1:53578659167:web:d1e2efca3e7ade4357b2ea',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

//console.log('se conecta');

/*products.forEach((product) => {
    addDoc(collection(db, 'products'), product)
        .then((elem) => console.log(`Se agregó el producto id: ${elem.id}`))
        .catch((error) => console.error('Error al agregar el producto', error));
});*/
