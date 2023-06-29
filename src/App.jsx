import './App.css'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navegation from './components/Navegation/Navegation'
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>

    <BrowserRouter>

      <Navegation/>
      <Routes>
        <route path='/' element={<ItemListConteiner/>} />
        <route path='/categoria/:idCategoria' element={<ItemListConteiner/>} />
        <route path='/item/:idItem' element={<ItemDetailConteiner/>} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
