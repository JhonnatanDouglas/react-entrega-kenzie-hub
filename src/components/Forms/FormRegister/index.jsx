import React, { useContext } from 'react'
import { userContext } from '../../../providers/userProvider'
import { useForm } from 'react-hook-form'
import { registerSchema } from './registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { StyledPasswordInput } from '../../PasswordInput'
import { StyledFormRegister } from './styles'
import { StyledParagraph, StyledTittleH1 } from '../../../styles/typography'
import { StyledInputLabel } from '../../Input'
import { StyledButton } from '../../../styles/buttons'
import { StyledInputTextArea } from '../../TextArea'
import { StyledInputSelect } from '../../Select'

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  })

  const { userRegister, buttonDisabled } = useContext(userContext)

  const submit = (formData) => {
    userRegister(formData)
  }

  return (
    <>
      <StyledFormRegister onSubmit={handleSubmit(submit)}>
        <StyledTittleH1>Crie sua conta</StyledTittleH1>
        <StyledParagraph emphasis='bold'>
          Rapido e grátis, vamos nessa
        </StyledParagraph>
        <StyledInputLabel
          label='Nome'
          type='text'
          register={register('name')}
          placeholder='Digite seu nome'
          error={errors.name}
        />

        <StyledInputLabel
          label='E-mail'
          type='email'
          register={register('email')}
          placeholder='Digite seu email'
          autoComplete='email'
          error={errors.email}
        />

        <StyledPasswordInput
          label='Senha'
          type='password'
          register={register('password')}
          placeholder='Digite aqui sua senha'
          autoComplete='new-password'
          error={errors.password}
        />

        <StyledPasswordInput
          label='Confirmar Senha'
          type='password'
          register={register('confirm')}
          placeholder='Digite novamente sua senha'
          autoComplete='new-password'
          error={errors.confirm}
        />

        <StyledInputTextArea
          id='bio'
          cols='1'
          rows='1'
          label='Bio'
          register={register('bio')}
          placeholder='Fale sobre você'
          error={errors.bio}
        />

        <StyledInputLabel
          label='Contato'
          type='text'
          register={register('contact')}
          placeholder='Opção de contato'
          error={errors.contact}
        />

        <StyledInputSelect
          label='Selecionar Módulo'
          register={register('course_module')}
          error={errors.course_module}
        />

        {buttonDisabled ? (
          <StyledButton
            type='submit'
            coloring='negative'
            largeness='max-lg'
            disabled={buttonDisabled}
          >
            Carregando...
          </StyledButton>
        ) : (
          <StyledButton type='submit' coloring='primary' largeness='max-lg'>
            Cadastrar
          </StyledButton>
        )}
      </StyledFormRegister>
    </>
  )
}
