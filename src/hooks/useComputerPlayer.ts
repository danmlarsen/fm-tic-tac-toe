import { useEffect } from 'react';
import { addMove, GameState, getIsCurPlayerCpu } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getEmptyCells } from '../utils/utils';

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
        if (gameState !== GameState.Playing) return;

        const nextMove = getNextMove(boardState);
        dispatch(addMove(nextMove));
      }, 1000);
    }
  }, [isCurPlayerCpu, dispatch, boardState, gameState]);
}
