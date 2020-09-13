<template>
	<div
		class="parentBox"
		@click="registerClick"
	>

		<el-button
			class="btn"
			:type="type"
		>{{ btnText}}</el-button>

	</div>

</template>

<script>
export default {
	props: ["btnText", "type"],

	components: {},

	data() {
		return {};
	},

	created() {},

	mounted() {},

	methods: {
		registerClick() {
			this.$emit("registerClick");
		}
	}
};
</script>

<style lang='less' >
.btn {
	width: 100%;
}
</style>