import { useSelector } from 'react-redux';
import Game from './components/Game';
import NewGameMenu from './components/NewGameMenu';
import { GameState } from './store/gameSlice';

function App() {
  const { gameState } = useSelector(state => state.game);

  return (
    <div className="min-h-screen grid place-items-center text-center">
      <div className="max-w-[328px]">{gameState === GameState.NewGame ? <NewGameMenu /> : <Game />}</div>
    </div>
  );
}

export default App;
