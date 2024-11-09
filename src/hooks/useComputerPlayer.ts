import { useEffect } from 'react';
import { addMove, GameState, getIsCurPlayerCpu } from '../store/gameSlice';
import { GameBoxState } from '../components/GameBox';
import { useAppDispatch, useAppSelector } from '../store/hooks';

function getEmptyCells(boardState: number[][]) {
  const coordsArr: { x: number; y: number }[] = [];
  boardState.forEach((row, x) => {
    row.forEach((col, y) => {
      if (col === GameBoxState.Empty) coordsArr.push({ x, y });
    });
  });
  return coordsArr;
}

function getNextMove(boardState: number[][]) {
  const emptyCells = getEmptyCells(boardState);
  const randomMove = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomMove];
}

export function useComputerPlayer() {
  const isCurPlayerCpu = useAppSelector(getIsCurPlayerCpu);
  const boardState = useAppSelector(state => state.game.boardState);
  const gameState = useAppSelector(state => state.game.gameState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCurPlayerCpu && gameState === GameState.Playing) {
      setTimeout(() => {
        const nextMove = getNextMove(boardState);
        dispatch(addMove(nextMove));
      }, 1000);
    }
  }, [isCurPlayerCpu, dispatch, boardState, gameState]);
}
