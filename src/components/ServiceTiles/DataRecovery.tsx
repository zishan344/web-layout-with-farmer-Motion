import useScrollGrow from "@/hooks/ScrollGrowHook";
import { motion } from "framer-motion";

const DataRecovery = () => {
  const { componentRef, style } = useScrollGrow();

  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-red-400 h-[415px] rounded-2xl col-span-6 lg:col-span-7"></motion.div>
  );
};

export default DataRecovery;
