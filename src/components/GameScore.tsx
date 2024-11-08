import { useSelector } from 'react-redux';
import ScoreDisplay, { ScoreDisplayType } from './ScoreDisplay';

export default function GameScore() {
  const { players, score } = useSelector(state => state.game);

  return (
    <div className="grid grid-cols-3 gap-5">
      <ScoreDisplay score={score.x} type={ScoreDisplayType.X} playerName={players[0].name} />
      <ScoreDisplay score={score.tie} type={ScoreDisplayType.Tie} />
      <ScoreDisplay score={score.o} type={ScoreDisplayType.O} playerName={players[1].name} />
    </div>
  );
}
