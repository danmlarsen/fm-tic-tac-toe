import { useDispatch } from 'react-redux';
import Button, { ButtonColor, ButtonType } from '../ui/Button';
import Modal from '../ui/Modal';
import { nextRound, quitGame } from '../store/gameSlice';

export default function RoundEndModal() {
  const dispatch = useDispatch();

  return (
    <Modal>
      <div className="flex justify-center items-center">
        <div className="space-x-4">
          <Button type={ButtonType.Secondary} onClick={() => dispatch(quitGame())}>
            Quit
          </Button>
          <Button type={ButtonType.Secondary} color={ButtonColor.silver} onClick={() => dispatch(nextRound())}>
            Next round
          </Button>
        </div>
      </div>
    </Modal>
  );
}
