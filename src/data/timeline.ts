/**
 * 时间线页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/timelineConfig.ts 控制。
 */
import type { TimelineItem } from "@/types/timelineConfig";

export const timelineData: TimelineItem[] = [
	{
		title: "腾讯IEG市场与用户研究部│电访用户研究支持 ",
		date: "2026.07-2026.10",
		category: "project",
		subtitle: "《和平精英》玩家深度电访",
		location: "广东 广州",
		description:
			"独立执行《和平精英》玩家深度电访 40+ 场，按活跃度与付费层级构建样本配额，覆盖休闲、中度、核心玩家与零付费、小 R、大 R 等分层，保证各层级样本可比、结论可外推",
		highlights: [
			"严格按研究团队提供的标准化提纲执行访谈",
			"完整走通“访谈执行→信息整理→摘要输出”链路",
		],
		tags: ["和平精英", "用户研究"],
		icon: "material-symbols:work-rounded",
	},
	{
		title: "三创赛AI电商实战赛│核心成员|国家一等奖",
		date: "2026.01-2026.08 ",
		category: "project",
		subtitle: "第十六届全国大学生三创赛国赛[AI 电商实战赛]一等奖",
		description:
			"作为核心成员跟进该项目，主要负责数据收集分析、工作流搭建等板块",
		highlights: ["主导 500+ 份问卷调研全流程", "完成工作流的场景化测试与迭代"],
		tags: ["工作流", "电商", "AI"],
		icon: "material-symbols:code-rounded",
	},
	{
		title: "电子商务",
		date: "2023.09 – 2027.06",
		category: "education",
		subtitle: "广东财经大学",
		location: "广东 广州",
		description:
			"主修课程:市场调研与分析、Python 数据分析、消费者行为分析与建模",
		highlights: ["CET6：455", "综合绩点3.77，专业排名第五"],
		tags: ["用户研究", "Python", "数据分析"],
		icon: "material-symbols:school-rounded",
	},
	{
		title: "《王者荣耀》高校电竞赛事 ",
		date: "2024.11-2025.06",
		category: "project",
		subtitle: "赛事统筹",
		description:
			"承接 iQOO 品牌高校赛--广东财经大学校赛的方案落地，独立负责宣发、社群运营",
		highlights: [
			"对接品牌方、校方与选手三方，保障赛事按期落地并完成赛后复盘",
			"从 0 搭建“公众号+社群+私域”三级推广矩阵",
		],
		tags: ["赛事统筹", "企业对接", "项目运营"],
		icon: "material-symbols:code-rounded",
	},
];

/** 获取所有时间线数据列表 */
export function getTimelineList(): TimelineItem[] {
	return timelineData;
}
