import { setPlayerIsX } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import IconX from '../ui/IconX';
import IconO from '../ui/IconO';

type AppProps = {
  mark: 'X' | 'O';
};

export default function MarkButton({ mark }: AppProps) {
  const { player1IsX } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  return (
    <button
      className={`flex items-center justify-center rounded-md h-[3.375rem] transition duration-300 focus:outline-none focus-visible:ring-2  ${
        (player1IsX && mark === 'X') || (!player1IsX && mark === 'O')
          ? 'bg-silver-light focus-visible:ring-silver-darker'
          : 'hover:bg-navy-semidark focus-visible:ring-silver-light'
      }  `}
      onClick={() => dispatch(setPlayerIsX(mark === 'X'))}
      aria-label={`Pick "${mark}" as Player 1 mark`}
    >
      {mark === 'X' ? (
        <IconX className={`size-8 ${player1IsX ? 'fill-navy-semidark' : 'fill-silver-light'}`} />
      ) : (
        <IconO className={`size-8 ${player1IsX ? 'fill-silver-light' : 'fill-navy-semidark'}`} />
      )}
    </button>
  );
}
