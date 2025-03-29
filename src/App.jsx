import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import SignUp from './components/SignUp'
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
    ]
  )

  return (
    <div><RouterProvider router={routes}/></div>
  )
}

export default App