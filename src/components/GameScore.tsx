import ScoreDisplay, { ScoreDisplayType } from './ScoreDisplay';

export default function GameScore() {
  return (
    <div className="grid grid-cols-3 gap-5">
      <ScoreDisplay score={2} type={ScoreDisplayType.X} playerName="You" />
      <ScoreDisplay score={5} type={ScoreDisplayType.Tie} />
      <ScoreDisplay score={6} type={ScoreDisplayType.O} playerName="CPU" />
    </div>
  );
}
