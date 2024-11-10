import { useDispatch } from 'react-redux';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { cancelRestart, quitGame } from '../store/gameSlice';

export default function RestartGameModal() {
  const dispatch = useDispatch();

  return (
    <Modal>
      <div className="flex flex-col justify-center items-center space-y-8">
        <h1 className="uppercase text-xl">Restart game?</h1>
        <div className="space-x-4">
          <Button type="Secondary" color="Silver" onClick={() => dispatch(cancelRestart())}>
            No, cancel
          </Button>
          <Button type="Secondary" color="Yellow" onClick={() => dispatch(quitGame())}>
            Yes, restart
          </Button>
        </div>
      </div>
    </Modal>
  );
}
