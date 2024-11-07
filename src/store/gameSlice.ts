import { createSlice } from '@reduxjs/toolkit';
import { GameBoxState } from '../components/GameBox';

export enum GameState {
  NewGame,
  Started,
  RoundEnd,
}

const initialState = {
  gameState: GameState.NewGame,
  boardState: [
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
  ],
  filledCoords: [
    { x: 0, y: 0 },
    { x: 1, y: 1 },
    { x: 2, y: 2 },
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
    addMove(state, action) {
      if (state.gameState !== GameState.Started) return;

      const nextBoardState = JSON.parse(JSON.stringify(state.boardState));

      const { x, y } = action.payload;
      nextBoardState[x][y] = state.currentPlayer === 0 ? GameBoxState.X : GameBoxState.O;

      if (isRoundOver(nextBoardState)) {
        state.gameState = GameState.RoundEnd;
        state.currentPlayer = 0;
      } else {
        state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
      }

      state.boardState = nextBoardState;
    },
    newGame(state) {
      state.gameState = GameState.Started;
    },
    nextRound(state) {
      state.gameState = GameState.Started;
      state.boardState = initialState.boardState;
      state.currentPlayer = 0;
    },
    restartGame(state) {
      state.boardState = initialState.boardState;
      state.currentPlayer = 0;
    },
  },
});

function isRoundOver(boardState) {
  // ROWS
  if (boardState[0][0] !== GameBoxState.Empty && boardState[0][0] === boardState[0][1] && boardState[0][0] === boardState[0][2]) return true;
  if (boardState[1][0] !== GameBoxState.Empty && boardState[1][0] === boardState[1][1] && boardState[1][0] === boardState[1][2]) return true;
  if (boardState[2][0] !== GameBoxState.Empty && boardState[2][0] === boardState[2][1] && boardState[2][0] === boardState[2][2]) return true;

  // COLS
  if (boardState[0][0] !== GameBoxState.Empty && boardState[0][0] === boardState[1][0] && boardState[0][0] === boardState[2][0]) return true;
  if (boardState[0][1] !== GameBoxState.Empty && boardState[0][1] === boardState[1][1] && boardState[0][1] === boardState[2][1]) return true;
  if (boardState[0][2] !== GameBoxState.Empty && boardState[0][2] === boardState[1][2] && boardState[0][2] === boardState[2][2]) return true;

  // DIAG
  if (boardState[0][0] !== GameBoxState.Empty && boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]) return true;
  if (boardState[0][2] !== GameBoxState.Empty && boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0]) return true;

  return false;
}

export const { addMove, newGame, restartGame } = gameSlice.actions;

export default gameSlice.reducer;
