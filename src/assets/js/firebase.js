import Firebase from 'firebase'

let fireBaseconfig = {
  apiKey: 'AIzaSyBGIkEWrwK00bfkurE5nVuMwNxYbT_wWr0',
  authDomain: 'mylocal-97b23.firebaseapp.com',
  databaseURL: 'https://mylocal-97b23.firebaseio.com',
  projectId: 'mylocal-97b23',
  storageBucket: 'mylocal-97b23.appspot.com',
  messagingSenderId: '597788154922'
}

let app = Firebase.initializeApp(fireBaseconfig)
let db = app.database()

let productsRef = db.ref('products')
let suppliersRef = db.ref('suppliers')
let ordersRef = db.ref('orders')
let usersRef = db.ref('users')

Firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    console.log(user.email)
    console.log('user is signed in')
  } else {
    console.log('user is signed out')
  }
})

export { db, usersRef, productsRef, suppliersRef, ordersRef, Firebase }
