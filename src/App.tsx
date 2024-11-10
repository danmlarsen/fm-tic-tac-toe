import Game from './components/Game';
import NewGameMenu from './components/NewGameMenu';
import { GameState } from './store/gameSlice';
import { useAppSelector } from './store/hooks';

function App() {
  const { gameState } = useAppSelector(state => state.game);

  return (
    <div className="min-h-screen grid items-center text-center p-6">
      <div className="max-w-[460px] w-full mx-auto">{gameState === GameState.NewGame ? <NewGameMenu /> : <Game />}</div>
    </div>
  );
}

export default App;
