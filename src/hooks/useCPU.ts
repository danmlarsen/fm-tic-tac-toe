import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMove, getIsCurPlayerCpu } from '../store/gameSlice';
import { GameBoxState } from '../components/GameBox';

export function useCPU() {
  const isCurPlayerCpu = useSelector(getIsCurPlayerCpu);
  const boardState = useSelector(state => state.game.boardState);
  const dispatch = useDispatch();

  // const getEmptyBoxCoords = state =>
  //   state
  //     .map(row => row.filter(box => box === GameBoxState.Empty))
  //     .map((row, x) =>
  //       row.map((_, y) => {
  //         return { x, y };
  //       })
  //     )
  //     .flat();

  function getEmptyBoxCoords(state) {
    const coordsArr = [];
    state.forEach((row, x) => {
      row.forEach((col, y) => {
        if (col === GameBoxState.Empty) coordsArr.push({ x, y });
      });
    });
    return coordsArr;
  }

  useEffect(() => {
    if (isCurPlayerCpu) {
      const emptyBoxes = getEmptyBoxCoords(boardState);

      console.log(emptyBoxes);

      const randomMove = Math.floor(Math.random() * emptyBoxes.length);

      setTimeout(() => {
        dispatch(addMove(emptyBoxes[randomMove]));
      }, 1000);
    }
  }, [isCurPlayerCpu, dispatch, boardState]);
}
