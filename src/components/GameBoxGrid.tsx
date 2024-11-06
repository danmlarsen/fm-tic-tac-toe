import GameBox from './GameBox';
import { useDispatch, useSelector } from 'react-redux';
import { addPiece } from '../store/gameSlice';

export default function GameBoxGrid() {
  // const [boardState, setBoardState] = useState(initialBoardState);
  // const [currentPlayer, setCurrentPlayer] = useState(0);

  const boardState = useSelector(state => state.game.boardState);
  const dispatch = useDispatch();

  function handleClick(pos) {
    const { x, y } = pos;

    dispatch(addPiece({ x, y }));
  }

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5">
      {boardState.map((row, rowIdx) =>
        row.map((col, colIdX) => <GameBox key={`${rowIdx}, ${colIdX}`} state={col} onClick={() => handleClick({ x: rowIdx, y: colIdX })} />)
      )}
    </div>
  );
}
