import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/avator.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Lanseapiech",
	bio: "我是和平精英高手",
	links: [

	],
});
