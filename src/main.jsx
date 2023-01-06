import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'


/*
  Padre /
  Se repite el Layout (componente con Outlet) para todas las secciones padre e hijos
  Con index: true se puede crear elements para contenido de / padre.
*/

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Index />,
          loader: clientesLoader
        },
        {
          path: '/clientes/nuevo',
          element: <NuevoCliente />,
          action: nuevoClienteAction
        }
      ]
    },
    
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
