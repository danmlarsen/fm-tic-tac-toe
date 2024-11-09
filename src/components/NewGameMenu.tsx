import Button, { ButtonColor, ButtonType } from '../ui/Button';
import Header from './Header';
import { startGame } from '../store/gameSlice';
import MarkSelect from './MarkSelect';
import { useAppDispatch } from '../store/hooks';

export default function NewGameMenu() {
  const dispatch = useAppDispatch();

  function startGameVsCPU() {
    dispatch(startGame({ player2IsCpu: true }));
  }

  function startGameVsPlayer() {
    dispatch(startGame({ player2IsCpu: false }));
  }

  return (
    <div className="space-y-8">
      <Header />
      <MarkSelect />
      <div className="space-y-4">
        <Button type={ButtonType.Primary} color={ButtonColor.yellow} onClick={startGameVsCPU}>
          New game (vs cpu)
        </Button>
        <Button type={ButtonType.Primary} color={ButtonColor.blue} onClick={startGameVsPlayer}>
          New game (vs player)
        </Button>
      </div>
    </div>
  );
}
