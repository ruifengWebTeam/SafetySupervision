<template>
	<div class="box">
		<div class="content">
			<loginTop middleText='开发区风险分布子系统'></loginTop>
			<loginText
				label="账号"
				rule="^.{6,16}$"
				placeholder="请输入账号"
				type="text"
				@inputValue='(res) => model.username = res'
				style="margin:  3.333vw 0"
			></loginText>

			<loginText
				label="密码"
				placeholder="请输入密码"
				type="password"
				rule="^.{6,16}$"
				style="margin:  0 0  3.333vw 0"
				@inputValue='(res) => model.password = res'
			></loginText>

			<el-row>
				<el-col :span="14">
					<loginBtn
						@registerClick="registerClick"
						type="primary"
						btnText="登录"
					></loginBtn>
				</el-col>
				<el-col :span="10">
					<loginBtn
						style="margin-left:  3.333vw "
						@registerClick="$router.push('/register')"
						btnText="注册"
					></loginBtn>
				</el-col>

			</el-row>

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
			let rule = /^.{6,16}$/;
			if (rule.test(this.model.username) && rule.test(this.model.password)) {
				console.log("sss");
				const res = await this.$http.post("/login", this.model);

				if (res.data.code === 200) {
					this.$msg.success(res.data.msg);
					this.$router.push("/login");

					localStorage.setItem("id", res.data.id);
					localStorage.setItem("token", res.data.token);
					setTimeout(() => {
						this.$router.push("/");
					}, 1000);
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
<style lang="less"  >
.box {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}
</style>