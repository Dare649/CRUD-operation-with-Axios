import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Add from './Add'
import App from './App'
import Update from './Update'



const AppRouter = () => {
  return (
    <BrowserRouter>
        <main>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='create' element={<Add/>} />
            <Route path='update/:id' element={<Update/>} />
        </Routes>
        </main>
    </BrowserRouter>
  )
}

export default AppRouter
