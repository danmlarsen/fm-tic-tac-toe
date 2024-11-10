import { useAppSelector } from '../store/hooks';
import OIcon from '../ui/OIcon';
import XIcon from '../ui/XIcon';

export default function TurnDisplay() {
  const currentPlayer = useAppSelector(state => state.game.currentPlayer);

  return (
    <div className="flex gap-2 items-center justify-center w-[96px] h-[40px] bg-navy-semidark rounded-md shadow-inner-sm shadow-navy-darker text-silver-dark">
      {currentPlayer === 0 ? <XIcon className="size-4 fill-current" /> : <OIcon className="size-4 fill-current" />}
      <span className="font-bold">Turn</span>
    </div>
  );
}
