"use client";
import { useRef, useEffect } from "react";
import { FiArrowRight, FiTag, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";

const GlassContainer = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-30 px-4 mt-10">
      <div className="flex flex-col items-center">
        <AnimatedRoundedTag />
        <AnimatedHeader />
        <AnimatedCard />
        <div className="flex gap-4">
          <SocialMediaIcon icon={<FiFacebook />} delay={0.2} />
          <SocialMediaIcon icon={<FiTwitter />} delay={0.4} />
          <SocialMediaIcon icon={<FiInstagram />} delay={0.6} />
        </div>
      </div>
    </div>
  );
};

const AnimatedRoundedTag = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.2, duration: 0.5, type: "spring", stiffness: 100 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-md border border-gray-500 rounded-full px-4 py-2 flex items-center gap-2 shadow-md mb-6"
    >
      <FiTag className="text-white" />
      <span className="text-white text-sm font-medium">New Feature</span>
    </motion.div>
  );
};

const AnimatedHeader = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.4, duration: 0.5, type: "spring", stiffness: 100 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="relative flex items-center justify-center w-full mb-8"
    >
      <span className="absolute mx-auto py-4 flex border w-fit bg-gradient-to-r blur-xl from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-7xl box-content font-extrabold text-transparent text-center select-none tracking-tight">
        Coming Soon!
      </span>
      <h1 className="relative top-0 w-fit h-auto py-4 justify-center flex bg-gradient-to-r items-center from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-7xl font-extrabold text-transparent text-center select-auto tracking-tight">
        Coming Soon!
      </h1>
    </motion.div>
  );
};

const AnimatedCard = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { delay: 0.6, duration: 0.5, type: "spring", stiffness: 100 },
    });
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border border-gray-500 rounded-3xl p-8 py-12 shadow-lg max-w-2xl w-full mb-6"
    >
      <h2 className="text-white text-4xl font-semibold text-center">Join Our Waitlist</h2>
      <p className="text-white mt-4 text-center sm:px-16 text-gray-300">
        Sign up to be the first to know when we launch. We will let you know once we are ready to go on production.
      </p>
      <div className="max-w-sm mx-auto">
        <WaitlistForm />
      </div>
    </motion.div>
  );
};

const WaitlistForm = () => {
  const inputRef = useRef(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      onClick={() => {
        inputRef.current.focus();
      }}
      className="relative flex w-full max-w-md items-center gap-2 rounded-full border border-white/20 bg-black py-1.5 pl-6 pr-1.5 mt-6 shadow-2xl shadow-white"
    >
      <input
        ref={inputRef}
        type="email"
        placeholder="Enter your email"
        className="w-full bg-transparent text-sm text-white placeholder-white/80 focus:outline-0"
      />
      <button
        onClick={(e) => e.stopPropagation()}
        type="submit"
        className="group flex shrink-0 items-center gap-1.5 rounded-full bg-gray-200 px-4 py-3 text-sm font-medium text-black transition-transform active:scale-[0.985]"
      >
        <span>Join Waitlist</span>
        <FiArrowRight className="-mr-4 opacity-0 transition-all group-hover:-mr-0 group-hover:opacity-100 group-active:-rotate-45" />
      </button>
    </form>
  );
};

const SocialMediaIcon = ({ icon, delay }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { delay, duration: 0.5, type: "spring", stiffness: 100 },
    });
  }, [controls, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, rotate: -45, scale: 1 }}
      animate={controls}
      whileHover={{ scale: 1.1,  boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)" }}
      className="bg-black bg-opacity-30 backdrop-filter backdrop-blur-md border border-gray-500 rounded-lg p-3 shadow-md flex items-center justify-center text-white text-xl"
    >
      {icon}
    </motion.div>
  );
};

export default GlassContainer;
