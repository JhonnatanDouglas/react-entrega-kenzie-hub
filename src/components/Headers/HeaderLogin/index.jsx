import React from 'react'
import logo from '../../../../src/assets/Main/Logo-KenzieHub-Login_Register.svg'
import { StyledFigureHeader } from './styles'

export const HeaderLogin = () => {
  return (
    <StyledFigureHeader>
      <img src={logo} alt='Logotipo do site Kenzie Hub' />
    </StyledFigureHeader>
  )
}
