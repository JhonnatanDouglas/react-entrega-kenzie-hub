import React, { useState } from 'react'
import Modal from 'react-modal'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { userContext } from '../../../providers/userProvider'
import { techContext } from '../../../providers/techProvider'
import { zodResolver } from '@hookform/resolvers/zod'
import { StyledInputLabel } from '../../Input'
import { StyledButton } from '../../../styles/buttons'
import { StyledModalInputSelect } from '../ModalSelect'
import { FormModalRegister, ModalDetailsContainer } from './styles'
import { StyledSpan, StyledTittleH3 } from '../../../styles/typography'
import { modalDetailsSchema } from '../modalDetailsSchema'

export const StyledDetailsTechModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(modalDetailsSchema),
  })

  const techListStorage = JSON.parse(localStorage.getItem('@TechCardSelected'))

  const { deleteButtonDesabled, updateTech, deleteTech } = useContext(techContext)

  const {
    buttonDisabled,
    customModalStyles,
    modalDetailsTechOpen,
    handleCloseDetailsModal,
  } = useContext(userContext)

  const [nameButton, setNameButton] = useState(null)

  const handleSaveButton = () => {
    setNameButton('save-button')
  }

  const handleDeleteButton = () => {
    setNameButton('delete-button')
  }

  const submit = (formData) => {

    const { status } = formData
    const formTitle = techListStorage?.title

    const techInfo = {
      title: formTitle,
      status: status,
    }

    reset()
    
    if (nameButton === 'save-button') {
      updateTech(techInfo)
    } else if (nameButton === 'delete-button') {
      deleteTech(techInfo)
    }
  }

  return (
    <>
      <Modal
        isOpen={modalDetailsTechOpen}
        onRequestClose={handleCloseDetailsModal}
        style={customModalStyles}
      >
        <ModalDetailsContainer>
          <div>
            <StyledTittleH3 colorText='white-1'>
              Tecnologia Detalhes
            </StyledTittleH3>

            <button
              onClick={() => {
                handleCloseDetailsModal()
              }}
            >
              <StyledSpan sizeText='xl' emphasis='default' colorText='white-2'>
                x
              </StyledSpan>
            </button>
          </div>

          <FormModalRegister onSubmit={handleSubmit(submit)}>
            <StyledInputLabel
              disabled={true}  
              label='Nome'
              type='text'
              placeholder={techListStorage.title}
            />

            <StyledModalInputSelect
              label='Status'
              register={register('status')}
              error={errors.status}
            />

            <div>
              {buttonDisabled ? (
                <StyledButton
                  type='submit'
                  coloring='negative'
                  largeness='max-lg'
                  disabled={buttonDisabled}
                >
                  Salvando...
                </StyledButton>
              ) : (
                <StyledButton
                  type='submit'
                  coloring='primary'
                  largeness='max-lg'
                  onClick={handleSaveButton}
                >
                  Salvar
                </StyledButton>
              )}
              {deleteButtonDesabled ? (
                <StyledButton
                  type='submit'
                  coloring='disabled-negative'
                  largeness='max-lg'
                  disabled={deleteButtonDesabled}
                >
                  Excluindo...
                </StyledButton>
              ) : (
                <StyledButton
                  type='submit'
                  coloring='disabled'
                  largeness='max-lg'
                  onClick={handleDeleteButton}
                >
                  Excluir
                </StyledButton>
              )}
            </div>
          </FormModalRegister>
        </ModalDetailsContainer>
      </Modal>
    </>
  )
}
