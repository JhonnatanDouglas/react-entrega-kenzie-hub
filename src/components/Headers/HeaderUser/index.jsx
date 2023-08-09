import { useContext } from 'react'
import { StyledUserContainer } from './styles'
import { StyledParagraph, StyledTittleH1 } from '../../../styles/typography'
import { userContext } from '../../../providers/userProvider'

export const StyledUserHeader = () => {
  const { userData } = useContext(userContext)

  return (
    <StyledUserContainer>
      <StyledTittleH1>
        <strong>Olá, {userData?.name}</strong>
      </StyledTittleH1>
      <StyledParagraph>{userData?.course_module}</StyledParagraph>
    </StyledUserContainer>
  )
}
