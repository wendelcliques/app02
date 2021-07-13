/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { BrouserRouter as Router, Route } from 'react-router-dom';
import { Inicio } from './componentes/Inicio';
import { Cadastrar } from './componentes/Cadastrar';
import { Logar } from './componentes/Logar';
import { AuthProvider }from './auth/AuthContext';

import { RotaPrivada } from './auth/RotaPrivada';





const App = () => {
return (
  <AuthProvider>
  <Router>
  <RotaPrivada exact path="/" component={Inicio} />
  <Route exact path="/logar" component={Logar} />
  <Route exact path="/cadastrar" component={Cadastrar} />
  </Router>
  </AuthProvider>
)
}

export default App
/*


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

*/
