import React from 'react'

import { Link, NavLink } from 'react-router-dom'

const RecuperarSenhaAdm = () => {
  return (
    <div>
      <h1>Recuperar Senha</h1>
      <NavLink to="/alterarsenhaadm" className={({isActve}) => (isActve) ? "active" : ""} style={{ color: '#161c5c' }}>Alterar Senha</NavLink>
    </div>
  )
}

export default RecuperarSenhaAdm