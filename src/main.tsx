import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home.tsx'
import Movie from './pages/Movie.tsx'
import Search from './pages/Search.tsx'
import Erro from './pages/Erro.tsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<Erro/>,
    children:[{
      path:'/',
      element:<Home/>
    },
{
  path:'/movie/:id',
  element:<Movie/>
},
{
  path:'/search',
  element:<Search/>
},

    ]
},


])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

  <RouterProvider router={router}/>
  </React.StrictMode>
)
