import { GameState } from '../store/gameSlice';
import { useAppSelector } from '../store/hooks';

import Logo from '../ui/Logo';
import RestartButton from './RestartButton';
import TurnDisplay from './TurnDisplay';

export default function Header() {
  const { gameState } = useAppSelector(state => state.game);

  return (
    <header className={`grid items-center ${gameState === GameState.NewGame ? ' grid-cols-1' : 'grid-cols-3'}`}>
      <div className={`${gameState === GameState.NewGame && 'justify-self-center'}`}>
        <Logo />
      </div>
      {gameState !== GameState.NewGame && (
        <>
          <TurnDisplay />
          <RestartButton />
        </>
      )}
    </header>
  );
}
