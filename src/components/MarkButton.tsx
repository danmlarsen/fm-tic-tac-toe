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
      className={`flex justify-center rounded-lg py-2 transition duration-300 ${
        (player1IsX && mark === 'X') || (!player1IsX && mark === 'O') ? 'bg-silver-light' : 'hover:bg-navy-semidark'
      }  `}
      onClick={() => dispatch(setPlayerIsX(mark === 'X'))}
    >
      {mark === 'X' ? (
        <IconX className={`size-8 ${player1IsX ? 'fill-navy-semidark' : 'fill-silver-light'}`} />
      ) : (
        <IconO className={`size-8 ${player1IsX ? 'fill-silver-light' : 'fill-navy-semidark'}`} />
      )}
    </button>
  );
}
