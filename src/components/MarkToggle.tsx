import { useDispatch, useSelector } from 'react-redux';
import { toggleMark } from '../store/gameSlice';

export default function MarkToggle() {
  const { player1IsX: isX } = useSelector(state => state.game);
  const dispatch = useDispatch();

  return (
    <div>
      Is X: <input type="checkbox" name="markToggle" id="markToggle" checked={isX} onChange={() => dispatch(toggleMark())} />
    </div>
  );
}
