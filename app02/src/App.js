/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {Button} from 'react'

import firebase from './utils/Firebase'
import 'firebase/auth'
import Cabeçalho from './componentes/Cabeçalho'
import Corpo from './componentes/Corpo'
import { addEntry } from './services/Entries'



const App = () => {

 firebase.auth().onAuthStateChanged(user => {
   console.log(user);
 })

 const save = () => {
   addEntry();
 }
  
  return (
    <>
    <Cabeçalho />
    <Corpo />

    <button onClick={save()} > salvar</button>
    
    </>
  )
}

export default App
