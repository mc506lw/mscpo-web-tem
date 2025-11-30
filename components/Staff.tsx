import React from 'react';
import { motion } from 'framer-motion';
import { SERVER_CONFIG } from '../constants';

export const Staff = () => {
  return (
    <section id="staff" className="py-32 bg-[#050505] relative overflow-hidden">
       {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            团队成员
          </motion.h2>
          <p className="text-gray-400">致力于为您提供最佳游戏体验</p>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {SERVER_CONFIG.staff.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
                <img 
                  src={member.avatar} 
                  alt={member.name} 
                  className="relative w-full h-full rounded-full object-cover border-2 border-white/10 group-hover:border-white/30 transition-colors"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <span className="text-sm px-3 py-1 rounded-full bg-white/5 text-purple-300 font-medium border border-white/5">
                {member.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
