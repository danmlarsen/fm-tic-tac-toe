import Button, { ButtonColor, ButtonType } from '../ui/Button';
import Modal from '../ui/Modal';
import { nextRound, quitGame } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import XIcon from '../ui/XIcon';
import OIcon from '../ui/OIcon';

export default function RoundEndModal() {
  const { roundWinner, player1IsX, player2IsCpu } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  let message = '';
  if (roundWinner === 0 && player1IsX && player2IsCpu) message = 'You won!';
  if (roundWinner === 1 && player1IsX && player2IsCpu) message = 'Oh no, you lost...';
  if (roundWinner === 0 && player1IsX && !player2IsCpu) message = 'Player 1 wins!';
  if (roundWinner === 1 && !player1IsX && !player2IsCpu) message = 'Player 2 wins!';

  return (
    <Modal>
      <div className="grid place-items-center">
        <div className="grid gap-4">
          {roundWinner !== -1 && <p>{message}</p>}
          <div className="flex items-center gap-2">
            {roundWinner !== -1 && (
              <div className="size-10">
                {roundWinner === 0 && <XIcon />}
                {roundWinner === 1 && <OIcon />}
              </div>
            )}
            <h1 className="text-lg">{roundWinner === -1 ? 'Round tied' : 'Takes the round'}</h1>
          </div>
          <div className="flex justify-center gap-4">
            <Button type={ButtonType.Secondary} onClick={() => dispatch(quitGame())}>
              Quit
            </Button>
            <Button type={ButtonType.Secondary} color={ButtonColor.silver} onClick={() => dispatch(nextRound())}>
              Next round
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
