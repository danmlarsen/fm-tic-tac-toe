import Button, { ButtonColor, ButtonType } from '../ui/Button';
import IconRestart from '../assets/icon-restart.svg';
import { useDispatch } from 'react-redux';
import { GameState, restartGame } from '../store/gameSlice';
import { useAppSelector } from '../store/hooks';

export default function RestartButton() {
  const { gameState } = useAppSelector(state => state.game);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(restartGame())} type={ButtonType.Secondary} color={ButtonColor.silver} disabled={gameState !== GameState.Playing}>
      <img className="size-4" src={IconRestart} alt="Restart icon" />
    </Button>
  );
}
