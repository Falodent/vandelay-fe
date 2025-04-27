import { motion } from "framer-motion";
const Dropdown = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={className}
      role="menu"
    >
      {children}
    </motion.div>
  );
};

export default Dropdown;
