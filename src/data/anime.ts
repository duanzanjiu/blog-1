/**
 * 追剧收藏数据（本地数据源）。
 * 用于追剧页：src/pages/anime.astro → organisms/AnimeSection → molecules/AnimeCard。
 *
 * 添加条目：在 animeData 中追加一项即可，状态筛选 chips 与计数自动生成。
 * - cover 省略时卡片显示主题色渐变占位（补图前不破版）；
 * - link 指向豆瓣剧集介绍页，省略时封面不可点；rating 为 0-10 评分；
 * - progress 是结构化观剧进度（已看集数 / 本季集数），watching 状态在卡片上渲染进度条。
 * JSON 数据源（外部收藏服务拉取）见 utils/anime-data.ts 的 AnimeSource 分发。
 */

import type { AnimeIdentity } from "../types/animeConfig.ts";

/** 收藏状态（沿用 Bangumi 领域通行五态） */
export type AnimeStatus =
	| "watching"
	| "completed"
	| "planned"
	| "onHold"
	| "dropped";

export interface AnimeItem {
	/** 中文剧名（主标题） */
	title: string;
	/** 原始剧名（英文原名，第二行小字） */
	originalTitle?: string;
	/** 封面图地址（相对 /public 或绝对 URL）；省略 = 渐变占位 */
	cover?: string;
	/** 条目外链（豆瓣剧集介绍页）；省略则封面不可点 */
	link?: string;
	status: AnimeStatus;
	/** 评分 0-10（取自豆瓣评分） */
	rating: number;
	/** 观剧进度：已看 / 总集数（未知时可选省略） */
	progress?: { watched: number; total: number };
	/** 一句话感想 */
	description?: string;
	/** 首播年份（展示用） */
	year: string;
	/** 出品方 / 播出平台 */
	studio?: string;
	/** 题材标签 */
	genres: string[];
	/** 观看时间段（年-月） */
	period?: { start: string; end: string };
	/** 条目来源身份标识（可选，用于跨源去重与归档） */
	identity?: AnimeIdentity;
}

export const animeData: AnimeItem[] = [
	{
		title: "识骨寻踪",
		originalTitle: "Bones",
		cover: "/assets/anime/bones.webp",
		link: "https://movie.douban.com/subject/1427819/",
		status: "completed",
		rating: 8.7,
		progress: { watched: 22, total: 22 },
		description: "骨头不会说谎，法医人类学搭档破案",
		year: "2005",
		studio: "FOX",
		genres: ["犯罪", "悬疑", "剧情"],
		period: { start: "2005-09", end: "2006-05" },
	},
	{
		title: "神探夏洛克",
		originalTitle: "Sherlock",
		cover: "/assets/anime/sherlock.webp",
		link: "https://movie.douban.com/subject/3986493/",
		status: "completed",
		rating: 9.5,
		progress: { watched: 3, total: 3 },
		description: "把福尔摩斯搬进 21 世纪伦敦",
		year: "2010",
		studio: "BBC One",
		genres: ["悬疑", "犯罪", "剧情"],
		period: { start: "2010-07", end: "2010-08" },
	},
	{
		title: "神烦警探",
		originalTitle: "Brooklyn Nine-Nine",
		cover: "/assets/anime/brooklyn-nine-nine.webp",
		link: "https://movie.douban.com/subject/24532463/",
		status: "watching",
		rating: 9.1,
		progress: { watched: 12, total: 22 },
		description: "布鲁克林 99 分局的沙雕日常",
		year: "2013",
		studio: "FOX",
		genres: ["喜剧", "犯罪"],
		period: { start: "2013-09", end: "2014-03" },
	},
	{
		title: "摩登家庭",
		originalTitle: "Modern Family",
		cover: "/assets/anime/modern-family.webp",
		link: "https://movie.douban.com/subject/3754382/",
		status: "watching",
		rating: 9.5,
		progress: { watched: 8, total: 24 },
		description: "三个家庭，一箩筐鸡飞狗跳的温柔",
		year: "2009",
		studio: "ABC",
		genres: ["喜剧", "家庭"],
		period: { start: "2009-09", end: "2010-05" },
	},
	{
		title: "绝命毒师",
		originalTitle: "Breaking Bad",
		cover: "/assets/anime/breaking-bad.webp",
		link: "https://movie.douban.com/subject/2373195/",
		status: "completed",
		rating: 9.2,
		progress: { watched: 7, total: 7 },
		description: "化学老师走向深渊的第一步",
		year: "2008",
		studio: "AMC",
		genres: ["犯罪", "剧情", "惊悚"],
		period: { start: "2008-01", end: "2008-03" },
	},
	{
		title: "权力的游戏 第一季",
		originalTitle: "Game of Thrones",
		cover: "/assets/anime/game-of-thrones.webp",
		link: "https://movie.douban.com/subject/3016187/",
		status: "planned",
		rating: 9.5,
		progress: { watched: 0, total: 10 },
		description: "凛冬将至，七国开场",
		year: "2011",
		studio: "HBO",
		genres: ["奇幻", "冒险", "剧情"],
		period: { start: "2011-04", end: "2011-06" },
	},
	{
		title: "老练律师 第一季",
		originalTitle: "Matlock",
		cover: "/assets/anime/matlock.webp",
		link: "https://movie.douban.com/subject/36402104/",
		status: "planned",
		rating: 8.6,
		progress: { watched: 0, total: 19 },
		description: "七旬新人律师，笑容背后另有打算",
		year: "2024",
		studio: "CBS",
		genres: ["剧情", "犯罪", "律政"],
		period: { start: "2024-09", end: "2025-05" },
	},
];
