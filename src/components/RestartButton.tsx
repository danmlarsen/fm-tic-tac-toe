import Button, { ButtonColor, ButtonType } from '../ui/Button';
import IconRestart from '../assets/icon-restart.svg';
import { useDispatch } from 'react-redux';
import { restartGame } from '../store/gameSlice';

export default function RestartButton() {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(restartGame())} type={ButtonType.Secondary} color={ButtonColor.silver}>
      <img src={IconRestart} alt="Restart icon" />
    </Button>
  );
}
