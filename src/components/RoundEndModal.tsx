import Button from '../ui/Button';
import Modal from '../ui/Modal';
import { nextRound, quitGame } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import IconX from '../ui/IconX';
import IconO from '../ui/IconO';

export default function RoundEndModal() {
  const { roundWinner, player1IsX, player2IsCpu } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  let message = '';
  if (roundWinner === 0 && player2IsCpu) message = player1IsX ? 'You won!' : 'Oh no, you lost...';
  if (roundWinner === 1 && player2IsCpu) message = player1IsX ? 'Oh no, you lost...' : 'You won!';
  if (roundWinner === 0 && !player2IsCpu) message = `Player ${player1IsX ? '1' : '2'} wins!`;
  if (roundWinner === 1 && !player2IsCpu) message = `Player ${player1IsX ? '2' : '1'} wins!`;

  return (
    <Modal>
      <div className="grid place-items-center">
        <div className="grid gap-4">
          {roundWinner !== -1 && <p>{message}</p>}
          <div className="flex items-center justify-center gap-2">
            {roundWinner !== -1 && (
              <div className="size-10">
                {roundWinner === 0 && <IconX />}
                {roundWinner === 1 && <IconO />}
              </div>
            )}
            <h1 className="text-lg text-center">{roundWinner === -1 ? 'Round tied' : 'Takes the round'}</h1>
          </div>
          <div className="flex justify-center gap-4">
            <Button type="Secondary" onClick={() => dispatch(quitGame())}>
              Quit
            </Button>
            <Button type="Secondary" color="Silver" onClick={() => dispatch(nextRound())}>
              Next round
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
