import React from 'react'

import { BoardStyled } from './Board.styled'

import { Cell } from '../Cell/Cell'

import { cellPressed } from '../../utils/BoardUtils/cellPressed'

export const Board = ({
  gridWidth,
  gameStatus,
  statusHandler,
  cellArray,
  size,
  flagHandler
}) => {
  return (
    <BoardStyled draggable='false'>
      {cellArray.map((curr, index) => {
        return (
          <Cell
            onClick={() =>
              cellPressed(
                index,
                gameStatus,
                cellArray,
                statusHandler,
                gridWidth,
                size
              )}
            onContextMenu={(e) => flagHandler(e, index)}
            gridWidth={gridWidth}
            pressed={curr.advancedChecked}
            cellArray={cellArray}
            index={index}
            value={cellArray[index].value}
            key={index}
          />
        )
      })}
    </BoardStyled>
  )
}
