import { useEffect } from 'react';
import { endRound, GameState, nextPlayer, roundEnding, startNextTurn } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { boardIsFull, checkForVictory } from '../utils/utils';
import { NEXTPLAYER_DELAY_SECONDS, ROUNDEND_DELAY_SECONDS } from '../utils/constants';

export function useGameController() {
  const { gameState, boardState, currentPlayer } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (gameState === GameState.TurnEnd) {
      setTimeout(() => {
        dispatch(startNextTurn());
      }, NEXTPLAYER_DELAY_SECONDS * 1000);
    }
  }, [gameState, dispatch]);

  useEffect(() => {
    if (gameState === GameState.TurnEnding) {
      const foundFull = checkForVictory(boardState);
      if (foundFull.length > 0) {
        dispatch(roundEnding(foundFull));
      } else if (boardIsFull(boardState)) {
        dispatch(roundEnding({}));
      } else {
        dispatch(nextPlayer());
      }
    }

    if (gameState === GameState.RoundEnding) {
      setTimeout(() => {
        dispatch(endRound());
      }, ROUNDEND_DELAY_SECONDS * 1000);
    }
  }, [gameState, boardState, currentPlayer, dispatch]);
}
