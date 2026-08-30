export const brand = {
  name: '必凡娱乐',
  nameEn: 'BeeFun Games',
  legalName: '深圳市必凡娱乐科技有限公司',
  mark: '凡',
  logo: '/favicon.png',
  tagline: 'You Will Be Fun IN BeeFun',
  theme: '#7bd17f',
  icp: '粤ICP备20056888号',
  police: '',
  email: 'campus@beefun.com.cn',
  contactEmail: 'pjoe@beefungames.com',
  phone: '13380363643',
  address: '深圳市前海深港合作区南山街道梦海大道5289号中粮亚太大厦1405',
  copyrightYear: 2026,
}

export const navItems = [
  { label: '首页', to: '/' },
  { label: '必凡乐活', to: '/life' },
] as const

export const hero = {
  video: '/videos/hero.mp4',
  poster: '/videos/hero-poster.jpg',
  slogan: 'Make Casual Games Part Of Your Life',
}

export const recruitTypes = [
  {
    key: 'social',
    to: '/social',
    title: '社会招聘',
    en: 'Social Hiring',
    desc: '欢迎有经验的创作者加入，一起打磨长线产品。',
    icon: 'briefcase',
  },
  {
    key: 'elite',
    to: '/elite',
    title: 'Elite Program+',
    en: 'Campus Elite',
    desc: '面向顶尖校园人才的加速培养计划。',
    icon: 'spark',
  },
  {
    key: 'intern',
    to: '/intern',
    title: '实习生招聘',
    en: 'Internship',
    desc: '在真实项目里成长，和主程、主策坐在一起做游戏。',
    icon: 'book',
  },
  {
    key: 'campus',
    to: '/campus',
    title: '应届生校招',
    en: 'Graduate',
    desc: '从校园直接进入产品组，参与从 0 到 1 的创作。',
    icon: 'cap',
  },
] as const

export const aboutEn = 'About BeeFun Games'

export const aboutParagraphs = [
  '深圳市必凡娱乐科技有限公司成立于 2020 年 4 月，注册于深圳软件基地，是一家年轻、充满活力的互联网公司。',
  '我们专注微信小游戏的自主研发与发行，以 Merge（合成融合）为核心赛道，坚持自研自发。员工平均年龄 25 岁，核心成员来自腾讯、网易等公司，有丰富的研发与运营经验。',
  '团队理念是「让自己快乐，让团队快乐，让玩家快乐」。目前在深圳、北京办公，欢迎有同样热爱的人加入 BeeFun。',
]

export const offices = [
  { id: 'sz', city: '深圳', country: 'CHN', x: 72.4, y: 51.2 },
  { id: 'bj', city: '北京', country: 'CHN', x: 72.2, y: 38.5 },
]

export const chinaCities = ['深圳', '北京']

export const products = [
  {
    id: 'base-defense',
    name: '家园攻防战',
    cover: '/images/game-rpg.svg',
    summary: '主打三分钟自走棋的休闲竞技。组合不同英雄构建阵容，与其他玩家对战。',
    metric: '官网主打产品',
  },
  {
    id: 'mod-battle',
    name: '改装大作战',
    cover: '/images/game-truck.svg',
    summary: '微信小游戏人气产品。上线后迅速进入畅销前列，是公司在 Merge 赛道的标杆之作。',
    metric: '微信小游戏标杆产品',
  },
  {
    id: 'manor-merge',
    name: '庄园合合',
    cover: '/images/game-farm.svg',
    summary: '全球首款 Merge 产品《Merge Mansion》的国内版本，获腾讯互娱与 MetaCore 授权。',
    metric: '官方正版授权',
  },
  {
    id: 'back-to-life',
    name: '向往的生活',
    cover: '/images/game-food.svg',
    summary: '芒果 TV 官方授权的 Merge 模拟经营。还原综艺田园氛围，在合成中慢慢过日子。',
    metric: '芒果 TV 正版授权',
  },
  {
    id: 'pocket-pets',
    name: '口袋宠物世界',
    cover: '/images/game-kingdom.svg',
    summary: '公司首款 Merge 产品，为后续合成品类的研发与运营打下基础。',
    metric: 'Merge 品类起点',
  },
]

export const workPhotos = [
  { src: '/images/life-office.svg', alt: '明亮的开放办公区' },
  { src: '/images/life-team.svg', alt: '团队讨论' },
  { src: '/images/life-meet.svg', alt: '会议室协作' },
  { src: '/images/life-desk.svg', alt: '工位一角' },
]

export const clubs = [
  { name: '篮球俱乐部', emoji: '🏀' },
  { name: '骑行俱乐部', emoji: '🚴' },
  { name: '足球俱乐部', emoji: '⚽' },
  { name: '爱宠俱乐部', emoji: '🐾' },
  { name: '机车俱乐部', emoji: '🏍️' },
  { name: '二次元俱乐部', emoji: '🎮' },
  { name: '羽毛球俱乐部', emoji: '🏸' },
  { name: '摄影俱乐部', emoji: '📷' },
  { name: '滑雪俱乐部', emoji: '🎿' },
  { name: '舞蹈俱乐部', emoji: '💃' },
  { name: '阅读俱乐部', emoji: '📚' },
  { name: '更多有趣等你来玩', emoji: '✨' },
]

export type ChannelKey = 'social' | 'campus' | 'intern' | 'elite'

export const channels: Record<
  ChannelKey,
  {
    title: string
    en: string
    slogan: string
    sloganEn: string
    hero: string
    intro: string[]
    cities: { name: string; hint: string }[]
  }
> = {
  social: {
    title: '社会招聘',
    en: 'Social Hiring',
    slogan: '虚位以待 职等你来',
    sloganEn: 'Welcome to join us',
    hero: '/images/channel-social.svg',
    intro: [
      '我们寻找愿意把小游戏做成长期产品的人：策划、程序、美术、运营都在扩招。',
      '社招同事会直接进入项目组，和上线产品共担数据与口碑。第一期职位投递通道即将开放。',
    ],
    cities: [
      { name: '深圳市', hint: '总部与研发' },
      { name: '北京市', hint: '研发与职能' },
    ],
  },
  elite: {
    title: 'Elite Program+',
    en: 'Campus Elite',
    slogan: '把热爱做成可被验证的作品',
    sloganEn: 'Create with the best',
    hero: '/images/channel-elite.svg',
    intro: [
      'Elite Program+ 面向对游戏创作极度热爱的校园人才，提供导师制、轮岗和独立负责模块的机会。',
      '我们更看重作品、判断力和把事情做完的能力，而不是简历上的头衔。',
    ],
    cities: [
      { name: '深圳', hint: '产品与技术' },
      { name: '北京', hint: '研发与职能' },
    ],
  },
  campus: {
    title: '应届生校招',
    en: 'Graduate Program',
    slogan: '从校园到上线，中间只有一个版本',
    sloganEn: 'Start where the game ships',
    hero: '/images/channel-campus.svg',
    intro: [
      '应届生会进入真实项目：数值、系统、客户端、服务端、商业化都有开放方向。',
      '入职后有导师和版本节奏，帮你把学校里的能力接到可上线的产品上。',
    ],
    cities: [
      { name: '深圳', hint: '综合岗位' },
      { name: '北京', hint: '研发与职能' },
    ],
  },
  intern: {
    title: '实习生计划',
    en: 'Internship',
    slogan: '来一起做一款会上线的游戏',
    sloganEn: 'Ship something real',
    hero: '/images/channel-intern.svg',
    intro: [
      '实习不是打杂。你会被编进版本计划，提交可被玩家看到的内容或功能。',
      '表现优秀可转正，和应届校招通道衔接。投递通道即将开放。',
    ],
    cities: [
      { name: '深圳', hint: '研发 / 职能' },
      { name: '北京', hint: '研发 / 职能' },
    ],
  },
}

export const lifeIntro = [
  '必凡娱乐的同事平均年龄 25 岁，是一群热爱工作也热爱生活的年轻人。',
  '兴趣俱乐部由同事自发组织。正如品牌图腾「蜜蜂」所寓意的：一起努力，也一起分享成长的甜蜜。',
]
