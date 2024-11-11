import { useEffect, useRef } from 'react';
import { addMove, BoardCellState, GameState, getIsCurPlayerCpu } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkForVictory, getEmptyCells } from '../utils/utils';
import { CPU_MOVE_DELAY_SECONDS } from '../utils/constants';

function randomMove(boardState: number[][]) {
  const emptyCells = getEmptyCells(boardState);
  const randomMove = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomMove];
}

function findWinningMove(boardState: number[][], mark: BoardCellState) {
  const emptyCells = getEmptyCells(boardState);
  for (let i = 0; i < emptyCells.length; i++) {
    const board = JSON.parse(JSON.stringify(boardState));
    const cell = emptyCells[i];
    board[cell.x][cell.y] = mark;
    const victory = checkForVictory(board);
    if (victory.length > 0) {
      return cell;
    }
  }
  return null;
}

function proactiveMove(boardState: number[][], playerIsX = true) {
  const playerMark = playerIsX ? BoardCellState.X : BoardCellState.O;
  const computerMark = playerIsX ? BoardCellState.O : BoardCellState.X;

  const computerVictory = findWinningMove(boardState, computerMark);
  if (computerVictory) {
    return computerVictory;
  }

  const playerVictory = findWinningMove(boardState, playerMark);
  if (playerVictory) {
    return playerVictory;
  }

  return randomMove(boardState);
}

function getNextMove(boardState: number[][], playerIsX = true) {
  return proactiveMove(boardState, playerIsX);
}

export function useComputerPlayer() {
  const isCurPlayerCpu = useAppSelector(getIsCurPlayerCpu);
  const boardState = useAppSelector(state => state.game.boardState);
  const gameState = useAppSelector(state => state.game.gameState);
  const playerIsX = useAppSelector(state => state.game.player1IsX);
  const dispatch = useAppDispatch();

  const timeoutId = useRef(0);

  useEffect(() => {
    if (isCurPlayerCpu && gameState === GameState.Playing) {
      const nextMove = getNextMove(boardState, playerIsX);

      if (timeoutId.current) clearTimeout(timeoutId.current);

      timeoutId.current = setTimeout(() => {
        if (!isCurPlayerCpu || gameState !== GameState.Playing) return;
        dispatch(addMove(nextMove));
      }, CPU_MOVE_DELAY_SECONDS * 1000);
    }
  }, [isCurPlayerCpu, dispatch, boardState, gameState, playerIsX]);
}
