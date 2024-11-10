import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export enum GameState {
  NewGame,
  Playing,
  TurnEnd,
  RoundEnding,
  RoundEnd,
  Restarting,
}

export enum BoardCellState {
  Empty,
  X,
  O,
}

type filledCoords = { x: number; y: number };

const initialState = {
  gameState: GameState.NewGame,
  boardState: [
    [BoardCellState.Empty, BoardCellState.Empty, BoardCellState.Empty],
    [BoardCellState.Empty, BoardCellState.Empty, BoardCellState.Empty],
    [BoardCellState.Empty, BoardCellState.Empty, BoardCellState.Empty],
  ],
  filledCoords: [] as filledCoords[],
  roundWinner: -1,
  player1IsX: true,
  player2IsCpu: true,
  players: ['YOU', 'CPU'],
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
      const currentMark = state.currentPlayer === 0 ? BoardCellState.X : BoardCellState.O;
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
      const { player2IsCpu } = action.payload;

      if (state.player1IsX && player2IsCpu) {
        state.players = ['YOU', 'CPU'];
      }
      if (!state.player1IsX && player2IsCpu) {
        state.players = ['CPU', 'YOU'];
      }
      if (state.player1IsX && !player2IsCpu) {
        state.players = ['P1', 'P2'];
      }
      if (!state.player1IsX && !player2IsCpu) {
        state.players = ['P2', 'P1'];
      }

      state.player2IsCpu = player2IsCpu;
      state.gameState = GameState.Playing;
    },
    roundEnding(state, action) {
      if (action.payload.length > 0) {
        const currentMark = state.currentPlayer === 0 ? BoardCellState.X : BoardCellState.O;
        if (currentMark === BoardCellState.X) {
          state.score.x++;
          state.roundWinner = 0;
        }
        if (currentMark === BoardCellState.O) {
          state.score.o++;
          state.roundWinner = 1;
        }
        state.filledCoords = action.payload;
      } else {
        state.score.tie++;
        state.roundWinner = -1;
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

export const getIsCurPlayerCpu = (state: RootState) =>
  (state.game.currentPlayer === 1 && state.game.player2IsCpu && state.game.player1IsX) ||
  (state.game.currentPlayer === 0 && !state.game.player1IsX && state.game.player2IsCpu);

export default gameSlice.reducer;
