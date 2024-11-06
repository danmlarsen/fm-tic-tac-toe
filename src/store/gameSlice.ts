import { createSlice } from '@reduxjs/toolkit';
import { GameBoxState } from '../components/GameBox';

const initialState = {
  gameStarted: false,
  boardState: [
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
  ],
  currentPlayer: 0,
  score: {
    x: 0,
    o: 0,
    tie: 0,
  },
  playerNames: {
    x: 'P1',
    o: 'P2',
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addPiece(state, action) {
      const { x, y } = action.payload;

      state.boardState[x][y] = state.currentPlayer === 0 ? GameBoxState.X : GameBoxState.O;
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
    },
    restartGame(state) {
      state.boardState = initialState.boardState;
      state.currentPlayer = 0;
    },
  },
});

export const { addPiece, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
