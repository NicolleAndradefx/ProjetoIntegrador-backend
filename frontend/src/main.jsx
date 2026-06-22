import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App.jsx';

import Home from './routes/Home.jsx';

import BolosdePote from './routes/bolosdepote/BolosdePote.jsx';

import SobreNos from './routes/sobrenos/SobreNos.jsx';

import CadastroUsuario from './routes/cadastrousuario/CadastroUsuario.tsx';

import CarrinhodeCompra from './routes/CarrinhodeCompra.jsx';

import LoginUsuario from './routes/loginusuario/LoginUsuario.tsx';

import RecuperarSenhaUsuario from './routes/RecuperarSenhaUsuario.jsx';

import AlterarSenhaUsuario from './routes/AlterarSenhaUsuario.jsx';

import BolodePoteId from './routes/BolodePoteId.jsx';

import ErroRota from './routes/ErroRota.jsx';

import MeusPedidos from './routes/MeusPedidos.jsx';

import LoginAdm from './routes/loginadm/LoginAdm.tsx';

import CadastroAdm from './routes/cadastroadm/CadastroAdm.tsx';

import RecuperarSenhaAdm from './routes/recuperaradm/RecuperarSenhaAdm.jsx';

import AlterarSenhaAdm from './routes/alterarsenhaadm/AlterarSenhaAdm.jsx';

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
    },
    {
      path: "meuspedidos",
      element: <MeusPedidos />
    },
    {
      path: "loginadm",
      element: <LoginAdm />
    },
    {
      path: "cadastroadm",
      element: <CadastroAdm />
    },
    {
      path: 'recuperarsenhaadm',
      element: <RecuperarSenhaAdm />
    },
    {
      path: 'alterarsenhaadm',
      element: <AlterarSenhaAdm />
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
