import { useState } from 'react';
import GameBox, { GameBoxState } from './GameBox';

export default function GameBoxGrid() {
  const [gameArr, setGameArr] = useState([
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
    [GameBoxState.Empty, GameBoxState.Empty, GameBoxState.Empty],
  ]);

  function handleClick(pos) {
    const { x, y } = pos;

    setGameArr(prev => {
      const newArr = [...prev];
      newArr[x][y] = GameBoxState.O;
      return newArr;
    });
  }

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-5">
      {gameArr.map((row, rowIdx) =>
        row.map((col, colIdX) => <GameBox key={`${rowIdx}, ${colIdX}`} state={col} onClick={() => handleClick({ x: rowIdx, y: colIdX })} />)
      )}
    </div>
  );
}
