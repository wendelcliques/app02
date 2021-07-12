/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import firebase from './utils/Firebase'
import 'firebase/auth'
import Cabeçalho from './componentes/Cabeçalho'
import Corpo from './componentes/Corpo'

const App = () => {

 firebase.auth().onAuthStateChanged(user => {
   console.log(user);
 })
  
  return (
    <>
    <Cabeçalho />
    <Corpo />
    
    </>
  )
}

export default App
