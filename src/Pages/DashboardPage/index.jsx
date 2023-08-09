import { useContext, useState } from 'react'
import { EmptyUserList } from '../../components/EmptyUserList'
import { HeaderDefault } from '../../components/Headers/HeaderDefault'
import {
  StyledMainContainer,
  StyledHeaderContainer,
  StyledNavContainer,
} from '../../styles/grid'
import { StyledUserHeader } from '../../components/Headers/HeaderUser'
import { StyledCardList } from '../../components/CardListContainer'
import { StyledTechHeader } from '../../components/Headers/TechHeader'
import { StyledRegisterTechModal } from '../../components/Modals/RegisterTechnologyModal'
import { StyledDetailsTechModal } from '../../components/Modals/TechnologyDetailsModal'
import { userContext } from '../../providers/userProvider'

export const DashboardPage = () => {
  const { techData } = useContext(userContext)

  return (
    <>
      <StyledNavContainer>
        <HeaderDefault />
      </StyledNavContainer>

      <StyledHeaderContainer>
        <div>
          <StyledUserHeader />
        </div>
      </StyledHeaderContainer>

      <StyledMainContainer>
        <div>
          <StyledTechHeader />
          {techData?.length === 0 ? <EmptyUserList /> : <StyledCardList />}
        </div>
      </StyledMainContainer>
      <StyledDetailsTechModal />
      <StyledRegisterTechModal />
    </>
  )
}
