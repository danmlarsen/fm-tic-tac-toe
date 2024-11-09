import GameBoxGrid from './GameBoxGrid';
import GameScore from './GameScore';
import Header from './Header';
import { GameState } from '../store/gameSlice';
import RoundEndModal from './RoundEndModal';
import RestartGameModal from './RestartGameModal';
import { useComputerPlayer } from '../hooks/useComputerPlayer';
import { useGameController } from '../hooks/useGameController';
import { useAppSelector } from '../store/hooks';

export default function Game() {
  const { gameState } = useAppSelector(state => state.game);

  useGameController();
  useComputerPlayer();

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
