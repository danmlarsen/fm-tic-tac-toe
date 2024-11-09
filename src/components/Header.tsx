import Logo from '../ui/Logo';
import RestartButton from './RestartButton';
import TurnDisplay from './TurnDisplay';
import { GameState } from '../store/gameSlice';
import { useAppSelector } from '../store/hooks';

export default function Header() {
  const { gameState } = useAppSelector(state => state.game);

  return (
    <header className={`flex items-center ${gameState === GameState.NewGame ? 'justify-center' : 'justify-between'}`}>
      <Logo />
      {gameState !== GameState.NewGame && (
        <>
          <TurnDisplay />
          <RestartButton />
        </>
      )}
    </header>
  );
}
