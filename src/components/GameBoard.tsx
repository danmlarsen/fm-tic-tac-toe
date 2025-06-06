import { addMove, BoardCellState, GameState, getIsCurPlayerCpu } from '../store/gameSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

import GameBoardCell from './GameBoardCell';

export default function GameBoard() {
  const { boardState, gameState } = useAppSelector(state => state.game);
  const isCurPlayerCpu = useAppSelector(getIsCurPlayerCpu);
  const filledBoxes = useAppSelector(state => state.game.filledCoords);
  const dispatch = useAppDispatch();

  function handleClick(pos: { x: number; y: number }) {
    if (gameState !== GameState.Playing || isCurPlayerCpu) return;

    const { x, y } = pos;

    if (boardState[x][y] !== BoardCellState.Empty) return;

    dispatch(addMove({ x, y }));
  }

  const getCellIsFilled = ({ rowIdx, colIdx }: { rowIdx: number; colIdx: number }) => filledBoxes.find(el => el.x === rowIdx && el.y === colIdx) !== undefined;

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5">
      {boardState.map((row, rowIdx) =>
        row.map((col, colIdx) => (
          <GameBoardCell
            key={`${rowIdx}, ${colIdx}`}
            state={col}
            onClick={() => handleClick({ x: rowIdx, y: colIdx })}
            fill={getCellIsFilled({ rowIdx, colIdx })}
            label={`Board row: ${rowIdx + 1}, column: ${colIdx + 1}`}
          />
        ))
      )}
    </div>
  );
}
