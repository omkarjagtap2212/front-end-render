import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import './index.css'
import Home from './components/Home.jsx'
import PaymentPage from './components/PaymentPage.jsx'

const router =createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/paymentSuccess",
    element:<PaymentPage/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}>
      {/* <App /> */}


      </RouterProvider>


    </ChakraProvider>
  </React.StrictMode>,
)
