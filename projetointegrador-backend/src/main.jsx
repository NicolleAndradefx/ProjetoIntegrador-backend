import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import Home from './routes/Home.jsx';

import BolosdePote from './routes/BolosdePote.jsx';

import SobreNos from './routes/SobreNos.jsx';

import CadastroUsuario from './routes/CadastroUsuario.jsx';

import CarrinhodeCompra from './routes/CarrinhodeCompra.jsx';

import LoginUsuario from './routes/LoginUsuario.jsx';

import RecuperarSenhaUsuario from './routes/RecuperarSenhaUsuario.jsx';

import AlterarSenhaUsuario from './routes/AlterarSenhaUsuario.jsx';

import BolodePoteId from './routes/BolodePoteId.jsx';

import ErroRota from './routes/ErroRota.jsx';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';


const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  errorElement: <ErroRota />,

  children: [
    {
      index: true,
      element: <Home />
    },
    {
      path: "bolosdepote",
      element: <BolosdePote />
    },
    {
      path: "sobrenos",
      element: <SobreNos />
    },
    {
      path: "cadastrousuario",
      element: <CadastroUsuario />
    },
    {
      path: "carrinho",
      element: <CarrinhodeCompra />
    },
    {
      path: "loginusuario",
      element: <LoginUsuario />
    },
    {
      path: "recuperarsenhausuario",
      element: <RecuperarSenhaUsuario />
    },
    {
      path: "alterarsenhausuario",
      element: <AlterarSenhaUsuario />
    },
    {
      path: "bolosid/:id",
      element: <BolodePoteId />
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
