import ScoreDisplay, { ScoreDisplayType } from './ScoreDisplay';
import { useAppSelector } from '../store/hooks';

export default function GameScore() {
  const { players, score } = useAppSelector(state => state.game);

  return (
    <div className="grid grid-cols-3 gap-5">
      <ScoreDisplay score={score.x} type={ScoreDisplayType.X} playerName={players[0]} />
      <ScoreDisplay score={score.tie} type={ScoreDisplayType.Tie} />
      <ScoreDisplay score={score.o} type={ScoreDisplayType.O} playerName={players[1]} />
    </div>
  );
}
