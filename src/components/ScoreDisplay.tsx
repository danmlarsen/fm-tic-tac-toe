type AppProps = {
  type: 'X' | 'O' | 'TIE';
  score: number;
  playerName?: string;
};

export default function ScoreDisplay({ type, score = 0, playerName = '' }: AppProps) {
  let classes = '';
  let player = '';

  if (type === 'X') {
    classes += 'bg-blue-light shadow-bg-blue-dark ';
    player = 'X';
  }
  if (type === 'O') {
    classes += 'bg-yellow-light shadow-bg-yellow-dark ';
    player = 'O';
  }
  if (type === 'TIE') {
    classes += 'bg-silver-dark shadow-bg-silver-darker ';
    player = 'Ties';
  }

  return (
    <div className={`text-center text-navy-dark rounded-2xl py-4 ${classes}`}>
      <p className="uppercase">
        {player} {playerName && `(${playerName})`}
      </p>
      <h2 className="font-bold text-lg">{score}</h2>
    </div>
  );
}
