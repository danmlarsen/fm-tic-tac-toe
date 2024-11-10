import { BoardCellState, GameState, getIsCurPlayerCpu } from '../store/gameSlice';
import { useAppSelector } from '../store/hooks';

import IconX from '../ui/IconX';
import IconO from '../ui/IconO';
import IconOOutline from '../ui/IconOOutline';
import IconXOutline from '../ui/IconXOutline';

type AppProps = {
  state?: BoardCellState;
  onClick: (event: React.MouseEvent) => void;
  fill: boolean;
};

export default function GameBoardCell({ state = BoardCellState.Empty, onClick, fill }: AppProps) {
  const { currentPlayer, gameState } = useAppSelector(state => state.game);
  const isCurPlayerCpu = useAppSelector(getIsCurPlayerCpu);

  let fillBg = `bg-navy-semidark shadow-navy-darker`;
  if (fill) fillBg = state === BoardCellState.X ? 'bg-blue-light shadow-blue-dark' : 'bg-yellow-light shadow-yellow-dark';

  return (
    <button className={`size-24 rounded-2xl shadow-inner grid place-items-center group ${fillBg}`} onClick={onClick}>
      {state !== BoardCellState.Empty ? (
        <>
          {state === BoardCellState.X && <IconX className={`size-10 ${fill ? 'fill-navy-dark' : 'fill-blue-light'}`} />}
          {state === BoardCellState.O && <IconO className={`size-10 ${fill ? 'fill-navy-dark' : 'fill-yellow-light'}`} />}
        </>
      ) : (
        !isCurPlayerCpu &&
        gameState === GameState.Playing &&
        (currentPlayer === 0 ? (
          <IconXOutline className="stroke-blue-light size-10 opacity-0 group-hover:opacity-100 transition duration-300" />
        ) : (
          <IconOOutline className="stroke-yellow-light size-10 opacity-0 group-hover:opacity-100 transition duration-300" />
        ))
      )}
    </button>
  );
}
