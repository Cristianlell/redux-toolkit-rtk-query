import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Todos from '../pages/Todos'

const AppRouter = () => {
  return (
    <BrowserRouter>
          <Routes>
               <Route path='/' element={<Todos/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default AppRouter