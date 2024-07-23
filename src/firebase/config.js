import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDyli35r1NMyWkOCPT278v1GOUJoXeNxkk",
    authDomain: "vue-blog-31cdf.firebaseapp.com",
    projectId: "vue-blog-31cdf",
    storageBucket: "vue-blog-31cdf.appspot.com",
    messagingSenderId: "581383221467",
    appId: "1:581383221467:web:561b65d9129e9247409cfe",
    measurementId: "G-X48BW0HYLV"
}

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig)

// Mendapatkan instance Firestore
const projectFireStore = getFirestore(app)
export { projectFireStore }
