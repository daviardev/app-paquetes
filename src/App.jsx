import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, NavBar, NotFound, Footer, SendPackage, Invoice, Detail, AboutUs, ContactUs } from './utils/import'

const App = () => {
  return <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/factura' element={<Invoice />} />
      <Route path='contacto' element={<ContactUs />} />
      <Route exact path='/detalle' element={<Detail />} />
      <Route path='/sobre-nosotros' element={<AboutUs />} />
      <Route exact path='/envio' element={<SendPackage />} />
    </Routes>
    <Footer />
  </>
}

export default App