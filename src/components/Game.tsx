import { useDispatch, useSelector } from 'react-redux';
import GameBoxGrid from './GameBoxGrid';
import GameScore from './GameScore';
import Header from './Header';
import { endRound, GameState } from '../store/gameSlice';
import RoundEndModal from './RoundEndModal';
import RestartGameModal from './RestartGameModal';
import { useEffect } from 'react';
import { useCPU } from '../hooks/useCPU';

export default function Game() {
  const { gameState } = useSelector(state => state.game);
  const dispatch = useDispatch();

  useCPU();

  useEffect(() => {
    if (gameState === GameState.RoundEnding) {
      setTimeout(() => {
        dispatch(endRound());
      }, 1000);
    }
  }, [gameState, dispatch]);

  return (
    <>
      {gameState === GameState.RoundEnd && <RoundEndModal />}
      {gameState === GameState.Restarting && <RestartGameModal />}

      <div className="space-y-5">
        <Header />
        <GameBoxGrid />
        <GameScore />
      </div>
    </>
  );
}
