instalar tailwind
npm install -D tailwindcss postcss autoprefixer

iniciar tailwind
npx tailwindcss init -p

Librerias de Routing

React Router   -   V6 se une a Reach Router
Tambien son creadores de Remix Run

React Location - Creadores de React Query

Framewoks que contienen su propio sistema de routing
Next.js, Remix Run, Gatsby, Astro, Hydrogen.

Desde Version de 6.4 React Router Dom se convierte practicamente en un framework completo.

Instalacion
npm i react-router-dom

import { createBrowserRouter, routerProvider } from 'react-router-dom'

createBrowserRouter permite definir un router por medio de objeto, es decir, definir rutas por medio de un objeto principal

RouterProvider va a ser el componente de donde comienza a fluir los datos hacia los demas componentes. Espera un prop  de un Router que se define con la funcion createBrowserRouter.


Outlet: de "react-router-dom", es un componente que actua como un contenedor dinamico y va a mantener la apariencia en cada componente permitiendo que el contenido pasado a "Outlet" se inyecta a partir de ahi.
Con otras palabras, el contenido afuera de Outlet se repetira en las secciones que utilice el componente contenedor.

Link: de "react-router-dom", en vez de usar <a> 
                <Link to="/">Clientes</Link>


GIST obtener loader
https://gist.github.com/codigoconjuan/e8157b390eee8a7d7bb861343340b3a0