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

const hoverVariant = {
  rest: {
    opacity: 0,
    x: '-50%',
    y: '-50%',
    display: 'none',
  },
  hover: {
    opacity: 1,
    x: '-50%',
    y: '-50%',
    display: 'block',
  },
};

export default function GameBoardCell({ state = BoardCellState.Empty, onClick, fill, label }: AppProps) {
  const { currentPlayer, gameState } = useAppSelector(state => state.game);
  const isCurPlayerCpu = useAppSelector(getIsCurPlayerCpu);

  let fillBg = `bg-navy-semidark shadow-navy-darker`;
  if (fill) fillBg = state === BoardCellState.X ? 'bg-blue-light shadow-blue-dark' : 'bg-yellow-light shadow-yellow-dark';

  return (
    <motion.button
      initial="rest"
      animate="rest"
      whileHover="hover"
      whileFocus="hover"
      className={`before:block before:pt-[100%] rounded-md sm:rounded-lg shadow-inner relative transition duration-300 group focus:outline-none focus:ring-2 ${
        currentPlayer === 0 ? 'ring-blue-light' : 'ring-yellow-light'
      } ${fillBg}`}
      onClick={onClick}
      disabled={isCurPlayerCpu || state !== BoardCellState.Empty}
      aria-label={label}
    >
      {state !== BoardCellState.Empty ? (
        <motion.span
          initial={{ opacity: 0, scale: 0.75, x: '-50%', y: '-50%' }}
          animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
          className="absolute top-1/2 left-1/2 w-2/5 h-2/5 min-w-10 sm:size-16"
        >
          {state === BoardCellState.X && <IconX className={`  ${fill ? 'fill-navy-dark' : 'fill-blue-light'}`} />}
          {state === BoardCellState.O && <IconO className={`  ${fill ? 'fill-navy-dark' : 'fill-yellow-light'}`} />}
        </motion.span>
      ) : (
        <motion.span variants={hoverVariant} key={state} className="absolute top-1/2 left-1/2 w-2/5 h-2/5 min-w-10 sm:size-16 size-10">
          {!isCurPlayerCpu &&
            gameState === GameState.Playing &&
            (currentPlayer === 0 ? <IconXOutline className={`stroke-blue-light `} /> : <IconOOutline className={`stroke-yellow-light`} />)}
        </motion.span>
      )}
    </motion.button>
  );
}
