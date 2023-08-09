import React from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { userContext } from '../../../providers/userProvider'
import { techContext } from '../../../providers/techProvider'
import { zodResolver } from '@hookform/resolvers/zod'
import { ModalRegisterContainer, FormModalRegister } from './styles'
import { StyledSpan, StyledTittleH3 } from '../../../styles/typography'
import { StyledInputLabel } from '../../Input'
import { StyledButton } from '../../../styles/buttons'
import { StyledModalInputSelect } from '../ModalSelect'
import { modalRegisterSchema } from '../modalRegisterSchema'

export const StyledRegisterTechModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(modalRegisterSchema),
  })

  const {
    buttonDisabled,
    customModalStyles,
    modalRegisterTechOpen,
    handleCloseRegisterModal,
  } = useContext(userContext)

  const { addTech } = useContext(techContext)

  const submit = (formData) => {
    reset()
    addTech(formData)
  }

  return (
    <>
      <Modal
        isOpen={modalRegisterTechOpen}
        onRequestClose={handleCloseRegisterModal}
        style={customModalStyles}
      >
        <ModalRegisterContainer>
          <div>
            <StyledTittleH3 colorText='white-1'>
              Cadastrar Tecnologia
            </StyledTittleH3>

            <button
              onClick={() => {
                handleCloseRegisterModal()
              }}
            >
              <StyledSpan sizeText='xl' emphasis='default' colorText='white-2'>
                x
              </StyledSpan>
            </button>
          </div>

          <FormModalRegister onSubmit={handleSubmit(submit)}>
            <StyledInputLabel
              label='Nome'
              type='text'
              register={register('title')}
              placeholder='Nome da tecnologia'
              error={errors.title}
            />

            <StyledModalInputSelect
              label='Selecionar status'
              register={register('status')}
              error={errors.status}
            />

            {buttonDisabled ? (
              <StyledButton
                type='submit'
                coloring='negative'
                largeness='max-lg'
                disabled={buttonDisabled}
              >
                Cadastrando...
              </StyledButton>
            ) : (
              <StyledButton type='submit' coloring='primary' largeness='max-lg'>
                Cadastrar Tecnologia
              </StyledButton>
            )}
          </FormModalRegister>
        </ModalRegisterContainer>
      </Modal>
    </>
  )
}
