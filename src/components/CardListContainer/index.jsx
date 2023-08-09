import React from 'react'
import { TechList } from '../CardsUserList'
import { CardsList } from './styles'
import { useContext } from 'react'
import { userContext } from '../../providers/userProvider'

export const StyledCardList = () => {
  const { techData } = useContext(userContext)

  return (
    <CardsList>
      {techData
        ? techData?.map(({ id, title, status }) => (
            <TechList key={id} id={id} title={title} level={status} />
          ))
        : null}
    </CardsList>
  )
}
