import React from 'react'
import { StyledContainerLogin, StyledMainLoginForm } from '../../styles/grid'
import { HeaderLogin } from '../../components/Headers/HeaderLogin'
import { StyledLoginForm } from '../../components/Forms/FormLogin'

export const LoginPage = () => {
  return (
    <>
      <StyledContainerLogin>
        <HeaderLogin />
      </StyledContainerLogin>
      <StyledMainLoginForm>
        <StyledLoginForm />
      </StyledMainLoginForm>
    </>
  )
}
