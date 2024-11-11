import { motion, AnimatePresence } from 'framer-motion';
import { useAppSelector } from '../store/hooks';
import IconO from '../ui/IconO';
import IconX from '../ui/IconX';

export default function TurnDisplay() {
  const currentPlayer = useAppSelector(state => state.game.currentPlayer);

  const iconClasses = 'size-4 fill-current sm:size-5';

  return (
    <div className="justify-self-center flex items-center justify-center w-24 h-10 sm:h-[3.25rem] sm:w-[8.75rem] sm:text-sm bg-navy-semidark rounded-sm sm:rounded-md shadow-inner-sm shadow-navy-darker text-silver-dark">
      <h1 className="flex gap-2 sm:gap-[0.8125rem] items-center justify-center">
        <AnimatePresence mode="wait">
          {currentPlayer === 0 ? (
            <motion.span key="x" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
              <IconX className={iconClasses} />
            </motion.span>
          ) : (
            <motion.span key="o" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
              <IconO className={iconClasses} />
            </motion.span>
          )}
        </AnimatePresence>
        <span className="font-bold">Turn</span>
      </h1>
    </div>
  );
}
