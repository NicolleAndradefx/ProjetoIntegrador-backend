import React from 'react'

import { Link, NavLink } from 'react-router-dom'

const RecuperarSenhaUsuario = () => {
  return (
    <div>
      <h1>Recuperar Senha</h1>
      <NavLink to="/alterarsenhausuario" className={({isActve}) => (isActve) ? "active" : ""} style={{ color: '#800000' }}>Alterar Senha</NavLink>
    </div>
  )
}

export default RecuperarSenhaUsuario