import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
import Login from './components/Login'
import NgoPortal from './components/NgoPortal'
import Listings from './components/Listings'
import PostComponent from './components/post'
const App = () =>
{
  const routes = createBrowserRouter(
    [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/ngo-portal",
        element: <NgoPortal />
      },
      {
        path: "/listings",
        element: <Listings />
      },
      {
        path: "/doctor",
        element: <PostComponent />
      },
      {
        path: "/listings",
        element: <Listings />
      },
    ]
  )

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App