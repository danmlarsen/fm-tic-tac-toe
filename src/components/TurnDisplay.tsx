import Box from '../ui/Box';

import IconX from '../assets/icon-x.svg';
import IconO from '../assets/icon-o.svg';

type AppProps = {
  isX: boolean;
};

export default function TurnDisplay({ isX }: AppProps) {
  return (
    <Box className="flex gap-4 items-center justify-center">
      <img className="size-5" src={isX ? IconX : IconO} alt={`${isX ? 'X' : 'O'} icon`} />
      <span className="uppercase">Turn</span>
    </Box>
  );
}
