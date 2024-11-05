import Button, { ButtonColor, ButtonType } from '../ui/Button';
import IconRestart from '../assets/icon-restart.svg';

export default function RestartButton() {
  return (
    <Button onClick={() => console.log('Clicked restart')} type={ButtonType.Secondary} color={ButtonColor.silver}>
      <img src={IconRestart} alt="Restart icon" />
    </Button>
  );
}
