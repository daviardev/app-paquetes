import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthProvider'
import { Home, NavBar, NotFound, Footer, SendPackage, Invoice, Detail, Login } from './utils/import'

const App = () => {
  return <>
  <NavBar />
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/detalle' element={<Detail />} />
          <Route path='/envio' element={<SendPackage />} />
          <Route path='/factura' element={<Invoice />} />
          <Route path='/iniciar-sesion' element={<Login />} />
      </Routes>
    </AuthProvider>  
  <Footer />
  </>
}

export default App