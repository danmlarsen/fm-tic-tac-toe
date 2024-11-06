import Box from '../ui/Box';

import IconX from '../assets/icon-x.svg';
import IconO from '../assets/icon-o.svg';
import { useSelector } from 'react-redux';

export default function TurnDisplay() {
  const currentPlayer = useSelector(state => state.game.currentPlayer);
  const isX = currentPlayer === 0;

  console.log('test');

  return (
    <Box className="flex gap-4 items-center justify-center">
      <img className="size-5" src={isX ? IconX : IconO} alt={`${isX ? 'X' : 'O'} icon`} />
      <span className="uppercase">Turn</span>
    </Box>
  );
}
