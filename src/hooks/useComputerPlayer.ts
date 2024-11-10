import { useEffect, useRef } from 'react';
import { addMove, GameState, getIsCurPlayerCpu } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getEmptyCells } from '../utils/utils';
import { CPU_MOVE_DELAY_SECONDS } from '../utils/constants';

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

  const timeoutId = useRef(0);

  useEffect(() => {
    if (isCurPlayerCpu && gameState === GameState.Playing) {
      const nextMove = getNextMove(boardState);

      if (timeoutId.current) clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(() => {
        if (!isCurPlayerCpu || gameState !== GameState.Playing) return;
        dispatch(addMove(nextMove));
      }, CPU_MOVE_DELAY_SECONDS * 1000);
    }
  }, [isCurPlayerCpu, dispatch, boardState, gameState]);
}
