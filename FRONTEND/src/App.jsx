import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ProductPage from './Pages/ProductPage'
import ShopPage from './Pages/ShopPage'
import MyContextProvider from './Context/MyContextProvider'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <MyContextProvider>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/shop' element={<ShopPage />}/>
            <Route path='/product/:id' element={<ProductPage />}/>
          </Routes>
        </MyContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App