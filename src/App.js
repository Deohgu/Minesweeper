import React from 'react'

import { GlobalStyle } from './App.styled'

import { Game } from './components/Game/Game'

import { Box } from './components/Box'

export const App = () => {
  return (
    <Box
      alignItems='center'
      justifyContent='center'
      width='calc(100vw)'
      height='100vh'
      backgroundColor='hsl(0, 0%, 15%)'
    >
      <GlobalStyle />
      <Game />
    </Box>
  )
}
