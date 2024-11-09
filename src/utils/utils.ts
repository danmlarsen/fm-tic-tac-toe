import { GameBoxState } from '../components/GameBoardCell';

export const isFull = (row: number[]) => row.every((val, _, arr: number[]) => val === arr[0] && val !== GameBoxState.Empty);
export const getCol = (boardState: number[][], col: number) => boardState.map(row => row[col]);
export const boardIsFull = (boardState: number[][]) => boardState.flat().every(box => box !== GameBoxState.Empty);

export function checkForVictory(boardState: number[][]) {
  let found: { x: number; y: number }[] = [];
  boardState.forEach((row, idx) => {
    if (isFull(row)) {
      found = [
        { x: idx, y: 0 },
        { x: idx, y: 1 },
        { x: idx, y: 2 },
      ];
      return;
    }
    if (isFull(getCol(boardState, idx))) {
      found = [
        { x: 0, y: idx },
        { x: 1, y: idx },
        { x: 2, y: idx },
      ];
      return;
    }
  });

  if (boardState[0][0] !== GameBoxState.Empty && boardState[0][0] === boardState[1][1] && boardState[0][0] === boardState[2][2])
    found = [
      { x: 0, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 2 },
    ];
  if (boardState[0][2] !== GameBoxState.Empty && boardState[0][2] === boardState[1][1] && boardState[0][2] === boardState[2][0])
    found = [
      { x: 0, y: 2 },
      { x: 1, y: 1 },
      { x: 2, y: 0 },
    ];

  return found;
}

export function getEmptyCells(boardState: number[][]) {
  const coordsArr: { x: number; y: number }[] = [];
  boardState.forEach((row, x) => {
    row.forEach((col, y) => {
      if (col === GameBoxState.Empty) coordsArr.push({ x, y });
    });
  });
  return coordsArr;
}
