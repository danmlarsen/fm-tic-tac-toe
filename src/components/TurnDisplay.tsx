import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../store/hooks';
import IconO from '../ui/IconO';
import IconX from '../ui/IconX';

export default function TurnDisplay() {
  const currentPlayer = useAppSelector(state => state.game.currentPlayer);

  return (
    <div className="justify-self-center flex gap-2 items-center justify-center w-[96px] h-[40px] sm:h-[52px] sm:w-[140px] bg-navy-semidark rounded-sm sm:rounded-md shadow-inner-sm shadow-navy-darker text-silver-dark">
      <AnimatePresence mode="wait">
        {currentPlayer === 0 ? (
          <motion.div key="x" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
            <IconX className="size-4 fill-current" />
          </motion.div>
        ) : (
          <motion.div key="o" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
            <IconO className="size-4 fill-current" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="font-bold">Turn</span>
    </div>
  );
}
