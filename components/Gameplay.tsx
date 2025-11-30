import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVER_CONFIG } from '../constants';
import { cn } from '../utils';

export const Gameplay = () => {
  return (
    <section id="gameplay" className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center">
            <motion.span 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-purple-500 font-mono tracking-widest text-sm uppercase mb-4 block"
            >
                Deep Dive
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold"
            >
                深度玩法解析
            </motion.h2>
        </div>

        <div className="flex flex-col gap-32">
          {SERVER_CONFIG.gameplayDetails.map((detail, idx) => (
            <GameplayItem key={idx} detail={detail} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

const GameplayItem = ({ detail, index }: { detail: typeof SERVER_CONFIG.gameplayDetails[0], index: number }) => {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [isEven ? 100 : -100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div ref={ref} className={cn("flex flex-col gap-12 items-center", isEven ? "md:flex-row" : "md:flex-row-reverse")}>
      
      {/* Image Side */}
      <motion.div 
        style={{ opacity, scale: scrollYProgress }}
        className="w-full md:w-1/2"
      >
        <div className="relative group rounded-3xl overflow-hidden aspect-[4/3] border border-white/10">
          <div className="absolute inset-0 bg-purple-500/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700 z-10" />
          <img 
            src={detail.image} 
            alt={detail.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
      </motion.div>

      {/* Text Side */}
      <motion.div 
        style={{ x, opacity }}
        className="w-full md:w-1/2 md:px-12"
      >
        <h3 className="text-sm font-mono text-purple-400 mb-2">{detail.subtitle}</h3>
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
          {detail.title}
        </h2>
        <p className="text-lg text-gray-400 leading-relaxed">
          {detail.description}
        </p>
      </motion.div>

    </div>
  );
};