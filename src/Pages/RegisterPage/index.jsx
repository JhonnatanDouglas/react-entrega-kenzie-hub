import React from 'react'
import {
  StyledContainerRegister,
  StyledMainRegisterForm,
} from '../../styles/grid'
import { HeaderRegister } from '../../components/Headers/HeaderRegister'
import { RegisterForm } from '../../components/Forms/FormRegister'

export const RegisterPage = () => {
  return (
    <>
      <StyledContainerRegister>
        <HeaderRegister />
      </StyledContainerRegister>
      <StyledMainRegisterForm>
        <RegisterForm />
      </StyledMainRegisterForm>
    </>
  )
}
