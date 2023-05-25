import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDgdRfV0mlC0t3Zda4v6ezE6egl2XBcq4U',
  authDomain: 'base-35e2b.firebaseapp.com',
  projectId: 'base-35e2b',
  storageBucket: 'base-35e2b.appspot.com',
  messagingSenderId: '556059715057',
  appId: '1:556059715057:web:93c659f16b2f277ac6d050',
  measurementId: 'G-CCTN9BZ5BD',
})

const auth = app.auth()
export { auth }
export default app
