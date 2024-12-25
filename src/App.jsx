import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Pastes from './components/Pastes'
import ViewPaste from './components/ViewPaste'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div className='w-[95vw]'>
        <Navbar />
        <Home />
      </div>
    },
    {
      path: '/pastes',
      element: 
      <div className='w-[95vw]'>
        <Navbar />
        <Pastes />
      </div>
    },
    {
      path: '/pastes/:id',
      element: 
      <div className='w-[95vw]'>
        <Navbar />
        <ViewPaste />
      </div>
    },
  ]
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />

    </div>
  )
}

export default App