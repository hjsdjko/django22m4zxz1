<template>
<div :style='{"width":"86%","padding":"20px","margin":"10px auto","position":"relative","background":"#fff"}'>
    <el-form
	  :style='{"width":"100%","position":"relative"}'
      class="add-update-preview"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="110px"
    >
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="登记编号" prop="dengjibianhao">
              <el-input v-model="ruleForm.dengjibianhao" placeholder="登记编号" disabled></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="学号" prop="xuehao">
            <el-select  @change="xuehaoChange" v-model="ruleForm.xuehao" placeholder="请选择学号">
              <el-option
                  v-for="(item,index) in xuehaoOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="姓名" prop="xingming">
            <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" clearable :disabled=" false  ||ro.xingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="班级" prop="banji">
            <el-input v-model="ruleForm.banji" 
                placeholder="班级" clearable :disabled=" false  ||ro.banji"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="手机号" prop="shoujihao">
            <el-input v-model="ruleForm.shoujihao" 
                placeholder="手机号" clearable :disabled=" false  ||ro.shoujihao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="就业单位" prop="jiuyedanwei">
            <el-input v-model="ruleForm.jiuyedanwei" 
                placeholder="就业单位" clearable :disabled=" false  ||ro.jiuyedanwei"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="统一社会信用代码" prop="tongyishehuixinyongdaima">
            <el-input v-model.number="ruleForm.tongyishehuixinyongdaima" 
                placeholder="统一社会信用代码" clearable :disabled=" false  ||ro.tongyishehuixinyongdaima"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="所在地" prop="suozaidi">
            <el-input v-model="ruleForm.suozaidi" 
                placeholder="所在地" clearable :disabled=" false  ||ro.suozaidi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="单位行业" prop="danweixingye">
            <el-input v-model="ruleForm.danweixingye" 
                placeholder="单位行业" clearable :disabled=" false  ||ro.danweixingye"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="单位性质" prop="danweixingzhi">
            <el-input v-model="ruleForm.danweixingzhi" 
                placeholder="单位性质" clearable :disabled=" false  ||ro.danweixingzhi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="就业类别" prop="jiuyeleibie">
            <el-input v-model="ruleForm.jiuyeleibie" 
                placeholder="就业类别" clearable :disabled=" false  ||ro.jiuyeleibie"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="工作职位类别" prop="gongzuozhiweileibie">
            <el-input v-model="ruleForm.gongzuozhiweileibie" 
                placeholder="工作职位类别" clearable :disabled=" false  ||ro.gongzuozhiweileibie"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="就业材料类型" prop="jiuyecailiaoleixing">
            <el-input v-model="ruleForm.jiuyecailiaoleixing" 
                placeholder="就业材料类型" clearable :disabled=" false  ||ro.jiuyecailiaoleixing"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="就业材料" prop="jiuyecailiao">
            <file-upload
            tip="点击上传就业材料"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.jiuyecailiao?ruleForm.jiuyecailiao:''"
            @change="jiuyecailiaoUploadChange"
            ></file-upload>
          </el-form-item>  
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="单位联系电话" prop="danweilianxidianhua">
            <el-input v-model="ruleForm.danweilianxidianhua" 
                placeholder="单位联系电话" clearable :disabled=" false  ||ro.danweilianxidianhua"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="家庭联系电话" prop="jiatinglianxidianhua">
            <el-input v-model="ruleForm.jiatinglianxidianhua" 
                placeholder="家庭联系电话" clearable :disabled=" false  ||ro.jiatinglianxidianhua"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="备注" prop="beizhu">
            <el-input v-model="ruleForm.beizhu" 
                placeholder="备注" clearable :disabled=" false  ||ro.beizhu"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="登记时间" prop="dengjishijian">
              <el-date-picker
				  :disabled=" false  ||ro.dengjishijian"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.dengjishijian" 
                  type="date"
                  placeholder="登记时间">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="教师账号" prop="jiaoshizhanghao">
            <el-input v-model="ruleForm.jiaoshizhanghao" 
                placeholder="教师账号" clearable :disabled=" false  ||ro.jiaoshizhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="教师姓名" prop="jiaoshixingming">
            <el-input v-model="ruleForm.jiaoshixingming" 
                placeholder="教师姓名" clearable :disabled=" false  ||ro.jiaoshixingming"></el-input>
          </el-form-item>

      <el-form-item :style='{"padding":"0","margin":"0"}'>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#ffc054","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  type="primary" @click="onSubmit">提交</el-button>
        <el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#fff","borderRadius":"4px","background":"#000000","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
</div>
</template>

<script>
  export default {
    data() {
	  let self = this
      return {
        id: '',
        baseUrl: '',
        ro:{
				dengjibianhao : false,
				xuehao : false,
				xingming : false,
				banji : false,
				shoujihao : false,
				jiuyedanwei : false,
				tongyishehuixinyongdaima : false,
				suozaidi : false,
				danweixingye : false,
				danweixingzhi : false,
				jiuyeleibie : false,
				gongzuozhiweileibie : false,
				jiuyecailiaoleixing : false,
				jiuyecailiao : false,
				danweilianxidianhua : false,
				jiatinglianxidianhua : false,
				beizhu : false,
				dengjishijian : false,
				jiaoshizhanghao : false,
				jiaoshixingming : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          dengjibianhao: this.getUUID(),
          xuehao: '',
          xingming: '',
          banji: '',
          shoujihao: '',
          jiuyedanwei: '',
          tongyishehuixinyongdaima: '',
          suozaidi: '',
          danweixingye: '',
          danweixingzhi: '',
          jiuyeleibie: '',
          gongzuozhiweileibie: '',
          jiuyecailiaoleixing: '',
          jiuyecailiao: '',
          danweilianxidianhua: '',
          jiatinglianxidianhua: '',
          beizhu: '',
          dengjishijian: '',
          jiaoshizhanghao: '',
          jiaoshixingming: '',
        },
        xuehaoOptions: [],


        rules: {
          dengjibianhao: [
          ],
          xuehao: [
          ],
          xingming: [
          ],
          banji: [
          ],
          shoujihao: [
          ],
          jiuyedanwei: [
          ],
          tongyishehuixinyongdaima: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
          ],
          suozaidi: [
          ],
          danweixingye: [
          ],
          danweixingzhi: [
          ],
          jiuyeleibie: [
          ],
          gongzuozhiweileibie: [
          ],
          jiuyecailiaoleixing: [
          ],
          jiuyecailiao: [
          ],
          danweilianxidianhua: [
            { validator: this.$validate.isMobile, trigger: 'blur' },
          ],
          jiatinglianxidianhua: [
            { validator: this.$validate.isMobile, trigger: 'blur' },
          ],
          beizhu: [
          ],
          dengjishijian: [
          ],
          jiaoshizhanghao: [
          ],
          jiaoshixingming: [
          ],
        },
		centerType: false,
      };
    },
    computed: {



    },
    components: {
    },
    created() {
		if(this.$route.query.centerType){
			this.centerType = true
		}
	  //this.bg();
      let type = this.$route.query.type ? this.$route.query.type : '';
      this.init(type);
      this.baseUrl = this.$config.baseUrl;
      this.ruleForm.dengjishijian = this.getCurDate()
    },
    methods: {
      getMakeZero(s) {
          return s < 10 ? '0' + s : s;
      },
      // 下载
      download(file){
        window.open(`${file}`)
      },
      // 初始化
      init(type) {
        this.type = type;
        if(type=='cross'){
          var obj = JSON.parse(localStorage.getItem('crossObj'));
          for (var o in obj){
            if(o=='dengjibianhao'){
              this.ruleForm.dengjibianhao = obj[o];
              this.ro.dengjibianhao = true;
              continue;
            }
            if(o=='xuehao'){
              this.ruleForm.xuehao = obj[o];
              this.ro.xuehao = true;
              continue;
            }
            if(o=='xingming'){
              this.ruleForm.xingming = obj[o];
              this.ro.xingming = true;
              continue;
            }
            if(o=='banji'){
              this.ruleForm.banji = obj[o];
              this.ro.banji = true;
              continue;
            }
            if(o=='shoujihao'){
              this.ruleForm.shoujihao = obj[o];
              this.ro.shoujihao = true;
              continue;
            }
            if(o=='jiuyedanwei'){
              this.ruleForm.jiuyedanwei = obj[o];
              this.ro.jiuyedanwei = true;
              continue;
            }
            if(o=='tongyishehuixinyongdaima'){
              this.ruleForm.tongyishehuixinyongdaima = obj[o];
              this.ro.tongyishehuixinyongdaima = true;
              continue;
            }
            if(o=='suozaidi'){
              this.ruleForm.suozaidi = obj[o];
              this.ro.suozaidi = true;
              continue;
            }
            if(o=='danweixingye'){
              this.ruleForm.danweixingye = obj[o];
              this.ro.danweixingye = true;
              continue;
            }
            if(o=='danweixingzhi'){
              this.ruleForm.danweixingzhi = obj[o];
              this.ro.danweixingzhi = true;
              continue;
            }
            if(o=='jiuyeleibie'){
              this.ruleForm.jiuyeleibie = obj[o];
              this.ro.jiuyeleibie = true;
              continue;
            }
            if(o=='gongzuozhiweileibie'){
              this.ruleForm.gongzuozhiweileibie = obj[o];
              this.ro.gongzuozhiweileibie = true;
              continue;
            }
            if(o=='jiuyecailiaoleixing'){
              this.ruleForm.jiuyecailiaoleixing = obj[o];
              this.ro.jiuyecailiaoleixing = true;
              continue;
            }
            if(o=='jiuyecailiao'){
              this.ruleForm.jiuyecailiao = obj[o];
              this.ro.jiuyecailiao = true;
              continue;
            }
            if(o=='danweilianxidianhua'){
              this.ruleForm.danweilianxidianhua = obj[o];
              this.ro.danweilianxidianhua = true;
              continue;
            }
            if(o=='jiatinglianxidianhua'){
              this.ruleForm.jiatinglianxidianhua = obj[o];
              this.ro.jiatinglianxidianhua = true;
              continue;
            }
            if(o=='beizhu'){
              this.ruleForm.beizhu = obj[o];
              this.ro.beizhu = true;
              continue;
            }
            if(o=='dengjishijian'){
              this.ruleForm.dengjishijian = obj[o];
              this.ro.dengjishijian = true;
              continue;
            }
            if(o=='jiaoshizhanghao'){
              this.ruleForm.jiaoshizhanghao = obj[o];
              this.ro.jiaoshizhanghao = true;
              continue;
            }
            if(o=='jiaoshixingming'){
              this.ruleForm.jiaoshixingming = obj[o];
              this.ro.jiaoshixingming = true;
              continue;
            }
          }
        }else if(type=='edit'){
			this.info()
		}
        // 获取用户信息
        this.$http.get(this.userTableName + '/session', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            var json = res.data.data;
            if((json.xuehao!=''&&json.xuehao) || json.xuehao==0){
                this.ruleForm.xuehao = json.xuehao
            }
            if((json.xingming!=''&&json.xingming) || json.xingming==0){
                this.ruleForm.xingming = json.xingming
            }
            if((json.banji!=''&&json.banji) || json.banji==0){
                this.ruleForm.banji = json.banji
            }
            if((json.shoujihao!=''&&json.shoujihao) || json.shoujihao==0){
                this.ruleForm.shoujihao = json.shoujihao
            }
            if((json.jiaoshizhanghao!=''&&json.jiaoshizhanghao) || json.jiaoshizhanghao==0){
                this.ruleForm.jiaoshizhanghao = json.jiaoshizhanghao
            }
            if((json.jiaoshixingming!=''&&json.jiaoshixingming) || json.jiaoshixingming==0){
                this.ruleForm.jiaoshixingming = json.jiaoshixingming
            }
          }
        });
        this.$http.get('option/xuesheng/xuehao', {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.xuehaoOptions = res.data.data;
          }
        });

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },
      // 下二随
      xuehaoChange () {
        this.$http.get('follow/xuesheng/xuehao?columnValue=' + this.ruleForm.xuehao, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            if(res.data.data.xingming){
              this.ruleForm.xingming = res.data.data.xingming
            }
            if(res.data.data.banji){
              this.ruleForm.banji = res.data.data.banji
            }
            if(res.data.data.shoujihao){
              this.ruleForm.shoujihao = res.data.data.shoujihao
            }
          }
        });
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`jiuyexinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

			if(this.ruleForm.dengjibianhao){
				this.ruleForm.dengjibianhao = String(this.ruleForm.dengjibianhao)
			}
			//更新跨表属性
			var crossuserid;
			var crossrefid;
			var crossoptnum;
			this.$refs["ruleForm"].validate(valid => {
				if(valid) {
					if(this.type=='cross'){
						var statusColumnName = localStorage.getItem('statusColumnName');
						var statusColumnValue = localStorage.getItem('statusColumnValue');
						if(statusColumnName && statusColumnName!='') {
							var obj = JSON.parse(localStorage.getItem('crossObj'));
							if(!statusColumnName.startsWith("[")) {
								for (var o in obj){
									if(o==statusColumnName){
										obj[o] = statusColumnValue;
									}
								}
								var table = localStorage.getItem('crossTable');
								this.$http.post(table+'/update', obj).then(res => {});
							} else {
								crossuserid=Number(localStorage.getItem('frontUserid'));
								crossrefid=obj['id'];
								crossoptnum=localStorage.getItem('statusColumnName');
								crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
							}
						}
					}
					if(crossrefid && crossuserid) {
						this.ruleForm.crossuserid=crossuserid;
						this.ruleForm.crossrefid=crossrefid;
						var params = {
							page: 1,
							limit: 10,
							crossuserid:crossuserid,
							crossrefid:crossrefid,
						}
						this.$http.get('jiuyexinxi/list', {
							params: params
						}).then(res => {
							if(res.data.data.total>=crossoptnum) {
								this.$message({
									message: localStorage.getItem('tips'),
									type: 'error',
									duration: 1500,
								});
								return false;
							} else {
								// 跨表计算


								this.$http.post(`jiuyexinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
									if (res.data.code == 0) {
										this.$message({
											message: '操作成功',
											type: 'success',
											duration: 1500,
											onClose: () => {
												this.$router.go(-1);
											}
										});
									} else {
										this.$message({
											message: res.data.msg,
											type: 'error',
											duration: 1500
										});
									}
								});
							}
						});
					} else {


						this.$http.post(`jiuyexinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
							if (res.data.code == 0) {
								this.$message({
									message: '操作成功',
									type: 'success',
									duration: 1500,
									onClose: () => {
										this.$router.go(-1);
									}
								});
							} else {
								this.$message({
									message: res.data.msg,
									type: 'error',
									duration: 1500
								});
							}
						});
					}
				}
			});
		},
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		// 返回
		back() {
			this.$router.go(-1);
		},
      jiuyecailiaoUploadChange(fileUrls) {
          this.ruleForm.jiuyecailiao = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
    }
  };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  padding: 0 10px 0 0;
	  color: #000000;
	  font-weight: 500;
	  width: 110px;
	  font-size: 14px;
	  line-height: 40px;
	  text-align: right;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 110px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input__inner {
		text-align: left;
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 0 12px;
	  outline: none;
	  color: #000000;
	  width: 400px;
	  font-size: 14px;
	  height: 40px;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__decrease {
		display: none;
	}
	.add-update-preview .el-input-number /deep/ .el-input-number__increase {
		display: none;
	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 0 10px;
	  outline: none;
	  color: #000000;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 0 10px 0 30px;
	  outline: none;
	  color: #000000;
	  width: 200px;
	  font-size: 14px;
	  height: 40px;
	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  border: 1px dashed #000;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000000;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  border: 1px dashed #000;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000000;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  border: 1px dashed #000;
	  cursor: pointer;
	  border-radius: 6px;
	  color: #000000;
	  width: 80px;
	  font-size: 32px;
	  line-height: 80px;
	  text-align: center;
	  height: 80px;
	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  border: 1px solid #000000;
	  border-radius: 4px;
	  padding: 12px;
	  outline: none;
	  color: #000000;
	  width: 400px;
	  font-size: 14px;
	  height: 120px;
	}
</style>
