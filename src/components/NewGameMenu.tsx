import { useDispatch } from 'react-redux';
import Box from '../ui/Box';
import Button, { ButtonColor, ButtonType } from '../ui/Button';
import Header from './Header';
import { newGame } from '../store/gameSlice';

export default function NewGameMenu() {
  const dispatch = useDispatch();

  return (
    <div className="space-y-8">
      <Header />
      <Box>
        <h1 className="uppercase">Pick player 1's mark</h1>
      </Box>
      <div className="space-y-4">
        <Button type={ButtonType.Primary} color={ButtonColor.yellow} onClick={() => dispatch(newGame())}>
          New game (vs cpu)
        </Button>
        <Button type={ButtonType.Primary} color={ButtonColor.blue} onClick={() => dispatch(newGame())}>
          New game (vs player)
        </Button>
      </div>
    </div>
  );
}
