import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch } from '../store/hooks';
import { startGame } from '../store/gameSlice';

import Button from '../ui/Button';
import Header from './Header';
import MarkSelect from './MarkSelect';

export default function NewGameMenu() {
  const dispatch = useAppDispatch();

  return (
    <AnimatePresence mode="wait">
      <motion.div key="NewGameMenu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8 sm:space-y-10">
        <Header />
        <MarkSelect />
        <div className="space-y-4 sm:space-y-5">
          <Button type="Primary" color="Yellow" onClick={() => dispatch(startGame({ player2IsCpu: true }))}>
            New game (vs cpu)
          </Button>
          <Button type="Primary" color="Blue" onClick={() => dispatch(startGame({ player2IsCpu: false }))}>
            New game (vs player)
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
