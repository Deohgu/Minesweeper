import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { increment } from '../../redux/actions/index'

import { Scoreboard } from '../Scoreboard/Scoreboard'

import { Board } from '../Board/Board'

import { GameBox } from './Game.styled'

export const Game = () => {
  const [gridWidth] = useState(10)
  const [size] = useState(100)
  const [bombs] = useState(20)
  const [cellArray, setCellArray] = useState([])
  const [flaggedAmount, setFlaggedAmount] = useState(bombs)

  const [gameStatus, setGameStatus] = useState('waiting') // Won, lost, waiting, running.

  /// ////////////////////// Creator of grid & Bomb Populator
  // If status of the game changes to "waiting" -> generate a new Cell array.
  // Runs at the start and at each reset button press.
  useEffect(() => {
    if (gameStatus === 'waiting') {
      setFlaggedAmount(bombs)
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
      setCellArray(newCellArray.sort((a, b) => Math.random() - 0.5))
    }
  }, [gameStatus, bombs, size])

  // Places flags on right click when the game is considered to be running.
  const flagHandler = (e, index) => {
    e.preventDefault()
    if (gameStatus === 'running') {
      const cellArrayCopy = [...cellArray]
      if (cellArrayCopy[index].advancedChecked === false) {
        if (cellArrayCopy[index].flagged === false) {
          cellArrayCopy[index].flagged = true
          setFlaggedAmount(flaggedAmount - 1)
        } else {
          cellArrayCopy[index].flagged = false
          setFlaggedAmount(flaggedAmount + 1)
        }
      }
      setCellArray(cellArrayCopy)
    }
  }

  const statusHandler = (status, grid) => {
    status !== gameStatus && setGameStatus(status)

    if (grid) {
      grid !== cellArray && setCellArray(grid)
      // Algorithm To be improved
      let advCheckedAmount = 0
      grid.forEach((curr) => {
        if (curr.advancedChecked) {
          advCheckedAmount++
        }
      })

      if (advCheckedAmount === size - bombs) {
        setGameStatus('won')
        const cellArrayCopy = [...grid]
        cellArrayCopy.forEach((curr) => {
          curr.advancedChecked = true // makes everything visible
        })
        setCellArray(cellArrayCopy)
      }
    }
  }

  // Receives data from Store and passes as a prop to the component attached
  const mapStateToProps = (state) => {
    return (
      {
        number: state.number
      }
    )
  }

  // Receives the action function as passes as a prop to the component attached
  const mapDispatchToProps = {
    incrementTesting: increment
  }

  // component to render
  const ButtonTest = ({ number, incrementTesting }) => {
    return (
      <button onClick={() => incrementTesting(2)}>
        Number in state: {number}
      </button>
    )
  }

  const ButtonConnect = connect(mapStateToProps, mapDispatchToProps)(ButtonTest)

  return (
    <GameBox>
      <ButtonConnect />
      <Scoreboard
        statusHandler={statusHandler}
        gameStatus={gameStatus}
        flaggedAmount={flaggedAmount}
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
