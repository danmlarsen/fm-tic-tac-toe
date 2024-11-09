import { useEffect } from 'react';
import { endRound, GameState, nextPlayer, roundEnding } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { boardIsFull, checkForVictory } from '../utils/utils';

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
