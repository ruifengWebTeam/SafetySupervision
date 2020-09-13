<template>
	<div class="name">
		<div>{{projectName}}</div>
	</div>
</template>

<script>
export default {
	props: ["projectName"],

	components: {},

	data() {
		return {};
	},

	created() {},

	mounted() {},

	methods: {}
};
</script>

<style lang='less' >
.name {
	background:  #1d1e23  ;
	display: flex;
	flex: 1;
	height: 64px;
	width: 180px;
	div {
		display: flex;
		color: #fff;
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>