import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { updateCellArray, resetFlaggedAmount, incrementFlaggedAmount, decrementFlaggedAmount, updateStatus } from './gameSlice'

import { Scoreboard } from '../Scoreboard/Scoreboard'
import { Board } from '../Board/Board'

import { GameBox } from './Game.styled'

export const Game = () => {
  // Fetches data from redux store with redux toolkit
  const cellArray = useSelector(state => state.game.cellArray)
  const size = useSelector(state => state.game.size)
  const gridWidth = useSelector(state => state.game.gridWidth)
  const bombs = useSelector(state => state.game.bombs)
  const gameStatus = useSelector(state => state.game.gameStatus)
  const flaggedAmount = useSelector(state => state.game.flaggedAmount)

  // Defining dispatch from redux toolkit
  const dispatch = useDispatch()

  /// ////////////////////// Creator of grid & Bomb Populator
  // If status of the game changes to "waiting" -> generate a new Cell array.
  // Runs at the start and at each reset button press.
  useEffect(() => {
    if (gameStatus === 'waiting') {
      // setFlaggedAmount(bombs)
      dispatch(resetFlaggedAmount())
      const newCellArray = []
      for (let i = 0; i < size - bombs; i++) {
        newCellArray.push({
          checked: false,
          advancedChecked: false,
          flagged: false
        })
      }
      for (let j = 0; j < bombs; j++) {
        newCellArray.push({
          value: 'bomb',
          checked: false,
          advancedChecked: false,
          flagged: false
        })
      }
      // setCellArray(newCellArray.sort((a, b) => Math.random() - 0.5))
      dispatch(updateCellArray(newCellArray.sort((a, b) => Math.random() - 0.5)))
    }
  }, [gameStatus, bombs, size, dispatch])

  // Places flags on right click when the game is considered to be running.
  const flagHandler = (e, index) => {
    e.preventDefault()
    if (gameStatus === 'running') {
      const cellArrayCopy = [...cellArray]
      if (cellArrayCopy[index].advancedChecked === false) {
        if (cellArrayCopy[index].flagged === false) {
          cellArrayCopy[index].flagged = true
          dispatch(decrementFlaggedAmount)
        } else {
          cellArrayCopy[index].flagged = false
          dispatch(incrementFlaggedAmount)
        }
      }
      // setCellArray(cellArrayCopy)
      dispatch(updateCellArray(cellArrayCopy))
    }
  }

  const statusHandler = (status, grid) => {
    // status !== gameStatus && setGameStatus(status)
    dispatch(updateStatus(status))

    if (grid) {
      // grid !== cellArray && setCellArray(grid)
      dispatch(updateCellArray(grid))
      // Algorithm To be improved
      let advCheckedAmount = 0
      grid.forEach((curr) => {
        if (curr.advancedChecked) {
          advCheckedAmount++
        }
      })

      if (advCheckedAmount === size - bombs) {
        // setGameStatus('won')
        dispatch(updateStatus('won'))
        const cellArrayCopy = [...grid]
        cellArrayCopy.forEach((curr) => {
          curr.advancedChecked = true // makes everything visible
        })
        // setCellArray(cellArrayCopy)
        dispatch(updateCellArray(cellArrayCopy))
      }
    }
  }

  // component to render
  const ButtonTest = () => {
    return (
      <button onClick={() => dispatch(incrementFlaggedAmount())}>
        FlaggedAmount in state: {flaggedAmount}
      </button>
    )
  }

  return (
    <GameBox>
      <ButtonTest />
      <Scoreboard
        statusHandler={statusHandler}
      />
      <Board
        gridWidth={gridWidth}
        gameStatus={gameStatus}
        statusHandler={statusHandler}
        cellArray={cellArray}
        size={size}
        flagHandler={flagHandler}
      />
    </GameBox>
  )
}
