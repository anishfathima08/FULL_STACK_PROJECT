import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Pages/Form'
import Products from './Pages/Products'
import ContextProvider from './Context/ContextProvider'

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  )
}

export default App