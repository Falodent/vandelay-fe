import { AnimatePresence, motion } from "framer-motion";

interface EntranceProps {
  children: React.ReactNode;
  className?: string;
}

const Entrance = ({ children, className }: EntranceProps) => {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={className}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default Entrance;
