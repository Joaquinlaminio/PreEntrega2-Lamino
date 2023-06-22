import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navegation from './components/Navegation/Navegation'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import './App.css'

function App() {
  

  return (
    <>
      <Navegation/>
      <ItemListConteiner greeting = {"Bienvenido a Tienda de Cerámica"} />
      <h1></h1>
    </>
  )
}

export default App
