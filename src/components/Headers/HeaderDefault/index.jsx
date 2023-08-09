import React from 'react'
import logo from '../../../../src/assets/Main/Logo-KenzieHub-Login_Register.svg'
import { useNavigate } from 'react-router-dom'
import { StyledHeaderDefault } from './styles'
import { StyledButton } from '../../../styles/buttons'

export const HeaderDefault = () => {
  const navigate = useNavigate()

  const userLogout = () => {
    localStorage.removeItem('@Token')
    localStorage.removeItem('@UserId')
    localStorage.removeItem('@UserLogged')
    localStorage.removeItem('@TechCardSelected')
    navigate('/')
  }

  return (
    <StyledHeaderDefault>
      <figure>
        <img src={logo} alt='Logotipo do site Kenzie Hub' />
      </figure>
      <StyledButton onClick={userLogout} coloring='default' largeness='min-sm'>
        Sair
      </StyledButton>
    </StyledHeaderDefault>
  )
}
