import { useEffect } from 'react';
import { endRound, GameState, nextPlayer, roundEnding } from '../store/gameSlice';
import { GameBoxState } from '../components/GameBox';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const isFull = (row: number[]) => row.every((val, _, arr: number[]) => val === arr[0] && val !== GameBoxState.Empty);
const getCol = (boardState: number[][], col: number) => boardState.map(row => row[col]);
const boardIsFull = (boardState: number[][]) => boardState.flat().every(box => box !== GameBoxState.Empty);

function checkForVictory(boardState: number[][]) {
  let found: { x: number; y: number }[] = [];
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

export function useGameController() {
  const { gameState, boardState, currentPlayer } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (gameState === GameState.TurnEnd) {
      const foundFull = checkForVictory(boardState);
      if (foundFull.length > 0) {
        dispatch(roundEnding(foundFull));
      } else if (boardIsFull(boardState)) {
        dispatch(roundEnding({}));
      } else {
        setTimeout(() => {
          dispatch(nextPlayer());
        }, 500);
      }
    }

    if (gameState === GameState.RoundEnding) {
      setTimeout(() => {
        dispatch(endRound());
      }, 1000);
    }
  }, [gameState, boardState, currentPlayer, dispatch]);
}
