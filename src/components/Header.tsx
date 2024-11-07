import { useSelector } from 'react-redux';
import Logo from '../ui/Logo';
import RestartButton from './RestartButton';
import TurnDisplay from './TurnDisplay';
import { GameState } from '../store/gameSlice';

export default function Header() {
  const { gameState } = useSelector(state => state.game);

  return (
    <header className={`flex items-center ${gameState === GameState.Started ? 'justify-between' : 'justify-center'}`}>
      <Logo />
      {gameState === GameState.Started && (
        <>
          <TurnDisplay isX={true} />
          <RestartButton />
        </>
      )}
    </header>
  );
}
