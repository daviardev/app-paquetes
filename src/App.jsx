import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home, NavBar, NotFound } from './utils/import'

const App = () => {
  return <>
  <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </>
}

export default App