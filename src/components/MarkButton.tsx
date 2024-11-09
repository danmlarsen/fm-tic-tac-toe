import OIcon from '../ui/OIcon';
import XIcon from '../ui/XIcon';
import { setPlayerIsX } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

type AppProps = {
  mark: 'X' | 'O';
};

export default function MarkButton({ mark }: AppProps) {
  const { player1IsX } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  return (
    <button
      className={`flex justify-center rounded-lg py-2 ${player1IsX && mark === 'X' && 'bg-silver-light'} ${!player1IsX && mark === 'O' && 'bg-silver-light'} `}
      onClick={() => dispatch(setPlayerIsX(mark === 'X'))}
    >
      {mark === 'X' ? (
        <XIcon className={`size-10 ${player1IsX ? 'fill-navy-semidark' : 'fill-silver-light'}`} />
      ) : (
        <OIcon className={`size-10 ${player1IsX ? 'fill-silver-light' : 'fill-navy-semidark'}`} />
      )}
    </button>
  );
}
