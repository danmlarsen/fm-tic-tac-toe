import { createSlice } from '@reduxjs/toolkit';
import { GameBoxState } from '../components/GameBox';
import { RootState } from './store';

export enum GameState {
  NewGame,
  Playing,
  TurnEnd,
  RoundEnding,
  RoundEnd,
  Restarting,
}

export enum GameMark {
  X,
  O,
}

type filledCoords = { x: number; y: number };

const initialState = {
  gameState: GameState.NewGame,
  boardState: [
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
  ],
  filledCoords: [] as filledCoords[],
  player1IsX: false,
  players: [
    { name: 'P1', cpu: false },
    { name: 'P2', cpu: false },
  ],
  currentPlayer: 0,
  score: {
    x: 0,
    o: 0,
    tie: 0,
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    addMove(state, action) {
      if (state.gameState !== GameState.Playing) return;

      const { x, y } = action.payload;
      const currentMark = state.currentPlayer === 0 ? GameBoxState.X : GameBoxState.O;
      state.boardState[x][y] = currentMark;
      state.gameState = GameState.TurnEnd;
    },
    nextPlayer(state) {
      state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
      state.gameState = GameState.Playing;
    },
    setPlayerIsX(state, action) {
      state.player1IsX = action.payload;
    },
    startGame(state, action) {
      state.players = action.payload;
      state.gameState = GameState.Playing;
    },
    roundEnding(state, action) {
      if (action.payload.length > 0) {
        const currentMark = state.currentPlayer === 0 ? GameBoxState.X : GameBoxState.O;
        if (currentMark === GameBoxState.X) state.score.x++;
        if (currentMark === GameBoxState.O) state.score.o++;
        state.filledCoords = action.payload;
      } else {
        state.score.tie++;
      }
      state.gameState = GameState.RoundEnding;
    },
    endRound(state) {
      state.gameState = GameState.RoundEnd;
    },
    nextRound(state) {
      state.gameState = GameState.Playing;
      state.boardState = initialState.boardState;
      state.currentPlayer = 0;
      state.filledCoords = [];
    },
    cancelRestart(state) {
      state.gameState = GameState.Playing;
    },
    restartGame(state) {
      state.gameState = GameState.Restarting;
    },
    quitGame(state) {
      state.gameState = GameState.NewGame;
      state.boardState = initialState.boardState;
      state.currentPlayer = 0;
      state.filledCoords = [];
      state.score = { x: 0, o: 0, tie: 0 };
    },
  },
});

export const { addMove, nextRound, endRound, nextPlayer, roundEnding, setPlayerIsX, startGame, cancelRestart, restartGame, quitGame } = gameSlice.actions;

export const getIsCurPlayerCpu = (state: RootState) => state.game.players[state.game.currentPlayer].cpu;

export default gameSlice.reducer;
