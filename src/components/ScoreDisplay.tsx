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
    <div className={`grid place-items-center text-center text-navy-dark text-xs sm:text-base rounded-md sm:rounded-lg py-3 ${classes}`}>
      <p className="uppercase">
        {player} {playerName && `(${playerName})`}
      </p>
      <h2 className="font-bold text-md sm:text-lg">{score}</h2>
    </div>
  );
}
