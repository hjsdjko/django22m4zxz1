<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","alignItems":"center","background":"url(http://codegen.caihongy.cn/20231201/94181f4a19bc4abf8daff5310ff35259.jpg)","display":"flex","width":"100%","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","justifyContent":"center"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"padding":"20px","margin":"0","borderRadius":"0","background":"rgba(0,0,0,0.5)","width":"600px","position":"absolute","right":"5%","height":"850px"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"width":"100%","margin":"0 0 10px 0","lineHeight":"44px","fontSize":"24px","color":"#E1B44F","textAlign":"center"}'>基于Python的毕业生去向反馈调查平台的设计与实现注册</p></div>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xuehao">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('xuehao')?'required':''">学号：</div>
				<el-input v-model="registerForm.xuehao"  placeholder="请输入学号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima2">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="touxiang">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('touxiang')?'required':''">头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueshengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingming">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('xingming')?'required':''">姓名：</div>
				<el-input v-model="registerForm.xingming"  placeholder="请输入姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingbie">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('xingbie')?'required':''">性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueshengxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="shoujihao">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('shoujihao')?'required':''">手机号：</div>
				<el-input v-model="registerForm.shoujihao"  placeholder="请输入手机号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="jiaoshizhanghao">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('jiaoshizhanghao')?'required':''">教师账号：</div>
                <el-select @change="xueshengjiaoshizhanghaoChange" v-model="registerForm.jiaoshizhanghao" placeholder="请选择教师账号" >
                  <el-option
                      v-for="(item,index) in xueshengjiaoshizhanghaoOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="jiaoshixingming">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('jiaoshixingming')?'required':''">教师姓名：</div>
				<el-input v-model="registerForm.jiaoshixingming" readonly placeholder="请输入教师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="zhuanye">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('zhuanye')?'required':''">专业：</div>
				<el-input v-model="registerForm.zhuanye" readonly placeholder="请输入专业" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='xuesheng'" prop="banji">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('banji')?'required':''">班级：</div>
				<el-input v-model="registerForm.banji" readonly placeholder="请输入班级" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshizhanghao">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('jiaoshizhanghao')?'required':''">教师账号：</div>
				<el-input v-model="registerForm.jiaoshizhanghao"  placeholder="请输入教师账号" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('mima')?'required':''">密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima2">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('mima')?'required':''">确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshixingming">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('jiaoshixingming')?'required':''">教师姓名：</div>
				<el-input v-model="registerForm.jiaoshixingming"  placeholder="请输入教师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="zhaopian">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('zhaopian')?'required':''">照片：</div>
                <file-upload
					tip="点击上传照片"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.zhaopian?registerForm.zhaopian:''"
					@change="jiaoshizhaopianUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="nianling">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('nianling')?'required':''">年龄：</div>
				<el-input v-model="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="biyeyuanxiao">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('biyeyuanxiao')?'required':''">毕业院校：</div>
				<el-input v-model="registerForm.biyeyuanxiao"  placeholder="请输入毕业院校" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="zhuanye">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('zhuanye')?'required':''">专业：</div>
				<el-input v-model="registerForm.zhuanye"  placeholder="请输入专业" />
			</el-form-item>
			<el-form-item :style='{"width":"80%","padding":"0","margin":"0 auto 15px","height":"auto"}' v-if="tableName=='jiaoshi'" prop="banji">
				<div v-if="true" :style='{"width":"114px","lineHeight":"44px","fontSize":"14px","color":"#fff"}' :class="changeRules('banji')?'required':''">班级：</div>
				<el-input v-model="registerForm.banji"  placeholder="请输入班级" />
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 6px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#fff","display":"block","outline":"none","borderRadius":"8px","background":"#e1b44f","width":"80%","fontSize":"24px","height":"44px"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 10px","boxShadow":"0 0 6px rgba(64, 158, 255, .5)","margin":"20px auto 5px","color":"#fff","display":"none","outline":"none","borderRadius":"8px","background":"rgba(64, 158, 255, 1)","width":"80%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"5px 10%","color":"#e1b44f","textAlign":"center","display":"inline-block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"none"}' to="/login">已有账户登录</router-link>
			<div class="idea1" :style='{"width":"100%","background":"red","display":"none","height":"40px"}'></div>
			<div class="idea2" :style='{"width":"100%","background":"blue","display":"none","height":"40px"}'></div>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {},
			forgetForm: {},
			rules: {},
			requiredRules: {},
            xueshengxingbieOptions: [],
            xueshengjiaoshizhanghaoOptions: [],
		}
    },
	mounted() {
		if(this.$route.query.pageFlag=='register'){
			this.tableName = this.$route.query.role;
			if(this.tableName=='xuesheng'){
				this.registerForm = {
					xuehao: '',
					mima: '',
					mima2: '',
					touxiang: '',
					xingming: '',
					xingbie: '',
					shoujihao: '',
					jiaoshizhanghao: '',
					jiaoshixingming: '',
					zhuanye: '',
					banji: '',
				}
			}
			if(this.tableName=='jiaoshi'){
				this.registerForm = {
					jiaoshizhanghao: '',
					mima: '',
					mima2: '',
					jiaoshixingming: '',
					zhaopian: '',
					nianling: '',
					biyeyuanxiao: '',
					zhuanye: '',
					banji: '',
					clicknum: '',
				}
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
			if ('xuesheng' == this.tableName) {
				this.requiredRules.xingming = [{ required: true, message: '请输入姓名', trigger: 'blur' }]
			}
		}
	},
    created() {
		this.pageFlag = this.$route.query.pageFlag;
		if(this.$route.query.pageFlag=='register'){
		  if ('xuesheng' == this.tableName) {
			this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
		  }
		  if ('xuesheng' == this.tableName) {
			this.rules.xingming = [{ required: true, message: '请输入姓名', trigger: 'blur' }];
		  }
			this.xueshengxingbieOptions = "男,女".split(',');
		  if ('xuesheng' == this.tableName) {
			this.rules.shoujihao = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
		  }
			this.$http({
			  url: `option/jiaoshi/jiaoshizhanghao`,
			  method: "get",
			  params: {}
			}).then(({ data }) => {
			  if (data && data.code === 0) {
				  this.xueshengjiaoshizhanghaoOptions = data.data;
			  }
			});
		  if ('jiaoshi' == this.tableName) {
			this.rules.clicknum = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
		  }
		}
    },
    //方法集合
    methods: {
		changeRules(name){
			if(this.requiredRules[name]){
				return true
			}
			return false
		},
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      xueshengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
        xueshengjiaoshizhanghaoChange () {
          this.$http({
            url: `follow/jiaoshi/jiaoshizhanghao?columnValue=`+ this.registerForm.jiaoshizhanghao,
            method: "get",
            params: {}
          }).then(({ data }) => {
            if (data && data.code === 0) {
            if(data.data.jiaoshixingming){
              this.registerForm.jiaoshixingming = data.data.jiaoshixingming
            }
            if(data.data.zhuanye){
              this.registerForm.zhuanye = data.data.zhuanye
            }
            if(data.data.banji){
              this.registerForm.banji = data.data.banji
            }
            }
          });
        },
      jiaoshizhaopianUploadChange(fileUrls) {
          this.registerForm.zhaopian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
				if((!this.registerForm.xuehao) && `xuesheng` == this.tableName){
					this.$message.error(`学号不能为空`);
					return
				}
               if(`xuesheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
				if((!this.registerForm.mima) && `xuesheng` == this.tableName){
					this.$message.error(`密码不能为空`);
					return
				}
				if((!this.registerForm.xingming) && `xuesheng` == this.tableName){
					this.$message.error(`姓名不能为空`);
					return
				}
					if(`xuesheng` == this.tableName && this.registerForm.shoujihao &&(!this.$validate.isMobile2(this.registerForm.shoujihao))){
						this.$message.error(`手机号应输入手机格式`);
						return
					}
               if(`jiaoshi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20231201/94181f4a19bc4abf8daff5310ff35259.jpg);
		
		.el-input {
		  width: auto;
		}
		
		.el-date-editor.el-input {
			width: auto;
		}
		
		.el-form-item /deep/ .el-form-item__content {
						display: flex;
					}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 1px solid #E1B44F;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #fff;
						background: rgba(0,0,0,0);
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 1px solid #E1B44F;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #fff;
						background: rgba(64, 158, 255, 0);
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #E1B44F;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #fff;
						background: rgba(64, 158, 255, 0);
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 1px solid #E1B44F;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						outline: none;
						color: #fff;
						background: rgba(64, 158, 255, 0);
						width: 288px;
						font-size: 14px;
						height: 44px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 1px solid #E1B44F;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #E1B44F;
		  		  width: 60px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #E1B44F;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #E1B44F;
		  		  width: 60px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #E1B44F;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #E1B44F;
		  		  width: 60px;
		  		  font-size: 32px;
		  		  line-height: 60px;
		  		  text-align: center;
		  		  height: 60px;
		  		}
	}
	.required {
		position: relative;
	}
	.required::after{
				color: red;
				left: -10px;
				position: absolute;
				content: "*";
			}
</style>
