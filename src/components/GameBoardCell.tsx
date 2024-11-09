import { GameState, getIsCurPlayerCpu } from '../store/gameSlice';
import { useAppSelector } from '../store/hooks';
import OIcon from '../ui/OIcon';
import OIconOutline from '../ui/OIconOutline';
import XIcon from '../ui/XIcon';
import XIconOutline from '../ui/XIconOutline';

export enum GameBoxState {
  Empty,
  X,
  O,
}

type AppProps = {
  state?: GameBoxState;
  onClick: (event: React.MouseEvent) => void;
  fill: boolean;
};

export default function GameBoardCell({ state = GameBoxState.Empty, onClick, fill }: AppProps) {
  const { currentPlayer, gameState } = useAppSelector(state => state.game);
  const isCurPlayerCpu = useAppSelector(getIsCurPlayerCpu);

  let fillBg = `bg-navy-semidark shadow-navy-darker`;
  if (fill) fillBg = state === GameBoxState.X ? 'bg-blue-light shadow-blue-dark' : 'bg-yellow-light shadow-yellow-dark';

  return (
    <button className={`size-24 rounded-2xl shadow-inner grid place-items-center group ${fillBg}`} onClick={onClick}>
      {state !== GameBoxState.Empty ? (
        <>
          {state === GameBoxState.X && <XIcon className={`size-10 ${fill ? 'fill-navy-dark' : 'fill-blue-light'}`} />}
          {state === GameBoxState.O && <OIcon className={`size-10 ${fill ? 'fill-navy-dark' : 'fill-yellow-light'}`} />}
        </>
      ) : (
        !isCurPlayerCpu &&
        gameState === GameState.Playing &&
        (currentPlayer === 0 ? (
          <XIconOutline className="stroke-blue-light size-10 opacity-0 group-hover:opacity-100 transition duration-300" />
        ) : (
          <OIconOutline className="stroke-yellow-light size-10 opacity-0 group-hover:opacity-100 transition duration-300" />
        ))
      )}
    </button>
  );
}
