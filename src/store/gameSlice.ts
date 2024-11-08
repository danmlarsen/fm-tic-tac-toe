import { createSlice } from '@reduxjs/toolkit';
import { GameBoxState } from '../components/GameBox';

export enum GameState {
  NewGame,
  Started,
  RoundEnding,
  RoundEnd,
  Restarting,
}

export enum GameMark {
  X,
  O,
}

const initialState = {
  gameState: GameState.NewGame,
  boardState: [
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
  ],
  filledCoords: [],
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
      if (state.gameState !== GameState.Started) return;

      const nextBoardState = JSON.parse(JSON.stringify(state.boardState));

      const currentMark = state.currentPlayer === 0 ? GameBoxState.X : GameBoxState.O;

      const { x, y } = action.payload;
      nextBoardState[x][y] = currentMark;

      const foundFull = checkForVictory(nextBoardState);

      if (foundFull.length > 0) {
        state.filledCoords = foundFull;
        state.gameState = GameState.RoundEnding;

        if (currentMark === GameBoxState.X) state.score.x++;
        if (currentMark === GameBoxState.O) state.score.o++;

        state.currentPlayer = 0;
      } else if (boardIsFull(nextBoardState)) {
        state.score.tie++;
        state.gameState = GameState.RoundEnding;
      } else {
        state.currentPlayer = state.currentPlayer === 0 ? 1 : 0;
      }

      state.boardState = nextBoardState;
    },
    toggleMark(state) {
      state.player1IsX = !state.player1IsX;
    },
    startGame(state, action) {
      state.players = action.payload;
      state.gameState = GameState.Started;
    },
    endRound(state) {
      state.gameState = GameState.RoundEnd;
    },
    nextRound(state) {
      state.gameState = GameState.Started;
      state.boardState = initialState.boardState;
      state.currentPlayer = 0;
      state.filledCoords = [];
    },
    cancelRestart(state) {
      state.gameState = GameState.Started;
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

function updateScore() {}

function checkForVictory(boardState) {
  let found = [];
  boardState.forEach((row, idx) => {
    if (isFull(row)) {
      found = [
        { x: idx, y: 0 },
        { x: idx, y: 1 },
        { x: idx, y: 2 },
      ];
      return;
    }
    if (isFull(getCol(boardState, idx))) {
      found = [
        { x: 0, y: idx },
        { x: 1, y: idx },
        { x: 2, y: idx },
      ];
      return;
    }
  });

  if (boardState[0][0] !== GameBoxState.Empty && boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2])
    found = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
  if (boardState[0][2] !== GameBoxState.Empty && boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0])
    found = [
      { x: 0, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ];

  return found;
}

const isFull = row => row.every((v, _, arr) => v === arr[0] && v !== GameBoxState.Empty);
const getCol = (boardState, col) => boardState.map(row => row[col]);
const boardIsFull = boardState => boardState.flat().every(box => box !== GameBoxState.Empty);

export const { addMove, nextRound, endRound, toggleMark, startGame, cancelRestart, restartGame, quitGame } = gameSlice.actions;

export const getIsCurPlayerCpu = state => state.game.players[state.game.currentPlayer].cpu;

export default gameSlice.reducer;

// function isRoundOver(boardState) {
//   // // ROWS
//   if (boardState[0][0] !== GameBoxState.Empty && boardState[0][0] === boardState[0][1] && boardState[0][0] === boardState[0][2]) return true;
//   if (boardState[1][0] !== GameBoxState.Empty && boardState[1][0] === boardState[1][1] && boardState[1][0] === boardState[1][2]) return true;
//   if (boardState[2][0] !== GameBoxState.Empty && boardState[2][0] === boardState[2][1] && boardState[2][0] === boardState[2][2]) return true;

//   // // COLS
//   if (boardState[0][0] !== GameBoxState.Empty && boardState[0][0] === boardState[1][0] && boardState[0][0] === boardState[2][0]) return true;
//   if (boardState[0][1] !== GameBoxState.Empty && boardState[0][1] === boardState[1][1] && boardState[0][1] === boardState[2][1]) return true;
//   if (boardState[0][2] !== GameBoxState.Empty && boardState[0][2] === boardState[1][2] && boardState[0][2] === boardState[2][2]) return true;

//   // DIAG
//   if (boardState[0][0] !== GameBoxState.Empty && boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2]) return true;
//   if (boardState[0][2] !== GameBoxState.Empty && boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0]) return true;

//   return false;
// }
