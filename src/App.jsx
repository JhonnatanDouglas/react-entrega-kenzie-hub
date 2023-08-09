import React from 'react'
import Modal from 'react-modal'
import { RoutesMain } from './routes/RoutesMain'
import { GlobalStyles } from './styles/globalStyles'
import { ResetCss } from './styles/reset'

Modal.setAppElement('#root')

export const App = () => {
  return (
    <>
      <ResetCss />
      <GlobalStyles />
      <RoutesMain /> 
    </>
  )
}
