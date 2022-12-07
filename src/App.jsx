import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, NavBar, NotFound, Footer, SendPackage, Invoice, Detail, AboutUs } from './utils/import'

const App = () => {
  return <>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route exact path='/detalle' element={<Detail />} />
      <Route exact path='/envio' element={<SendPackage />} />
      <Route path='/factura' element={<Invoice />} />
      <Route path='/sobre-nosotros' element={<AboutUs />} />
    </Routes>
    <Footer />
  </>
}

export default App