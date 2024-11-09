import GameBox from './GameBox';
import { addMove, getIsCurPlayerCpu } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function GameBoxGrid() {
  const { boardState } = useAppSelector(state => state.game);
  const isCurPlayerCpu = useAppSelector(getIsCurPlayerCpu);
  const filledBoxes = useAppSelector(state => state.game.filledCoords);
  const dispatch = useAppDispatch();

  function handleClick(pos: { x: number; y: number }) {
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
