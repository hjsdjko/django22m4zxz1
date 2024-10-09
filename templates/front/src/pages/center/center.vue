<template>
<div class="center-preview" :style='{"width":"86%","margin":"10px auto","position":"relative","background":"#fff"}'>
	<div class="title" :style='{"margin":"10px 0","fontSize":"24px","lineHeight":"54px","color":"#000","textAlign":"center","background":"#ffc054"}'>{{ title }}</div>
	
	<div class="info" :style='{"padding":"20px","boxShadow":"0 1px 6px rgba(0, 0, 0, 0.3)","margin":"20px auto","borderRadius":"10px","flexWrap":"wrap","background":"#ffffff","display":"flex","width":"100%","height":"auto"}'>
		<div :style='{"borderColor":"#efefef","color":"#333","borderWidth":"0","width":"100%","lineHeight":"44px","fontSize":"15px","borderStyle":"solid","height":"44px"}'>个人信息</div>
		<div :style='{"width":"100%","borderColor":"#efefef","fontSize":0,"borderStyle":"solid","borderWidth":"0","height":"auto"}' v-if="userTableName=='xuesheng'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0","display":"block","width":"80px","borderStyle":"solid","float":"left","height":"80px"}' :src="sessionForm.touxiang?baseUrl + sessionForm.touxiang:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"width":"100%","borderColor":"#efefef","fontSize":0,"borderStyle":"solid","borderWidth":"0","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<el-image :style='{"margin":"10px auto","borderColor":"#efefef","objectFit":"cover","borderRadius":"100%","borderWidth":"0","display":"block","width":"80px","borderStyle":"solid","float":"left","height":"80px"}' :src="sessionForm.zhaopian?baseUrl + sessionForm.zhaopian:require('@/assets/avator.png')" fit="cover"></el-image>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>学号</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.xuehao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>姓名</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.xingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>性别</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.xingbie}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>手机号</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.shoujihao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>教师账号</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.jiaoshizhanghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='xuesheng'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>教师姓名</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.jiaoshixingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>教师账号</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.jiaoshizhanghao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>教师姓名</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.jiaoshixingming}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>年龄</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.nianling}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>毕业院校</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.biyeyuanxiao}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>专业</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.zhuanye}}</div>
		</div>
		<div :style='{"padding":"0 20px","borderColor":"#efefef","borderWidth":"0 0 1px 0","display":"flex","width":"25%","lineHeight":"40px","borderStyle":"solid","height":"auto"}' v-if="userTableName=='jiaoshi'">
			<span class="icon iconfont icon-shouye-zhihui" :style='{"color":"#333","padding":"0 5px","fontSize":"14px"}'></span>
			<div :style='{"color":"#333","fontSize":"14px"}'>班级</div>
			<div :style='{"fontSize":"14px","color":"#333","textAlign":"right","flex":1}'>{{sessionForm.banji}}</div>
		</div>
		
	</div>
	
    <el-tabs tab-position="left" :style='{"width":"100%","flexWrap":"wrap","background":"#fff","display":"flex"}' @tab-click="handleClick">
      <el-tab-pane label="个人中心">
        <el-form class="center-preview-pv" ref="sessionForm" :model="sessionForm" :rules="rules" label-width="110px">
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="学号" prop="xuehao">
            <el-input v-model="sessionForm.xuehao" placeholder="学号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="头像" prop="touxiang">
			<file-upload
			tip="点击上传头像"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.touxiang?sessionForm.touxiang:''"
			@change="xueshengtouxiangHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="姓名" prop="xingming">
            <el-input v-model="sessionForm.xingming" placeholder="姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="性别" prop="xingbie">
            <el-select v-model="sessionForm.xingbie" placeholder="请选择性别" >
              <el-option v-for="(item, index) in dynamicProp.xingbie" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="手机号" prop="shoujihao">
            <el-input v-model="sessionForm.shoujihao" placeholder="手机号" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="教师账号" prop="jiaoshizhanghao">
            <el-select v-model="sessionForm.jiaoshizhanghao" placeholder="请选择教师账号" @change="jiaoshizhanghaoChange" >
              <el-option v-for="(item, index) in dynamicProp.jiaoshizhanghao" :key="index" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="教师姓名" prop="jiaoshixingming">
            <el-input v-model="sessionForm.jiaoshixingming" placeholder="教师姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="专业" prop="zhuanye">
            <el-input v-model="sessionForm.zhuanye" placeholder="专业" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='xuesheng'" label="班级" prop="banji">
            <el-input v-model="sessionForm.banji" placeholder="班级" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='jiaoshi'" label="教师账号" prop="jiaoshizhanghao">
            <el-input v-model="sessionForm.jiaoshizhanghao" placeholder="教师账号" readonly></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='jiaoshi'" label="教师姓名" prop="jiaoshixingming">
            <el-input v-model="sessionForm.jiaoshixingming" placeholder="教师姓名" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='jiaoshi'" label="照片" prop="zhaopian">
			<file-upload
			tip="点击上传照片"
			action="file/upload"
			:limit="1"
			:multiple="true"
			:fileUrls="sessionForm.zhaopian?sessionForm.zhaopian:''"
			@change="jiaoshizhaopianHandleAvatarSuccess"
			></file-upload>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='jiaoshi'" label="年龄" prop="nianling">
            <el-input v-model="sessionForm.nianling" placeholder="年龄" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='jiaoshi'" label="毕业院校" prop="biyeyuanxiao">
            <el-input v-model="sessionForm.biyeyuanxiao" placeholder="毕业院校" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='jiaoshi'" label="专业" prop="zhuanye">
            <el-input v-model="sessionForm.zhuanye" placeholder="专业" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' v-if="userTableName=='jiaoshi'" label="班级" prop="banji">
            <el-input v-model="sessionForm.banji" placeholder="班级" ></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"0","margin":"0"}'>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#ffc054","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="onSubmit('sessionForm')">更新信息</el-button>
            <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#000000","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="danger" @click="logout">退出登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
	  <el-tab-pane label="修改密码">
		<el-form class="center-preview-pv" ref="passwordForm" :model="passwordForm" :rules="passwordRules" label-width="110px">
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="原密码" prop="password">
			  <el-input type="password" v-model="passwordForm.password" placeholder="原密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="新密码" prop="newpassword">
			  <el-input type="password" v-model="passwordForm.newpassword" placeholder="新密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="确认密码" prop="repassword">
			  <el-input type="password" v-model="passwordForm.repassword" placeholder="确认密码"></el-input>
			</el-form-item>
			<el-form-item :style='{"padding":"0","margin":"0"}'>
			  <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"#000","borderRadius":"4px","background":"#ffc054","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' type="primary" @click="updatePassword">修改密码</el-button>
			</el-form-item>
		</el-form>
	  </el-tab-pane>
		<el-tab-pane v-for="(item,index) in menuList" :key="index" v-if="hasBack(item.menu)" :label="item.child[0].menu" :name="item.child[0].tableName"></el-tab-pane>
      <el-tab-pane label="我的收藏"></el-tab-pane>
    </el-tabs>

</div>
</template>

<script>
  import config from '@/config/config'
  import menu from '@/config/menu'
  import Vue from 'vue'
  export default {
    //数据集合
    data() {
      return {
        title: '个人中心',
        baseUrl: config.baseUrl,
        sessionForm: {},
		passwordForm: {},
		passwordRules: {
			password: [
				{
					required: true,
					message: "密码不能为空",
					trigger: "blur"
				}
			],
			newpassword: [
				{
					required: true,
					message: "新密码不能为空",
					trigger: "blur"
				}
			],
			repassword: [
				{
					required: true,
					message: "确认密码不能为空",
					trigger: "blur"
				}
			]
		},
        rules: {},
		menuList: [],
        disabled: false,
        uploadUrl: config.baseUrl + 'file/upload',
        imageUrl: '',
        headers: {Token: localStorage.getItem('frontToken')},
        userTableName: localStorage.getItem('UserTableName'),
        dynamicProp: {},
      }
    },
    created() {
		let menus = menu.list()
		for(let x in menus){
			if(menus[x].tableName == this.userTableName){
				this.menuList = menus[x].backMenu
			}
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xuehao', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'touxiang', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xingming', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'xingbie', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'shoujihao', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'jiaoshizhanghao', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'jiaoshixingming', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'zhuanye', null);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.sessionForm, 'banji', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'jiaoshizhanghao', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'mima', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'jiaoshixingming', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'zhaopian', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'nianling', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'biyeyuanxiao', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'zhuanye', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'banji', null);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.sessionForm, 'clicknum', null);
		}

		if ('xuesheng' == this.userTableName&&this.rules['xuehao']){
			this.rules['xuehao'].push({ required: true, message: '请输入学号', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['xuehao']) {
			this.$set(this.rules, 'xuehao', [{ required: true, message: '请输入学号', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName&&this.rules['mima']){
			this.rules['mima'].push({ required: true, message: '请输入密码', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['mima']) {
			this.$set(this.rules, 'mima', [{ required: true, message: '请输入密码', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName&&this.rules['xingming']){
			this.rules['xingming'].push({ required: true, message: '请输入姓名', trigger: 'blur' })
		}else if('xuesheng' == this.userTableName&&!this.rules['xingming']) {
			this.$set(this.rules, 'xingming', [{ required: true, message: '请输入姓名', trigger: 'blur' }]);
		}
		if ('xuesheng' == this.userTableName) {
			this.$set(this.rules, 'shoujihao', [{ required: false, validator: this.$validate.isMobile, trigger: 'blur' }]);
		}
		if ('jiaoshi' == this.userTableName) {
			this.$set(this.rules, 'clicknum', [{ required: false, validator: this.$validate.isIntNumer, trigger: 'blur' }]);
		}

      this.init();
      this.sessionForm = JSON.parse(localStorage.getItem('sessionForm'))
    },
    //方法集合
    methods: {
      init() {
        if ('xuesheng' == this.userTableName) {
          this.dynamicProp.xingbie = '男,女'.split(',');
        }
				if ('xuesheng' == this.userTableName) {
          this.$http.get('option/jiaoshi/jiaoshizhanghao', {emulateJSON: true}).then(res => {
            if (res.data.code == 0) {
              this.dynamicProp.jiaoshizhanghao = res.data.data;
			  this.$forceUpdate()
            }
          });
        }    
      },
	  setSession(){
		  localStorage.setItem('sessionForm',JSON.stringify(this.sessionForm))
	  },
      jiaoshizhanghaoChange(value) {
        this.$http.get('follow/jiaoshi/jiaoshizhanghao', {params: {columnValue: value}}).then(res => {
          if (res.data.code == 0) {
            this.sessionForm.jiaoshixingming = res.data.data.jiaoshixingming;
            this.sessionForm.zhuanye = res.data.data.zhuanye;
            this.sessionForm.banji = res.data.data.banji;
          }
        });
      },
      onSubmit(formName) {
		if(`xuesheng` == this.userTableName && this.sessionForm.touxiang!=null){
			this.sessionForm.touxiang = this.sessionForm.touxiang.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
		if(`jiaoshi` == this.userTableName && this.sessionForm.zhaopian!=null){
			this.sessionForm.zhaopian = this.sessionForm.zhaopian.replace(new RegExp(this.$config.baseUrl,"g"),"");
		}
        this.$refs[formName].validate((valid) => {
			if (valid) {
				this.$http.post(this.userTableName + '/update', this.sessionForm).then(res => {
					if (res.data.code == 0) {
						this.setSession()
						this.$message({
							message: '更新成功',
							type: 'success',
							duration: 1500
						});
					}
				});
			} else {
				return false;
			}
        });
      },
      xueshengtouxiangHandleAvatarSuccess(fileUrls) {
        this.sessionForm.touxiang = fileUrls;
      },
      jiaoshizhaopianHandleAvatarSuccess(fileUrls) {
        this.sessionForm.zhaopian = fileUrls;
      },
      handleClick(tab, event) {
        switch(event.target.outerText) {
          case '个人中心':
            tab.$router.push('/index/center');
            break;
          case '修改密码':
            this.passwordForm = {
				password: '',
				newpassword: '',
				repassword: '',
			}
			this.$forceUpdate()
            break;
          case '我的收藏':
            localStorage.setItem('storeupType', 1);
            tab.$router.push('/index/storeup');
            break;
		  default:
		  	tab.$router.push(`/index/${tab.name}?centerType=1`);
        }

        this.title = event.target.outerText;
      },
	  async updatePassword(){
			this.$refs["passwordForm"].validate(async valid => {
				if (valid) {
					var password = "";
					if (this.sessionForm.mima) {
						password = this.sessionForm.mima;
					} else if (this.sessionForm.password) {
						password = this.sessionForm.password;
					}
					if (this.passwordForm.password != password) {
						this.$message.error("原密码错误");
						return;
					}
					if (this.passwordForm.newpassword != this.passwordForm.repassword) {
						this.$message.error("两次密码输入不一致");
						return;
					}
					if (this.userTableName == 'xuesheng') {
					}
					this.sessionForm.password = this.passwordForm.newpassword;
					this.sessionForm.mima = this.passwordForm.newpassword;
					this.$http.post(`${this.userTableName}/update`,this.sessionForm).then(({data})=>{
						if (data && data.code === 0) {
							this.$message({
								message: "修改密码成功,下次登录系统生效",
								type: "success",
								duration: 1500,
								onClose: () => {
								}
							});
							this.setSession()
						} else {
							this.$message.error(data.msg);
						}
					});
				}
			})
	  },
      logout() {
        localStorage.clear();
        Vue.http.headers.common['Token'] = "";
        this.$router.push('/index/home');
        this.activeIndex = '0'
        localStorage.setItem('keyPath', this.activeIndex)
        this.$forceUpdate()
        this.$message({
            message: '登出成功',
            type: 'success',
            duration: 1500,
        });
      },
	  hasBack(name){
		  switch(name){
			case '我的收藏管理':
				return false
				break;
			default:
				return true
		  }
	  }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .center-preview {
  
    .el-tabs {
      & /deep/ .el-tabs__header {
		.el-tabs__nav{
			overflow: auto;
		}
		::-webkit-scrollbar {
		  -webkit-appearance: none;
		  width: 6px;
		  height: 6px;
		}
		::-webkit-scrollbar-track {
		  background: rgba(0, 0, 0, 0.1);
		  border-radius: 0;
		}
		::-webkit-scrollbar-thumb {
		  cursor: pointer;
		  border-radius: 5px;
		  background: rgba(0, 0, 0, 0.15);
		  transition: color 0.2s ease;
		}
		::-webkit-scrollbar-thumb:hover {
		  background: rgba(0, 0, 0, 0.3);
		}
        .el-tabs__nav-wrap {
          margin: 0;
  
          &::after {
            content: none;
          }
        }
  
        .el-tabs__active-bar {
          display: none !important;
        }
      }
  
      .center-preview-pv {
        .el-date-editor.el-input {
          width: auto;
        }
  
        .balance {
          .el-input {
            width: auto;
          }
        }
      }
    }
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header {
	padding: 10px 0 0;
	margin: 0;
	background: #ffc054;
	display: flex;
	width: 100%;
	border-color: #eee;
	border-width: 0;
	justify-content: center;
	position: relative;
	border-style: solid;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item {
  	padding: 0 10px;
  	margin: 0 0 10px;
  	color: #333;
  	background: #ffc054;
  	font-weight: 500;
  	display: block;
  	font-size: 14px;
  	line-height: 40px;
  	position: relative;
  	float: left;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item:hover {
  	padding: 0 10px;
  	color: #FFFFFF;
  	background: #000000;
  	font-weight: 500;
  	font-size: 14px;
  	line-height: 40px;
  	position: relative;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__header .el-tabs__item.is-active {
  	padding: 0 10px;
  	color: #FFFFFF;
  	background: #000000;
  	font-weight: 500;
  	display: block;
  	font-size: 14px;
  	line-height: 40px;
  	position: relative;
  	float: left;
  	text-align: center;
  	height: 40px;
  }
  
  .center-preview .el-tabs /deep/ .el-tabs__content {
  	padding: 10px;
  	background: #fff;
  	width: 100%;
  }
  .center-preview .el-tabs /deep/ .el-tabs__content .el-tab-pane {
  	width: 100%;
  }
  
  .center-preview-pv .el-form-item /deep/ .el-form-item__label {
  	padding: 0 10px 0 0;
  	color: #666;
  	font-weight: 500;
  	width: 110px;
  	font-size: 14px;
  	line-height: 40px;
  	text-align: left;
  }
  
  .center-preview-pv .el-form-item .el-form-item__content {
    margin-left: 110px;
  }
  
  .center-preview-pv .el-input /deep/ .el-input__inner {
  	border: 1px solid #000000;
  	border-radius: 4px;
  	padding: 0 12px;
  	outline: none;
  	color: #000;
  	width: 400px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-select /deep/ .el-input__inner {
  	border: 1px solid #000000;
  	border-radius: 4px;
  	padding: 0 12px;
  	outline: none;
  	color: #000;
  	width: 400px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv .el-date-editor /deep/ .el-input__inner {
  	border: 1px solid #000000;
  	border-radius: 4px;
  	padding: 0 10px 0 30px;
  	outline: none;
  	color: #000;
  	width: 200px;
  	font-size: 14px;
  	height: 40px;
  }
  
  .center-preview-pv /deep/ .avatar-uploader-icon {
  	border: 1px dashed #000;
  	cursor: pointer;
  	border-radius: 6px;
  	color: #666;
  	width: 80px;
  	font-size: 32px;
  	line-height: 80px;
  	text-align: center;
  	height: 80px;
  }
  
  .center-preview-pv .el-form-item.balance /deep/ .el-input__inner {
  	border: 1px solid #000000;
  	border-radius: 0;
  	padding: 0 12px;
  	outline: none;
  	color: #000;
  	display: inline-block;
  	width: 200px;
  	font-size: 14px;
  	height: 40px;
  }
</style>
