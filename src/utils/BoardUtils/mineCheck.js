// Callstack was reaching the maximum
// So I pulled out the array in an attempt to not have to constantly deep clone one
// might look into other things that I can pull out to ease on performance
// or refactor the code with functional programming principles.



let cellArrayCopyOriginal = []



const functionTest = (index, original, cellArrayCopy, gridWidth, size) => {

  // Array is displayed as a matrix. So it checks the ones near the index starting from above and continues clockwise.
  // index - matrix width = the index above, index - matrix width + 1 = top right index, etc
  const checkerArray = [
    index - gridWidth,
    index - gridWidth + 1,
    index + 1,
    index + gridWidth + 1,
    index + gridWidth,
    index + gridWidth - 1,
    index - 1,
    index - gridWidth - 1
  ]

  let bombCounter = 0

  if (index % gridWidth === 0) {
    if (index === 0) {
      // Top Left Corner
      if (cellArrayCopyOriginal[index].flagged !== true) {
        cellArrayCopyOriginal[index].advancedChecked = true
      }
      const filteredCheckerArray = [checkerArray[2], checkerArray[3], checkerArray[4]]
      bombCounter = 0
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
        cellArrayCopyOriginal[curr].checked = true // Will be skipped in the future
      })
      if (bombCounter > 0) {
        cellArrayCopyOriginal[index].value = bombCounter
      } else {
        // filters indexes that will advance to check next
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopyOriginal[curr].advancedChecked !== true &&
            cellArrayCopyOriginal[curr].value !== 'bomb' &&
            curr !== original
        )
        // Recursion, calls the mineCheck to do the same to the next indexes
        filteredCheckerArrayAdvance.forEach((curr) => {
          return functionTest(curr, original, cellArrayCopy, gridWidth, size)
        })
      }
    } else if (index === size - gridWidth) {
      // Bottom Left Corner
      if (cellArrayCopyOriginal[index].flagged !== true) {
        cellArrayCopyOriginal[index].advancedChecked = true
      }
      const filteredCheckerArray = [checkerArray[0], checkerArray[1], checkerArray[2]]
      bombCounter = 0
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
        cellArrayCopyOriginal[curr].checked = true
      })
      if (bombCounter > 0) {
        cellArrayCopyOriginal[index].value = bombCounter
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopyOriginal[curr].advancedChecked !== true &&
            cellArrayCopyOriginal[curr].value !== 'bomb' &&
            curr !== original
        )
        filteredCheckerArrayAdvance.forEach((curr) => {
          return functionTest(curr, original, cellArrayCopy, gridWidth, size)
        })
      }
    } else {
      // Left Wall
      if (cellArrayCopyOriginal[index].flagged !== true) {
        cellArrayCopyOriginal[index].advancedChecked = true
      }
      const filteredCheckerArray = [checkerArray[0], checkerArray[1], checkerArray[2], checkerArray[3], checkerArray[4]]
      bombCounter = 0
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
        cellArrayCopyOriginal[curr].checked = true
      })
      if (bombCounter > 0) {
        cellArrayCopyOriginal[index].value = bombCounter
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopyOriginal[curr].advancedChecked !== true &&
            cellArrayCopyOriginal[curr].value !== 'bomb' &&
            curr !== original
        )
        filteredCheckerArrayAdvance.forEach((curr) => {
          return functionTest(curr, original, cellArrayCopy, gridWidth, size)
        })
      }
    }
  } else if (index % gridWidth === gridWidth - 1) {
    if (index === gridWidth - 1) {
      // Top Right Corner
      if (cellArrayCopyOriginal[index].flagged !== true) {
        cellArrayCopyOriginal[index].advancedChecked = true
      }
      const filteredCheckerArray = [checkerArray[4], checkerArray[5], checkerArray[6]]
      bombCounter = 0
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
        cellArrayCopyOriginal[curr].checked = true
      })
      if (bombCounter > 0) {
        cellArrayCopyOriginal[index].value = bombCounter
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopyOriginal[curr].advancedChecked !== true &&
            cellArrayCopyOriginal[curr].value !== 'bomb' &&
            curr !== original
        )
        filteredCheckerArrayAdvance.forEach((curr) => {
          return functionTest(curr, original, cellArrayCopy, gridWidth, size)
        })
      }
    } else if (index === size - 1) {
      // Bottom Right Corner
      if (cellArrayCopyOriginal[index].flagged !== true) {
        cellArrayCopyOriginal[index].advancedChecked = true
      }
      const filteredCheckerArray = [checkerArray[0], checkerArray[6], checkerArray[7]]
      bombCounter = 0
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
        cellArrayCopyOriginal[curr].checked = true
      })
      if (bombCounter > 0) {
        cellArrayCopyOriginal[index].value = bombCounter
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopyOriginal[curr].advancedChecked !== true &&
            cellArrayCopyOriginal[curr].value !== 'bomb' &&
            curr !== original
        )
        filteredCheckerArrayAdvance.forEach((curr) => {
          return functionTest(curr, original, cellArrayCopy, gridWidth, size)
        })
      }
    } else {
      // Right Wall
      if (cellArrayCopyOriginal[index].flagged !== true) {
        cellArrayCopyOriginal[index].advancedChecked = true
      }
      const filteredCheckerArray = [checkerArray[0], checkerArray[4], checkerArray[5], checkerArray[6], checkerArray[7]]
      bombCounter = 0
      filteredCheckerArray.forEach((curr) => {
        cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
        cellArrayCopyOriginal[curr].checked = true
      })
      if (bombCounter > 0) {
        cellArrayCopyOriginal[index].value = bombCounter
      } else {
        const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
          (curr) =>
            cellArrayCopyOriginal[curr].advancedChecked !== true &&
            cellArrayCopyOriginal[curr].value !== 'bomb' &&
            curr !== original
        )
        filteredCheckerArrayAdvance.forEach((curr) => {
          return functionTest(curr, original, cellArrayCopy, gridWidth, size)
        })
      }
    }
  } else if (index > 0 && index < gridWidth - 1) {
    // Top Wall strickly
    if (cellArrayCopyOriginal[index].flagged !== true) {
      cellArrayCopyOriginal[index].advancedChecked = true
    }
    const filteredCheckerArray = [checkerArray[2], checkerArray[3], checkerArray[4], checkerArray[5], checkerArray[6]]
    bombCounter = 0

    filteredCheckerArray.forEach((curr) => {
      cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
      cellArrayCopyOriginal[curr].checked = true
    })
    if (bombCounter > 0) {
      cellArrayCopyOriginal[index].value = bombCounter
    } else {
      const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
        (curr) =>
          cellArrayCopyOriginal[curr].advancedChecked !== true &&
          cellArrayCopyOriginal[curr].value !== 'bomb' &&
          curr !== original
      )
      filteredCheckerArrayAdvance.forEach((curr) => {
        return functionTest(curr, original, cellArrayCopy, gridWidth, size)
      })
    }
  } else if (index > size - gridWidth && index < size - 1) {
    // Bottom Wall strickly
    if (cellArrayCopyOriginal[index].flagged !== true) {
      cellArrayCopyOriginal[index].advancedChecked = true
    }
    const filteredCheckerArray = [checkerArray[0], checkerArray[1], checkerArray[2], checkerArray[6], checkerArray[7]]
    bombCounter = 0

    filteredCheckerArray.forEach((curr) => {
      cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
      cellArrayCopyOriginal[curr].checked = true
    })
    if (bombCounter > 0) {
      cellArrayCopyOriginal[index].value = bombCounter
    } else {
      const filteredCheckerArrayAdvance = filteredCheckerArray.filter(
        (curr) =>
          cellArrayCopyOriginal[curr].advancedChecked !== true &&
          cellArrayCopyOriginal[curr].value !== 'bomb' &&
          curr !== original
      )
      filteredCheckerArrayAdvance.forEach((curr) => {
        return functionTest(curr, original, cellArrayCopy, gridWidth, size)
      })
    }
  } else {
    if (cellArrayCopyOriginal[index].flagged !== true) {
      cellArrayCopyOriginal[index].advancedChecked = true
    }
    // Not agains't the wall
    bombCounter = 0

    checkerArray.forEach((curr) => {
      cellArrayCopyOriginal[curr].value === 'bomb' && bombCounter++
      cellArrayCopyOriginal[curr].checked = true
    })

    if (bombCounter > 0) {
      cellArrayCopyOriginal[index].value = bombCounter
    } else {
      const filteredCheckerArrayAdvance = checkerArray.filter(
        (curr) =>
          cellArrayCopyOriginal[curr].advancedChecked !== true &&
          cellArrayCopyOriginal[curr].value !== 'bomb' &&
          curr !== original
      )
      filteredCheckerArrayAdvance.forEach((curr) => {
        return functionTest(curr, original, cellArrayCopy, gridWidth, size)
      })
    }
  }

  return cellArrayCopyOriginal
}



export const mineCheck = (index, original, cellArray, gridWidth, size) => {
  // Deep clone
  // const cellArrayCopy = cellArray.map(curr => ({ ...Object.assign(curr) }))
  // cellArray.forEach(curr => cellArrayCopyOriginal.push(({ ...Object.assign(curr) })))
  cellArrayCopyOriginal = JSON.parse(JSON.stringify(cellArray));
  console.count('mineCheck')
  return functionTest(index, original, cellArrayCopyOriginal, gridWidth, size)
}