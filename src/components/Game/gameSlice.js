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
    updateGridWidth: (state, action) => { state.gridWidth = action.payload },
    updateSize: (state, action) => { state.size = action.payload },
    updateBombs: (state, action) => { state.bombs = action.payload },
    updateCellArray: (state, action) => { state.cellArray = action.payload },
    incrementFlaggedAmount: state => { state.flaggedAmount++ },
    decrementFlaggedAmount: state => { state.flaggedAmount-- },
    resetFlaggedAmount: state => { state.flaggedAmount = state.bombs },
    // updateStatus: (state, action) => { state.gameStatus = action.payload }
    updateStatus: (state, action) => { state.gameStatus = action.payload }
  }
})

export const { updateGridWidth, updateSize, updateBombs, updateCellArray, incrementFlaggedAmount, decrementFlaggedAmount, resetFlaggedAmount, updateStatus } = gameSlice.actions

export default gameSlice.reducer
