import { motion } from "framer-motion"
import { ArrowIcon } from "./arrow-icon"

export const NavChevron = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.span
      transition={{
        duration: 0.3
      }}
      initial={{ rotate: 0 }}
      animate={isOpen ? { rotate: -180 } : { rotate: 0 }}
      className="block ml-[4px] w-[16px] h-[16px]"
    >
      <ArrowIcon />
    </motion.span>
  )
}
