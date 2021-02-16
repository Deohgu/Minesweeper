import React from 'react'

import { CellStyled } from './Cell.styled'

import { toDisplay } from '../../utils/CellUtils/toDisplay'

export const Cell = ({
  gridWidth,
  pressed,
  cellArray,
  index,
  value,
  ...rest
}) => {
  return (
    <CellStyled
      gridWidth={gridWidth}
      pressed={pressed}
      {...rest}
      draggable='false'
    >
      {toDisplay(cellArray, index, value)}
    </CellStyled>
  )
}
