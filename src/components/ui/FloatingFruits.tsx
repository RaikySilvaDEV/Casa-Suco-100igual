import React from 'react';
import { motion } from 'framer-motion';
import { OrangeSlice, Strawberry, LimeSlice, AcaiBerry } from './Fruits';

export const FloatingFruits: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {/* Orange Slice Top Left */}
      <motion.div
        className="absolute top-[12%] left-[8%] hidden lg:block"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 15, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <OrangeSlice size={130} className="opacity-75 hover:opacity-100 transition-opacity" />
      </motion.div>

      {/* Strawberry Right Upper Middle */}
      <motion.div
        className="absolute top-[20%] right-[10%] hidden md:block"
        animate={{
          y: [0, 15, -15, 0],
          rotate: [0, -20, 15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <Strawberry size={95} className="opacity-80" />
      </motion.div>

      {/* Lime Slice Mid-Left */}
      <motion.div
        className="absolute top-[48%] left-[5%] hidden lg:block"
        animate={{
          y: [0, -12, 12, 0],
          rotate: [0, 25, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <LimeSlice size={100} className="opacity-70" />
      </motion.div>

      {/* Acai Berry Mid-Right */}
      <motion.div
        className="absolute top-[55%] right-[6%] hidden lg:block"
        animate={{
          y: [0, 18, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      >
        <AcaiBerry size={110} className="opacity-75" />
      </motion.div>

      {/* Little Strawberry Lower Left */}
      <motion.div
        className="absolute bottom-[18%] left-[12%] hidden md:block"
        animate={{
          y: [0, -15, 0],
          rotate: [0, 15, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        <Strawberry size={70} className="opacity-60" />
      </motion.div>

      {/* Orange Slice Bottom Right */}
      <motion.div
        className="absolute bottom-[10%] right-[12%] hidden lg:block"
        animate={{
          y: [0, -22, 0],
          rotate: [0, -25, 20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.8,
        }}
      >
        <OrangeSlice size={110} className="opacity-70" />
      </motion.div>
    </div>
  );
};
