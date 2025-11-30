import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Copy, Check } from 'lucide-react';
import { SERVER_CONFIG } from '../constants';
import { cn } from '../utils';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_CONFIG.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const menuItems = [
    { label: '特色', id: 'features' },
    { label: '玩法', id: 'gameplay' }, // Added Gameplay
    { label: '画廊', id: 'gallery' },
    { label: '团队', id: 'staff' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-black/60 backdrop-blur-xl border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-md shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
            <span className="font-display font-bold text-xl tracking-wider text-white">
                {SERVER_CONFIG.name.split('|')[0]}
            </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
            </a>
          ))}
          
          <button
            onClick={copyIp}
            className="group relative px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center gap-2 transition-all active:scale-95"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-mono font-bold text-green-400">
                {copied ? "已复制!" : SERVER_CONFIG.ip}
            </span>
            {copied ? <Check size={14} className="text-green-400"/> : <Copy size={14} className="text-gray-400 group-hover:text-white transition-colors"/>}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
            {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
            >
                <div className="flex flex-col p-6 gap-4">
                    {menuItems.map((item) => (
                        <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-lg font-medium text-gray-300 hover:text-white"
                        >
                        {item.label}
                        </a>
                    ))}
                    <button
                        onClick={copyIp}
                        className="w-full mt-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold text-white shadow-lg shadow-purple-900/20"
                    >
                        {copied ? "IP 已复制" : "复制 IP 地址"}
                    </button>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};