import { cancelRestart, GameState, quitGame } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import Button from '../ui/Button';
import Modal from '../ui/Modal';

export default function RestartGameModal() {
  const { gameState } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  return (
    <>
      <Modal isVisible={gameState === GameState.Restarting}>
        <div className="flex flex-col justify-center items-center space-y-8">
          <h1 className="uppercase text-lg sm:text-xl">Restart game?</h1>
          <div className="flex gap-4">
            <Button type="Secondary" color="Silver" onClick={() => dispatch(cancelRestart())}>
              No, cancel
            </Button>
            <Button type="Secondary" color="Yellow" onClick={() => dispatch(quitGame())}>
              Yes, restart
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
}
