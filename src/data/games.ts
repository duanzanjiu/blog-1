/**
 * 游戏展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/gamesConfig.ts 控制。
 *
 * 封面支持三种写法：
 * - src/assets 相对路径（如本文件所用，走 Astro 图片管线自动优化为 webp/avif）；
 * - /public 绝对路径（如 "/assets/games/xxx.webp"，原样输出）；
 * - 远程 URL（https://…）。
 *
 * 注：以下为演示条目——评分 / 时长 / 状态是占位数值，请按自己的实际情况调整；
 * 封面取自各游戏官方商店页或官网主视觉。
 */
import type { GameItem } from "@/types/gamesConfig";

export const gamesData: GameItem[] = [
	{
		id: "It Takes Two",
		name: "双人成行",
		developer: "Hazelight Studios",
		category: "casual",
		status: "playing",
		cover: "assets/games/It Takes Two.jpg",
		icon: "material-symbols:extension-outline-rounded",
		rating: 4.8,
		hours: 86,
		platform: "PC",
		year: "2021",
		tags: ["casual"],
		description: "其实也可以单人硬行",
		link: "https://www.ea.com/games/it-takes-two",
		featured: true,
	},
	{
		id: "Hundred Scenes of Jiangnan",
		name: "江南百景图",
		developer: "椰岛游戏",
		category: "sandbox",
		status: "playing",
		cover: "assets/games/Hundred Scenes of Jiangnan.jpg",
		icon: "material-symbols:widgets-rounded",
		rating: 5,
		hours: 521,
		platform: "PE",
		year: "2020",
		tags: ["Sandbox", "Building"],
		description: "知府启动",
		link: "https://www.coconut.is/game/jiangnan",
	},
	{
		id: "Game for peace",
		name: "和平精英",
		developer: "光子工作室",
		category: "action",
		status: "playing",
		cover: "assets/games/game for peace.jpg",
		icon: "material-symbols:swords-outline-rounded",
		rating: 4.5,
		hours: 321,
		platform: "PE",
		year: "2019",
		tags: ["Survival"],
		description: "大吉大利，今晚吃鸡",
		link: "https://gp.qq.com/",
	},
	{
		id: "LifeAfter",
		name: "明日之后",
		developer: "网易游戏",
		category: "action",
		status: "playing",
		cover: "assets/games/life tomorrow.jpg",
		icon: "material-symbols:swords-outline-rounded",
		rating: 4.6,
		hours: 226,
		platform: "PE",
		year: "2018",
		tags: ["Survival", "Building"],
		description: "丧尸大舞台，有梦你就来",
		link: "https://mrzh.163.com/",
	},
];
