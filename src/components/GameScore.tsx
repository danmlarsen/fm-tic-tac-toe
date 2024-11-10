import ScoreDisplay from './ScoreDisplay';
import { useAppSelector } from '../store/hooks';

export default function GameScore() {
  const { players, score } = useAppSelector(state => state.game);

  return (
    <div className="grid grid-cols-3 gap-5">
      <ScoreDisplay score={score.x} type="X" playerName={players[0]} />
      <ScoreDisplay score={score.tie} type="TIE" />
      <ScoreDisplay score={score.o} type="O" playerName={players[1]} />
    </div>
  );
}
