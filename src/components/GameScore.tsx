import { useSelector } from 'react-redux';
import ScoreDisplay, { ScoreDisplayType } from './ScoreDisplay';

export default function GameScore() {
  const { playerNames, score } = useSelector(state => state.game);

  console.log(playerNames);

  return (
    <div className="grid grid-cols-3 gap-5">
      <ScoreDisplay score={score.x} type={ScoreDisplayType.X} playerName={playerNames.x} />
      <ScoreDisplay score={score.tie} type={ScoreDisplayType.Tie} />
      <ScoreDisplay score={score.o} type={ScoreDisplayType.O} playerName={playerNames.o} />
    </div>
  );
}
