import React from 'react';
import { SERVER_CONFIG } from '../constants';
import { MessageCircle, Disc, Globe, ArrowRight } from 'lucide-react';

export const Footer = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'discord': return <Disc size={20} />;
      case 'qq': return <MessageCircle size={20} />;
      default: return <Globe size={20} />;
    }
  };

  return (
    <footer className="py-20 border-t border-white/10 bg-black relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          
          {/* Brand Info */}
          <div className="max-w-md">
            <h4 className="text-3xl font-display font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/50">
                {SERVER_CONFIG.name}
            </h4>
            <p className="text-gray-500 leading-relaxed mb-8">
              {SERVER_CONFIG.description}
            </p>
            <div className="flex gap-2 text-sm font-mono text-gray-600">
                <span>VER {SERVER_CONFIG.version}</span>
                <span>•</span>
                <span className="uppercase">{SERVER_CONFIG.type}</span>
            </div>
          </div>

          {/* Social / Contact Links */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
             {SERVER_CONFIG.contact.map((item, idx) => (
                 <a 
                    key={idx}
                    href={item.type === 'qq' ? `mqqapi://card/show_pslcard?src_type=internal&version=1&uin=${item.value}&card_type=group&source=qrcode` : item.value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 group ${
                        item.primary 
                        ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]' 
                        : 'bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white'
                    }`}
                 >
                    {getIcon(item.type)}
                    <div className="flex flex-col text-left">
                        <span className="font-bold leading-none mb-1">{item.label}</span>
                        <span className="text-xs opacity-70 font-mono">
                            {item.type === 'qq' ? `群号: ${item.value}` : '点击访问'}
                        </span>
                    </div>
                    {item.primary && <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                 </a>
             ))}
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <p>{SERVER_CONFIG.footer.copyright}</p>
            <span className="hidden md:block text-white/10">|</span>
            <a 
              href="https://www.mscpo.top/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-2"
            >
              本服务器已认证成为MSCPO组织成员服
            </a>
          </div>
          <p className="opacity-50 hover:opacity-100 transition-opacity">Designed for Minecraft Communities</p>
        </div>
      </div>
    </footer>
  );
};