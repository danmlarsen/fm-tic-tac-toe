import { useDispatch, useSelector } from 'react-redux';
import Box from '../ui/Box';
import Button, { ButtonColor, ButtonType } from '../ui/Button';
import Header from './Header';
import { startGame } from '../store/gameSlice';
import MarkToggle from './MarkToggle';

export default function NewGameMenu() {
  const { player1IsX: isX } = useSelector(state => state.game);
  const dispatch = useDispatch();

  function startGameVsCPU() {
    if (isX) {
      dispatch(
        startGame([
          { name: 'YOU', cpu: false },
          { name: 'CPU', cpu: true },
        ])
      );
    } else {
      dispatch(
        startGame([
          { name: 'CPU', cpu: true },
          { name: 'YOU', cpu: false },
        ])
      );
    }
  }

  function startGameVsPlayer() {
    if (isX) {
      dispatch(
        startGame([
          { name: 'P1', cpu: false },
          { name: 'P2', cpu: false },
        ])
      );
    } else {
      dispatch(
        startGame([
          { name: 'P2', cpu: false },
          { name: 'P1', cpu: false },
        ])
      );
    }
  }

  return (
    <div className="space-y-8">
      <Header />
      <Box>
        <h1 className="uppercase">Pick player 1's mark</h1>
        <MarkToggle />
        <p className="uppercase">Remember: X Goes first</p>
      </Box>
      <div className="space-y-4">
        <Button type={ButtonType.Primary} color={ButtonColor.yellow} onClick={startGameVsCPU}>
          New game (vs cpu)
        </Button>
        <Button type={ButtonType.Primary} color={ButtonColor.blue} onClick={startGameVsPlayer}>
          New game (vs player)
        </Button>
      </div>
    </div>
  );
}
