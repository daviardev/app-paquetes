import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, NavBar, NotFound, Login, Footer, SendPackage, Invoice } from './utils/import'

const App = () => {
  return <>
  <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/ingresar' element={<Login />} />
      <Route path='/envio' element={<SendPackage />} />
      <Route path='/factura' element={<Invoice />} />
    </Routes>
    <Footer />
  </>
}

export default App