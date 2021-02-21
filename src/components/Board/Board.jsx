import React from 'react'

import { useSelector } from 'react-redux'

import { BoardStyled } from './Board.styled'

import { Cell } from '../Cell/Cell'

import { cellPressed } from '../../utils/BoardUtils/cellPressed'

export const Board = ({
  statusHandler,
  flagHandler
}) => {
  const gridWidth = useSelector(state => state.game.gridWidth)
  const size = useSelector(state => state.game.size)
  const cellArray = useSelector(state => state.game.cellArray)
  const gameStatus = useSelector(state => state.game.gameStatus)

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
