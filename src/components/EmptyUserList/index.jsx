import { StyledParagraph, StyledTittleH1 } from '../../styles/typography'
import { StyledEmptyList } from './styles'

export const EmptyUserList = () => {
  return (
    <StyledEmptyList>
      <StyledTittleH1 sizeText='xl' emphasis='bold'>
        Ops! Parece que não há nenhuma tecnologia cadastrada ainda :&#40;
      </StyledTittleH1>
      <StyledParagraph sizeText='sm'>
        Clique no "+" e adicione uma tecnologia à lista!
      </StyledParagraph>
    </StyledEmptyList>
  )
}
