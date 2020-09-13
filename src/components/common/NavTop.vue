<template>
	<div id="navtop">
		<div></div>
		<div>
			<el-input
				class="inputEle"
				placeholder="一键索引定位企业"
				v-model="name"
				size="mini"
			>
				<i
					slot="prefix"
					class="el-input__icon el-icon-search"
				></i>
			</el-input>
		</div>
		<div>
			<p>

				<el-dropdown
					@command="handleCommand"
					size="small"
				>
					<span class="el-dropdown-link">
						<i class="el-icon-s-custom"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="lginOut">退出登录</el-dropdown-item>

					</el-dropdown-menu>
				</el-dropdown>
			</p>
			<p>
				<i class="el-icon-bell"></i>
			</p>

		</div>
	</div>
</template>

<script>
export default {
	components: {},

	data() {
		return {
			name: ""
		};
	},

	created() {},

	mounted() {},

	methods: {
		handleCommand(e) {
			debugger;
			if (e === "lginOut") this.$emit("lginOut");
		}
	}
};
</script>

<style lang='less' >
#navtop {
	display: flex;
	height: 4.167vw;
	background: linear-gradient(90deg, #1d1e23, #3f4045);
	color: #fff;
	div {
		display: flex;
		justify-content: left;
		align-items: center;
	}
	div:nth-child(1) {
		flex: 2;
	}
	div:nth-child(2) {
		flex: 2;
		justify-content: right;
		.inputEle {
			position: relative;
			width: 30px;
			.el-icon-search {
				left: -35px;
			}
		}
	}
	div:nth-child(3) {
		flex: 2;
		padding-left: 1.667vw;
		flex-direction: row-reverse;
		flex-shrink: 0;
		margin-right: 1.823vw;
		p {
			width: 20%;
			flex-shrink: 0;
			flex-direction: row-reverse;
			justify-content: left;
			align-items: center;
			&:hover i {
				background: rgba(255, 255, 255, 0.5);
			}
			cursor: pointer;
			i {
				height: 1.823vw;
				line-height: 1.823vw;
				width: 1.823vw;
			}
		}
	}
}
.el-dropdown-link {
	cursor: pointer;
	color: #409eff;
}
.el-icon-arrow-down {
	font-size: 12px;
}
.demonstration {
	display: block;
	color: #8492a6;
	font-size: 14px;
	margin-bottom: 20px;
}
</style>