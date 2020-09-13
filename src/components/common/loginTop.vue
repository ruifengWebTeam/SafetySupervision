<template>
	<div>
		<div class="loginTop">
			
			<div>{{middleText}}</div>
			
		</div>
	</div>
</template>
<script>
export default {
	props: ["middleText"]
};
</script>
<style lang="less">
.loginTop {
	background: #fff;
	display: flex;
	div {
		font-size: 24px;
		display: flex;
		flex: 1;
		justify-content: center;
		align-items: center;
	}
}
</style>