import { motion } from "framer-motion";
import useScrollGrow from "@/hooks/ScrollGrowHook";
const BatteryReplacement = () => {
  const { componentRef, style } = useScrollGrow();

  return (
    <motion.div
      ref={componentRef}
      style={style}
      className="bg-red-400 h-[415px] rounded-2xl col-span-12"></motion.div>
  );
};

export default BatteryReplacement;
