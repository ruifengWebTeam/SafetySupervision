<template>
	<div class="home">
		<companyType :projectName="projectName"></companyType>
		<navTop
			style="height:64px;width:calc(100% - 180px);"
			@lginOut="$router.push('/login')"
		></navTop>
		<navLeft
			class='navLeft i-scrollbar-hide'
			style="height: calc(100vh - 64px);overflow-y: auto;"
		> </navLeft>
		<container class='container i-scrollbar-hide'></container>
	</div>

</template>

<script>
import companyType from "@/components/common/companyType.vue";
import navTop from "@/components/common/NavTop.vue";
import navLeft from "@/components/common/NavLeft.vue";
import container from "@/views/container.vue";
export default {
	name: "Home",
	components: {
		navTop,
		companyType,
		navLeft,
		container
	},
	data() {
		return {
			projectName: "开发区风险分布子系统"
		};
	},
	created() {
		this.getUserInfo();
	},
	methods: {
		async getUserInfo() {
			// const res = await this.$http.get("/user/" + localStorage.getItem("id"), {
			// 	headers: {
			// 		Authorization: "Bearer " + localStorage.getItem("token")
			// 	}
			// });
			const res = await this.$http.get("/user/" + localStorage.getItem("id"));
		}
	}
};
</script>
<style lang="less">
.home {
	display: flex;
	width: 100%;
	height: 100%;
}
.navLeft {
	position: absolute;
	top: 64px;
	left: 0;
	width: 180px;
}
.container {
	position: absolute;
	top: 64px;
	right: 0;
	height: calc(100vh - 64px);
	overflow-y: auto;
	width: calc(100% - 180px);
}
.i-scrollbar-hide::-webkit-scrollbar {
	width: 0;
}
</style>
