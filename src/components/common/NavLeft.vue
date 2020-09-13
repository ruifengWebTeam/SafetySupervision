<template>
	<div>
		<div class='navBox'>
			<Menu
				width="180"
				ref="side_menu"
				:theme="bgColor"
				on-select='handleOpen'
				v-for="(menuItem, menuIndex) in menuList"
				:key="menuIndex"
				:active-name="$route.name"
			>

				<!-- 展开没有子菜单 -->
				<MenuItem
					style="color:#fff; text-align: left;"
					v-if="!menuItem.children || menuItem.children.length==0"
					:key="menuIndex"
					:name="menuItem.to"
					:to="menuItem.to"
				>
				<Icon :type="menuItem.icon" />
				<span>{{ menuItem.name }}</span>

				</MenuItem>

				<!-- 展开有子菜单 -->
				<Submenu
					v-else
					:name="menuIndex"
				>
					<template
						slot="title"
						style="color:#fff;    text-align: left;"
					>
						<Icon :type="menuItem.icon" />
						<span>{{menuItem.name}}</span>
					</template>
					<MenuItem
						style=" color:#ccc;background: rgba(0, 0, 0, 0.5);"
						v-for="(item, index) in menuItem.children"
						:key="index"
						:name="item.to"
						:to="item.to"
					>{{item.name}}</MenuItem>
				</Submenu>
			</Menu>

		</div>

	</div>
</template>

<script>
export default {
	props: ["theme"],

	components: {},

	data() {
		return {
			bgColor: "#000",
			menuList: [
				{
					name: "风险监测",
					to: "riskJc",
					icon: "ios-archive-outline"
				},
				{
					name: "风险分布",
					to: "riskFb",
					icon: "ios-archive-outline"
				},
				{
					name: "危险源管理",
					to: "dangerousSources",
					icon: "ios-archive-outline"
				},
				{
					name: "化学企业数据集成",
					to: "DataOfChemicalCompany",
					icon: "ios-archive-outline"
				},
				{
					name: "区域风险一张图",
					to: "APictureOfAreaRisk",
					icon: "ios-create-outline"
				},

				{
					name: "风险检测一张图",
					to: "APictureOfRiskJC",
					icon: "ios-create-outline"
				},
				{
					name: "企业风险一张图",
					to: "APictureOfCompanyRisk",
					icon: "ios-create-outline"
				},
				{
					name: "区域风险",
					to: "areaRisk",
					icon: "ios-create-outline"
				}
				// {
				// 	name: "菜单分类2",
				// 	icon: "ios-copy",
				// 	children: [
				// 		{
				// 			name: "测试",
				// 			to: "test"
				// 		}
				// 	]
				// }
			]
		};
	},

	created() {},

	mounted() {
		var _this = this;
	},

	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
			setTimeout(function() {
				_this.$nextTick(() => {
					_this.$refs.side_menu.updateOpened();
					_this.$refs.side_menu.updateActiveName();
				});
			}, 2000);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>

<style lang='less' >
.navLeft {
	.ivu-menu-submenu-title {
		color: #fff;
		text-align: left;
	}
	background: #1d1e23;
	li {
		color: #fff;
	}
}
</style>


