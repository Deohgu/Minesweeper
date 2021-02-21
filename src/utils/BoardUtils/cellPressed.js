import { mineCheck } from './mineCheck'

/// ////////////////////// Click Handler
export const cellPressed = (
  index,
  gameStatus,
  cellArray,
  statusHandler,
  gridWidth,
  size
) => {
  if (
    (gameStatus === 'waiting' || gameStatus === 'running') &&
    cellArray[index].flagged !== true && // Stops the player from activating a flagged cell.
    cellArray[index].advancedChecked === false
  ) {
    if (cellArray[index].value === 'bomb') {
      // Sets all the cells that are bombs to "advancedChecked" meaning checked, meaning to be visible.

      // Deep clone
      const cellArrayCopy = cellArray.map(curr => ({ ...Object.assign(curr) }))

      cellArrayCopy.forEach((curr) => {
        if (curr.value === 'bomb') {
          curr.advancedChecked = true
        } else if (curr.flagged === true) {
          curr.flagged = 'wrong'
        }
      })
      // Shows an explosion to demonstrate that it was a bomb
      cellArrayCopy[index].value = 'bombPressed'

      return statusHandler('lost', cellArrayCopy)
    } else {
      return statusHandler(
        'running',
        mineCheck(index, index, cellArray, gridWidth, size)
      )
    }
  }
}
