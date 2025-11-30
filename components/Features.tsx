import React from 'react';
import { motion, Variants } from 'framer-motion';
import { SERVER_CONFIG } from '../constants';
import { Icon } from './Icon';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export const Features = () => {
  return (
    <section id="features" className="py-32 relative bg-[#050505]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            特色玩法 <span className="text-purple-500">.</span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="h-1 w-24 bg-gradient-to-r from-purple-500 to-blue-500 origin-left"
          />
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVER_CONFIG.features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-white/5 group-hover:scale-110 transition-transform duration-500">
                <Icon name={feature.icon} className="w-8 h-8 text-purple-400 group-hover:text-purple-300" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
              
              {/* Decorative gradient blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};