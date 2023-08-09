import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from './loginSchema'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { userContext } from '../../../providers/userProvider'
import { StyledInputLabel } from '../../Input'
import { StyledPasswordInput } from '../../PasswordInput'
import { StyledButton, StyledLink } from '../../../styles/buttons'
import { StyledFormLogin } from './styles'
import { StyledParagraph, StyledTittleH1 } from '../../../styles/typography'

export const StyledLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  })

  const { userLogin, buttonDisabled } = useContext(userContext)

  const submit = (formLogin) => {
    userLogin(formLogin)
  }

  return (
    <>
      <StyledFormLogin onSubmit={handleSubmit(submit)}>
        <StyledTittleH1>Login</StyledTittleH1>
        <StyledInputLabel
          label='Email'
          type='email'
          placeholder='Digite seu email'
          register={register('email')}
          error={errors.email}
          autoComplete='email'
        />

        <StyledPasswordInput
          label='Senha'
          type='password'
          inputStyleType='password'
          placeholder='Digite sua senha'
          register={register('password')}
          error={errors.password}
          autoComplete='current-password'
        />

        <div>
          {buttonDisabled ? (
            <StyledButton
              type='submit'
              coloring='negative'
              largeness='max-lg'
              disabled={buttonDisabled}
            >
              Aguarde...
            </StyledButton>
          ) : (
            <StyledButton
              onSubmit={handleSubmit(submit)}
              coloring='primary'
              largeness='max-lg'
            >
              Entrar
            </StyledButton>
          )}
          <StyledParagraph emphasis='bold'>
            Ainda não possui uma conta?
          </StyledParagraph>
          <StyledLink to='/register' coloring='disabled' largeness='max-lg'>
            Cadastre-se
          </StyledLink>
        </div>
      </StyledFormLogin>
    </>
  )
}
