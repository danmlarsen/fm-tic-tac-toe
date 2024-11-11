import Game from './components/Game';
import NewGameMenu from './components/NewGameMenu';
import { GameState } from './store/gameSlice';
import { useAppSelector } from './store/hooks';

function App() {
  const { gameState } = useAppSelector(state => state.game);

  return (
    <div className="min-h-screen grid items-center text-center p-6">
      <main className="max-w-md w-full mx-auto">{gameState === GameState.NewGame ? <NewGameMenu /> : <Game />}</main>
    </div>
  );
}

export default App;
