import Button from '../ui/Button';
import IconRestart from '../assets/icon-restart.svg';
import { useDispatch } from 'react-redux';
import { GameState, restartGame } from '../store/gameSlice';
import { useAppSelector } from '../store/hooks';

export default function RestartButton() {
  const { gameState } = useAppSelector(state => state.game);
  const dispatch = useDispatch();

  return (
    <Button
      className="size-10 justify-self-end sm:size-[52px]"
      onClick={() => dispatch(restartGame())}
      type="Tertiary"
      color="Silver"
      disabled={gameState !== GameState.Playing}
      label="Restart game button"
    >
      <img className="size-4" src={IconRestart} alt="Restart icon" />
    </Button>
  );
}
