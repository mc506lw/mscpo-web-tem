import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SERVER_CONFIG } from '../constants';

export const Gallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-65%"]);

  return (
    <section id="gallery" ref={targetRef} className="h-[300vh] bg-[#050505] relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        
        <div className="absolute top-12 left-6 md:left-20 z-20 mix-blend-difference">
           <h2 className="text-5xl md:text-8xl font-display font-black text-white/90">
             捕捉精彩 <br/> <span className="text-stroke text-transparent stroke-white stroke-1">瞬间</span>
           </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-10 pl-[20vw]">
          {SERVER_CONFIG.gallery.map((img, idx) => (
            <div 
              key={idx}
              className="relative h-[60vh] w-[80vw] md:w-[40vw] flex-shrink-0 rounded-3xl overflow-hidden group"
            >
              <img 
                src={img} 
                alt={`Gallery ${idx}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
          {/* Add a buffer spacer at end */}
          <div className="w-[10vw] flex-shrink-0" />
        </motion.div>
      </div>
    </section>
  );
};
