import { BrowserRouter, createBrowserRouter, Link, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import HomeLayout from './layouts/HomeLayout'

const router = createBrowserRouter([
  {
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  },

])


function App() {

  return (

    <RouterProvider router={router} />

  )
}

export default App
