import { createSlice } from '@reduxjs/toolkit'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gridWidth: 10,
    size: 100,
    bombs: 20,
    cellArray: [],
    get flaggedAmount () { return this.bombs },
    gameStatus: 'waiting'
  },
  reducers: {
    updateGridWidth: (state, action) => state.gridWidth = action.payload,
    updateSize: (state, action) => state.size = action.payload,
    updateBombs: (state, action) => state.bombs = action.payload,
    updateCellArray: (state, action) => state.cellArray = action.payload,
    incrementFlaggedAmount: state => state++,
    decrementFlaggedAmount: state => state--,
    updateStatus: (state, action) => state.gameStatus = action.payload
  }
})

export const { updateGridWidth, updateSize, updateBombs, updateCellArray, incrementFlaggedAmount, decrementFlaggedAmount, updateStatus } = gameSlice.actions

export default gameSlice.reducer
