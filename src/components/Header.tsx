import { useSelector } from 'react-redux';
import Logo from '../ui/Logo';
import RestartButton from './RestartButton';
import TurnDisplay from './TurnDisplay';
import { GameState } from '../store/gameSlice';

export default function Header() {
  const { gameState } = useSelector(state => state.game);

  return (
    <header className={`flex items-center ${gameState === GameState.NewGame ? 'justify-center' : 'justify-between'}`}>
      <Logo />
      {gameState !== GameState.NewGame && (
        <>
          <TurnDisplay isX={true} />
          <RestartButton />
        </>
      )}
    </header>
  );
}
