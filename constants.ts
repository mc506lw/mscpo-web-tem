import { ServerConfig } from './types';

// =================================================================
// 配置文件 (CONFIGURATION)
// 修改此处内容即可改变网站显示
// =================================================================

export const SERVER_CONFIG: ServerConfig = {
  // 服务器基础信息
  name: "ETHEREAL | 虚空之境",
  // 使用 hypixel 作为演示，以展示 MOTD 功能。实际使用请改为您的服务器 IP
  ip: "mc.hypixel.net", 
  version: "1.20.x - 1.21.x",
  type: "开放世界 MMORPG",
  description: "一个超越想象的沉浸式生存体验",

  // 首页大图区域 (Hero Section)
  hero: {
    headline: "重塑你的方块世界",
    subheadline: "加入数万名玩家的史诗冒险。在这里，每一块方块都蕴含魔力，每一次呼吸都是新的传奇。",
    backgroundImage: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop", 
  },

  // 特色玩法概览 (Features Grid)
  features: [
    {
      title: "史诗副本",
      description: "挑战精心设计的数十个独特副本，击败强大的 Boss 赢取传说级装备。",
      icon: "Sword"
    },
    {
      title: "公平经济",
      description: "完全由玩家主导的市场经济系统，拒绝通货膨胀，每一块金币都物有所值。",
      icon: "Coins"
    },
    {
      title: "领地保护",
      description: "使用金铲子轻松圈地，保护你的建筑免受破坏，与好友共享家园。",
      icon: "ShieldCheck"
    },
    {
      title: "全球争霸",
      description: "建立你的公会，参与每周的领土争夺战，成为服务器的最强势力。",
      icon: "Globe"
    }
  ],

  // 深度玩法介绍 (Detailed Gameplay)
  gameplayDetails: [
    {
      title: "虚空探索系统",
      subtitle: "EXPLORATION",
      description: "告别枯燥的跑图。我们的虚空探索系统允许玩家驾驶飞艇穿梭于破碎的浮空岛屿之间。每个岛屿都有独特的生物群系、隐藏的宝藏和致命的陷阱。你需要升级你的飞艇引擎，强化船体，才能到达更深层的领域。",
      image: "https://images.unsplash.com/photo-1627850604058-52e40de1b847?q=80&w=2073&auto=format&fit=crop"
    },
    {
      title: "职业与天赋",
      subtitle: "CLASSES & TALENTS",
      description: "摆脱传统职业的束缚。你可以同时是一名挥舞巨剑的战士，也是一位精通炼金术的法师。独特的天赋树系统提供超过 500 种组合，让你打造独一无二的战斗风格。随时洗点，适应不同的战场需求。",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
    }
  ],

  // 画廊图片 (Gallery)
  gallery: [
    "https://images.unsplash.com/photo-1599587428410-d02166e44b93?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1587573089734-09cb69c0f2b4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1627850604058-52e40de1b847?q=80&w=2073&auto=format&fit=crop",
  ],

  // 管理团队 (Staff)
  staff: [
    {
      name: "Notch",
      role: "服主",
      description: "世界的缔造者，负责服务器整体架构设计与核心玩法开发。致力于打造最完美的方块世界。",
      avatar: "https://visage.surgeplay.com/full/832/Notch" 
    },
    {
      name: "Jeb_",
      role: "首席架构师",
      description: "红石科技与自动化系统的专家。维护服务器的生态平衡，确保每一次更新都带来惊喜。",
      avatar: "https://visage.surgeplay.com/full/832/Jeb_"
    },
    {
      name: "Dinnerbone",
      role: "技术总监",
      description: "底层代码优化大师，消除一切 Bug 的存在。为服务器的流畅运行保驾护航。",
      avatar: "https://visage.surgeplay.com/full/832/Dinnerbone"
    },
    {
      name: "Alex",
      role: "社区管理员",
      description: "倾听玩家的声音，举办精彩的社区活动。她是连接管理团队与玩家的桥梁。",
      avatar: "https://visage.surgeplay.com/full/832/Alex"
    }
  ],

  // 联系方式 (Contact)
  contact: [
    {
      type: 'qq',
      label: "加入官方 QQ 群",
      value: "12345678", // 群号或链接
      primary: true
    }
  ],

  // 底部信息 (Footer)
  footer: {
    copyright: "© 2024 Ethereal Realms. Not affiliated with Mojang AB."
  }
};