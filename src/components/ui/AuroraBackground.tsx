import React from 'react';
import { motion } from 'framer-motion';

export const AuroraBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Orange Citrus Blob */}
      <motion.div
        className="absolute w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-orangeCitrus/15 aurora-blob"
        style={{ top: '10%', left: '-10%' }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -50, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Tropical Green Blob */}
      <motion.div
        className="absolute w-[400px] md:w-[700px] h-[400px] md:h-[700px] rounded-full bg-greenTropical/20 aurora-blob"
        style={{ top: '40%', right: '-15%' }}
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 60, -40, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Warm Golden Citrus Blob */}
      <motion.div
        className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-orangeGold/10 aurora-blob"
        style={{ bottom: '5%', left: '20%' }}
        animate={{
          x: [0, 60, -30, 0],
          y: [0, 40, -50, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

    </div>
  );
};
