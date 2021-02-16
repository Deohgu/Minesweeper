import React from 'react'

import { Wrapper } from './Box.styled'

export const Box = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>
}
