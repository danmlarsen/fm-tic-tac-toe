import { GameState, restartGame } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import Button from '../ui/Button';
import IconRestart from '../assets/icon-restart.svg';

export default function RestartButton() {
  const { gameState } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  return (
    <Button
      className="size-10 justify-self-end sm:size-[3.25rem]"
      onClick={() => dispatch(restartGame())}
      type="Tertiary"
      color="Silver"
      disabled={gameState !== GameState.Playing}
      label="Restart game button"
    >
      <img className="size-4 sm:size-5" src={IconRestart} alt="Restart icon" />
    </Button>
  );
}
