import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: "white" | "dark";
}

const Menu = ({ isOpen, setIsOpen, variant }: Props) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={isOpen ? "close" : "menu"}
        initial={{ opacity: 0, rotate: -90 }}
        animate={{ opacity: 1, rotate: 0 }}
        exit={{ opacity: 0, rotate: 90 }}
        transition={{ duration: 0.3 }}
        role="button"
        className={clsx(
          "cursor-pointer flex lg:hidden",
          variant === "white" && "text-white",
          variant === "dark" && "text-dark-100"
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </motion.div>
    </AnimatePresence>
  );
};

export default Menu;
