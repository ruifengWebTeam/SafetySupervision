<template>
	<div class="box">
		<div>
			<loginTop middleText='注册账号'>
				<div
					slot='right'
					style='font-size:3vw'
					@click="$router.push('/login')"
				>切换到登录</div>
			</loginTop>
			<loginText
				label="姓名"
				placeholder="请输入姓名"
				rule="^.{6,16}$"
				type="text"
				style="margin:2.333vw 0"
				@inputValue=" (res) => model.name = res"
			></loginText>
			<loginText
				label="账号"
				rule="^.{6,16}$"
				placeholder="请输入账号"
				style="margin:2.333vw 0"
				type="text"
				@inputValue='(res) => model.username = res'
			></loginText>
			<loginText
				label="密码"
				placeholder="请输入密码"
				type="password"
				rule="^.{6,16}$"
				@inputValue='(res) => model.password = res'
			></loginText>
			<loginBtn
				style="margin:2.333vw 0"
				@registerClick="registerClick"
				btnText="注册"
			></loginBtn>
		</div>
	</div>
</template>
<script>
import loginTop from "@/components/common/loginTop.vue";
import loginText from "@/components/common/loginText.vue";
import loginBtn from "@/components/common/loginBtn.vue";
export default {
	components: {
		loginTop,
		loginText,
		loginBtn
	},
	data() {
		return {
			model: {
				name: "",
				username: "",
				password: ""
			}
		};
	},
	methods: {
		// registerClick() {
		// 	console.log("被店家了");

		// 	if (this.name && this.username && this.password) {
		// 		console.log("sss");
		// 		this.$http
		// 			.post("/register", {
		// 				name: this.name,
		// 				username: this.username,
		// 				password: this.password
		// 			})
		// 			.then(res => {
		// 				console.log(res);
		// 			});
		// 	}
		// },
		async registerClick() {
			console.log("被店家了");
			let rule = /^.{6,16}$/;
			if (
				rule.test(this.model.name) &&
				rule.test(this.model.username) &&
				rule.test(this.model.password)
			) {
				console.log("sss");
				const res = await this.$http.post("/register", this.model);
				debugger;
				if (res.data.code === 200) {
					this.$msg.success(res.data.msg);
					this.$router.push("/login");
				} else {
					this.$msg.fail(res.data.msg);
				}
			} else {
				this.$msg.fail("格式不正确！");
			}
		}
	}
};
</script>
<style lang="less" scoped >
.box {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}
</style>