import GameBox from './GameBox';
import { useDispatch, useSelector } from 'react-redux';
import { addMove, getIsCurPlayerCpu } from '../store/gameSlice';

export default function GameBoxGrid() {
  const { boardState } = useSelector(state => state.game);
  const isCurPlayerCpu = useSelector(getIsCurPlayerCpu);
  const filledBoxes = useSelector(state => state.game.filledCoords);
  const dispatch = useDispatch();

  function handleClick(pos) {
    if (isCurPlayerCpu) return;

    const { x, y } = pos;

    dispatch(addMove({ x, y }));
  }

  const getIsFilled = ({ rowIdx, colIdx }: { rowIdx: number; colIdx: number }) => filledBoxes.find(el => el.x === rowIdx && el.y === colIdx) !== undefined;

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5">
      {boardState.map((row, rowIdx) =>
        row.map((col, colIdx) => (
          <GameBox key={`${rowIdx}, ${colIdx}`} state={col} onClick={() => handleClick({ x: rowIdx, y: colIdx })} fill={getIsFilled({ rowIdx, colIdx })} />
        ))
      )}
    </div>
  );
}
