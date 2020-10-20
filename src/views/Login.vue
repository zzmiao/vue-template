<template>
	<div class="login">
		<img src="../assets/images/login_bg.jpg" class="login-bg" v-bind:style="{height:bgHeight+'px'}" />
		<el-form v-bind:model="ruleForm" :rules="rules" ref="ruleForm2" label-width="100px" class="login-ruleForm">
			<el-form-item label="用户名" prop="name" ref="name" class="login-label">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password" ref="password" class="login-label">
				<el-input type="password" v-model="ruleForm.password" show-password></el-input>
			</el-form-item>

			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
			</el-form-item>
		</el-form>

	</div>
</template>
<script>
	export default {
		name: "Login",
		components: {

		},
		data() {
			return {
				bgHeight: "",
				ruleForm: {
					name: "", //用户名
					password: "", //密码
				},
				rules: {
					name: [{
							required: true,
							message: '请输入用户名',
							trigger: 'blur'
						},
						{
							min: 2,
							max: 5,
							message: '长度在 2 到 8个字符',
							trigger: 'blur'
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: 'blur'
						},
						{
							min: 6,
							message: '长度至少6个字符',
							trigger: 'blur'
						}
					]
				}
			}
		},
		methods: {
			submitForm: function(formName) {
				let {
					name,
					password
				} = this.ruleForm;
				this.$refs[formName].validate((valid) => {
					if(valid) {
						if(name == "admin" && password == "123456") {
							//数据缓存
							sessionStorage.setItem("username", name);
							sessionStorage.setItem("password", password);
							//路由跳转
							this.$router.push("/home");
						} else {
							this.$message.error('用户名或密码错误，请重新输入。');
						}
					} else {
						this.$message.error('请输入用户名或密码。');
						return false;
					}
				});
			}
		},
		computed: {

		},
		created: function() {
			this.$data.bgHeight = this.getClientSize().clientHeight - 4;
		}
	}
</script>
<style>
	.login {
		width: 100%;
		height: 100%;
		position: relative;
	}
	
	.login-bg {
		width: 100%;
		height: 100%;
	}
	
	.login-ruleForm {
		width: 400px;
		position: absolute;
		top: 300px;
		left: 500px;
		z-index: 1;
	}
	
	.login-label .el-form-item__label {
		color: #FFFFFF!important;
	}
</style>