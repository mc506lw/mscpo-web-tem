import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Copy, Check, Wifi, WifiOff, Loader2 } from 'lucide-react';
import { SERVER_CONFIG } from '../constants';
import { cn } from '../utils';

interface ServerStatus {
  online: boolean;
  players: number;
  maxPlayers: number;
  version: string;
  loading: boolean;
}

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleImg = useTransform(scrollYProgress, [0, 1], [1.1, 1.5]);

  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: 0,
    maxPlayers: 0,
    version: SERVER_CONFIG.version,
    loading: true,
  });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://motd.minebbs.com/api/status?ip=${SERVER_CONFIG.ip}`);
        const data = await response.json();
        
        if (data.status === 'online') {
          setStatus({
            online: true,
            players: data.players.online,
            maxPlayers: data.players.max,
            version: data.version || SERVER_CONFIG.version,
            loading: false,
          });
        } else {
          setStatus(prev => ({ ...prev, online: false, loading: false }));
        }
      } catch (error) {
        console.error("Failed to fetch MOTD", error);
        setStatus(prev => ({ ...prev, online: false, loading: false }));
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Poll every 30s
    return () => clearInterval(interval);
  }, []);

  const copyIp = () => {
    navigator.clipboard.writeText(SERVER_CONFIG.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ scale: scaleImg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#050505] z-10" />
        <img 
            src={SERVER_CONFIG.hero.backgroundImage} 
            alt="Server Background" 
            className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Grid Overlay for texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-[5] pointer-events-none"></div>

      {/* Content */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-20 container mx-auto px-6 text-center flex flex-col items-center"
      >
        {/* Type & Version Pill */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex gap-3 mb-8"
        >
             <span className="px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium tracking-wide backdrop-blur-sm uppercase">
                {SERVER_CONFIG.type}
            </span>
            <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium tracking-wide backdrop-blur-sm">
                VER {SERVER_CONFIG.version}
            </span>
        </motion.div>
       
        <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight mb-8 drop-shadow-2xl"
        >
          {SERVER_CONFIG.hero.headline}
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {SERVER_CONFIG.hero.subheadline}
        </motion.p>

        {/* Action Buttons & Status */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center gap-6"
        >
            <button 
                onClick={copyIp}
                className="group relative flex items-center gap-3 px-8 py-4 bg-white text-black rounded-lg font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] active:scale-95"
            >
                {copied ? <Check className="w-5 h-5"/> : <Copy className="w-5 h-5"/>}
                <span>{copied ? "已复制 IP" : "复制服务器 IP"}</span>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    点击复制 {SERVER_CONFIG.ip}
                </span>
            </button>

            {/* Live Status Indicator */}
            <div className="flex mt-4 items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/5 backdrop-blur-md">
                {status.loading ? (
                    <Loader2 className="w-4 h-4 text-gray-400 animate-spin" />
                ) : status.online ? (
                    <>
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-sm font-mono text-green-400 font-bold">
                            {status.players.toLocaleString()} 玩家在线
                        </span>
                    </>
                ) : (
                    <>
                        <WifiOff className="w-4 h-4 text-red-400" />
                        <span className="text-sm font-medium text-red-400">离线 / 维护中</span>
                    </>
                )}
            </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
};