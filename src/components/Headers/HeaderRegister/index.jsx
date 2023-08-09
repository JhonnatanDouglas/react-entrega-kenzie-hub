import React from 'react'
import logo from '../../../../src/assets/Main/Logo-KenzieHub-Login_Register.svg'
import { StyledHeaderRegister } from './styles'
import { StyledLink } from '../../../styles/buttons'

export const HeaderRegister = () => {
  return (
    <StyledHeaderRegister>
      <figure>
        <img src={logo} alt='Logotipo do site Kenzie Hub' />
      </figure>
      <StyledLink to='/' coloring='default' largeness='min-sm'>
        Voltar
      </StyledLink>
    </StyledHeaderRegister>
  )
}
