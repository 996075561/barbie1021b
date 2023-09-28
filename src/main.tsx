import React from 'react'
import './main.css'
import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'
import Main from './componentes/main/Main'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<>
    <Header/>
    <Main/> 
    <Footer/>
    </>,
  },
  {
    path: "/sobre",
    element:<>
    <Header/>
    <div className='content-main'>Pagina do sobre</div> 
    <Footer/>
    </>,
  },
  {
    path: "/noticias",
    element: <>
    <Header/>
    <div className='content-main'>Pagina do noticias</div>
    <Footer/>
    </>,
    
  },
  {
    path: "/contato",
    element: <>
    <Header/>
    <div className='content-main'>Pagina de contatos</div>
    <Footer/>
    </>,
   
  },
  // {
  //   path: "/logo",
  //   element:<>
  //   <Header/>
  //   <div className='content-main'>Home</div>
  //   <Footer/>
  //   </>, 
  // },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
