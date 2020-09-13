<template>
	<div>
		<el-input
			class="inputEle"
			prefix-icon="el-icon-search"
			:label="label"
			:placeholder='placeholder'
			:type='type'
			:rule='rule'
			v-model="content"
		>
		</el-input>
	</div>
</template>

<script>
export default {
	props: ["label", "placeholder", "type", "rule"],
	components: {},

	data() {
		return {
			content: ""
		};
	},
	watch: {
		content() {
			console.log("ss");
			this.handerRule();
		}
	},
	created() {},

	mounted() {},

	methods: {
		handerRule() {
			const rule = new RegExp(this.rule);
			if (rule.test(this.content)) {
				this.$emit("inputValue", this.content);
			}
		}
	}
};
</script>

<style lang='less'  >

</style>