import GameBoxGrid from './GameBoxGrid';
import GameScore from './GameScore';
import Header from './Header';

export default function Game() {
  return (
    <div className="space-y-5">
      <Header />
      <GameBoxGrid />
      <GameScore />
    </div>
  );
}
