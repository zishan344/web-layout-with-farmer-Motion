import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import macbook from "@/assets/macbook-exposed.png";
import { motion } from "framer-motion";
const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };
  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        bounce: 0.5,
      },
    },
  };
  const laptop = {
    initial: { y: 0, rotate: 0, scale: 5 },
    animate: {
      y: 20,
      rotate: -30,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };
  return (
    <div className="overflow-hidden">
      <Container
        className=" h-screen pt-10 grid 
    grid-cols-1 lg:grid-cols-2 place-content-center ">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            variants={introChildren}
            className=" text-5xl lg:text-8xl font-bold text-nowrap">
            <span className="text-gray">Don't worry</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            variants={introChildren}
            className="text-dark-gray  max-w-[50c] mt-10 mb-5 text-lg">
            Welcome to <span className=" font-semibold">iRepair</span> your one
            step place for all kinds of
            <span className=" font-semibold"> macbook repair</span> and
            diagnostic{" "}
          </motion.p>
          <motion.div variants={introChildren}>
            <Button>Book a service</Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={laptop}
          initial="initial"
          animate="animate"
          className="mt-10 w-3/4 lg:w-full mx-auto">
          <img className="  object-contain h-[95%]" src={macbook} alt="" />
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
