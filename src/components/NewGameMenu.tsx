import Button from '../ui/Button';
import Header from './Header';
import { startGame } from '../store/gameSlice';
import MarkSelect from './MarkSelect';
import { useAppDispatch } from '../store/hooks';

export default function NewGameMenu() {
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-8">
      <Header />
      <MarkSelect />
      <div className="space-y-4">
        <Button type="Primary" color="Yellow" onClick={() => dispatch(startGame({ player2IsCpu: true }))}>
          New game (vs cpu)
        </Button>
        <Button type="Primary" color="Blue" onClick={() => dispatch(startGame({ player2IsCpu: false }))}>
          New game (vs player)
        </Button>
      </div>
    </div>
  );
}
