import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { SERVER_CONFIG } from '../constants';
import { cn } from '../utils';

export const Staff = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["20%", "-90%"]);
  
  // Smooth out the scroll movement
  const smoothX = useSpring(x, { stiffness: 100, damping: 20, mass: 0.5 });

  return (
    <section 
      id="staff" 
      ref={targetRef} 
      className="h-[400vh] relative bg-[#050505]"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center perspective-1000">
        
        {/* Ambient Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#050505] to-[#050505] z-0 pointer-events-none" />
        <div className="absolute inset-0 opacity-20 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>
        
        {/* Header - Fixed position */}
        <div className="absolute top-12 left-0 right-0 text-center z-20 pointer-events-none">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white mb-2">
            传奇 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">殿堂</span>
          </h2>
          <p className="text-gray-500 font-mono text-sm tracking-widest uppercase">
            管理团队
          </p>
        </div>

        {/* 3D Track */}
        <div className="relative z-10 w-full h-[70vh] flex items-center">
            <motion.div 
                style={{ x: smoothX }}
                className="flex items-center gap-12 md:gap-32 pl-[30vw]"
            >
            {SERVER_CONFIG.staff.map((member, idx) => (
                <StaffCard key={idx} member={member} index={idx} />
            ))}
            </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.9, 1], [1, 0]) }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 font-mono text-xs z-20 animate-pulse"
        >
            SCROLL TO EXPLORE
        </motion.div>
      </div>
    </section>
  );
};

const StaffCard = ({ member, index }: { member: typeof SERVER_CONFIG.staff[0], index: number }) => {
    return (
        <div className="group relative w-[320px] h-[500px] md:w-[380px] md:h-[600px] flex-shrink-0 perspective-1000">
            <motion.div 
                className={cn(
                    "relative w-full h-full rounded-3xl transition-all duration-700 ease-out preserve-3d transform-gpu overflow-hidden",
                    "border border-white/5 bg-[#0a0a0a]", 
                    "group-hover:scale-105 group-hover:-translate-y-4 group-hover:rotate-y-6 group-hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.8)]",
                    member.role.includes("服主") ? "group-hover:border-yellow-500/40" : "group-hover:border-purple-500/40"
                )}
            >
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/80 z-0 pointer-events-none" />

                {/* Role Badge */}
                <div className={cn(
                    "absolute top-6 right-6 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border backdrop-blur-md z-30",
                    member.role.includes("服主") 
                        ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400" 
                        : "bg-purple-500/10 border-purple-500/20 text-purple-400"
                )}>
                    {member.role}
                </div>

                {/* Character Image */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pt-10 pb-20 group-hover:scale-110 transition-transform duration-700">
                     {/* Shadow under feet */}
                    <div className="absolute bottom-[20%] w-32 h-4 bg-black/60 blur-xl rounded-full transform scale-x-150" />
                    
                    <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="h-full w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    />
                </div>

                {/* Text Content - Anchored to bottom with gradient background */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pt-12 bg-gradient-to-t from-black via-black/95 to-transparent">
                    <h3 className="text-3xl font-display font-bold text-white mb-3 tracking-wide drop-shadow-lg">
                        {member.name}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed line-clamp-3 font-medium">
                        {member.description}
                    </p>
                </div>

            </motion.div>
        </div>
    );
};