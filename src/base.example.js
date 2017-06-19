import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp(
  {
    apiKey: "YOUR API KEY HERE",
    authDomain: "YOUR-APP.firebaseapp.com",
    databaseURL: "YOUR-APP.firebaseio.com",
    projectId: "YOUR-APP",
    storageBucket: "YOUR-APP.appspot.com",
    messagingSenderId: "1019802345500"
  })

  const db = database(app)

  export default Rebase.createClass(db)