import { motion } from 'framer-motion';

export default function Backdrop() {
  return (
    <motion.div key="Backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-10"></motion.div>
  );
}
