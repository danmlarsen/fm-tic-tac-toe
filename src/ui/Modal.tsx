import { AnimatePresence, motion } from 'framer-motion';
import Backdrop from './Backdrop';

export default function Modal({ children, isVisible }: { children: React.ReactNode; isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <Backdrop />
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-1/2 left-0 right-0 text-silver-dark bg-navy-semidark min-h-[266px] -translate-y-1/2 flex justify-center z-20"
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
