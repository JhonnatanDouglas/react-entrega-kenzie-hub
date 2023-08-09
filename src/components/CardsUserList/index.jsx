import { useContext } from 'react'
import { StyledParagraph, StyledTittleH3 } from '../../styles/typography'
import { StyledCard } from './styles'
import { userContext } from '../../providers/userProvider'

export const TechList = ({ id, title, level }) => {
  const { handleOpenModal } = useContext(userContext)

  const setLocalStorage = () => {
    localStorage.setItem(
      '@TechCardSelected',
      JSON.stringify({
        id: id,
        title: title,
        level: level,
      })
    )
    handleOpenModal('details-modal')
  }

  return (
    <StyledCard>
      <button
        onClick={() => {
          setLocalStorage()
        }}
      >
        <StyledTittleH3>{title}</StyledTittleH3>
        <StyledParagraph>{level}</StyledParagraph>
      </button>
    </StyledCard>
  )
}
