import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../../providers/userProvider'
import { TechHeaderContainer } from './styles'
import { StyledButton } from '../../../styles/buttons'
import { StyledTittleH2 } from '../../../styles/typography'

export const StyledTechHeader = () => {
  const { handleOpenModal } = useContext(userContext)

  return (
    <>
      <TechHeaderContainer>
        <StyledTittleH2 colorText='white-1'>Tecnologias</StyledTittleH2>
        <StyledButton
          onClick={() => {
            handleOpenModal('register-modal')
          }}
          largeness='plus'
          coloring='default'
        >
          +
        </StyledButton>
      </TechHeaderContainer>
    </>
  )
}
