import { AnimatePresence, motion } from 'framer-motion';

import { useComputerPlayer } from '../hooks/useComputerPlayer';
import { useGameController } from '../hooks/useGameController';

import Header from './Header';
import GameBoard from './GameBoard';
import GameScore from './GameScore';
import RoundEndModal from './RoundEndModal';
import RestartGameModal from './RestartGameModal';

export default function Game() {
  useGameController();
  useComputerPlayer();

  return (
    <>
      <RestartGameModal />
      <RoundEndModal />
      <AnimatePresence mode="wait">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-5">
          <Header />
          <GameBoard />
          <GameScore />
        </motion.div>
      </AnimatePresence>
    </>
  );
}
