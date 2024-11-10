import { motion } from 'framer-motion';

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
  label: string;
};

export default function GameBoardCell({ state = BoardCellState.Empty, onClick, fill, label }: AppProps) {
  const { currentPlayer, gameState } = useAppSelector(state => state.game);
  const isCurPlayerCpu = useAppSelector(getIsCurPlayerCpu);

  let fillBg = `bg-navy-semidark shadow-navy-darker`;
  if (fill) fillBg = state === BoardCellState.X ? 'bg-blue-light shadow-blue-dark' : 'bg-yellow-light shadow-yellow-dark';

  return (
    <button
      className={`before:block before:pt-[100%] rounded-md sm:rounded-lg shadow-inner relative transition duration-300 group ${fillBg}`}
      onClick={onClick}
      disabled={isCurPlayerCpu}
      aria-label={label}
    >
      {state !== BoardCellState.Empty ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.75, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 min-w-10 sm:size-16"
        >
          {state === BoardCellState.X && <IconX className={`  ${fill ? 'fill-navy-dark' : 'fill-blue-light'}`} />}
          {state === BoardCellState.O && <IconO className={`  ${fill ? 'fill-navy-dark' : 'fill-yellow-light'}`} />}
        </motion.div>
      ) : (
        !isCurPlayerCpu &&
        gameState === GameState.Playing &&
        (currentPlayer === 0 ? (
          <IconXOutline className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 min-w-10 sm:size-16  stroke-blue-light size-10 opacity-0 group-hover:opacity-100 transition duration-300" />
        ) : (
          <IconOOutline className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/5 h-2/5 min-w-10 sm:size-16 stroke-yellow-light size-10 opacity-0 group-hover:opacity-100 transition duration-300" />
        ))
      )}
    </button>
  );
}
