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
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="学号" prop="xuehao">
            <el-input v-model="ruleForm.xuehao" 
                placeholder="学号" clearable :disabled=" false  ||ro.xuehao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="姓名" prop="xingming">
            <el-input v-model="ruleForm.xingming" 
                placeholder="姓名" clearable :disabled=" false  ||ro.xingming"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="性别" prop="xingbie">
            <el-input v-model="ruleForm.xingbie" 
                placeholder="性别" clearable :disabled=" false  ||ro.xingbie"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="手机号" prop="shoujihao">
            <el-input v-model="ruleForm.shoujihao" 
                placeholder="手机号" clearable :disabled=" false  ||ro.shoujihao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="头像" v-if="type!='cross' || (type=='cross' && !ro.touxiang)" prop="touxiang">
            <file-upload
            tip="点击上传头像"
            action="file/upload"
            :limit="3"
            :multiple="true"
            :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
            @change="touxiangUploadChange"
            ></file-upload>
          </el-form-item>
            <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' class="upload" v-else label="头像" prop="touxiang">
                <img v-if="ruleForm.touxiang.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.touxiang.split(',')[0]" width="100" height="100">
                <img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.touxiang.split(',')" :src="baseUrl+item" width="100" height="100">
            </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="专业" prop="zhuanye">
            <el-input v-model="ruleForm.zhuanye" 
                placeholder="专业" clearable :disabled=" false  ||ro.zhuanye"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="教师账号" prop="jiaoshizhanghao">
            <el-input v-model="ruleForm.jiaoshizhanghao" 
                placeholder="教师账号" clearable :disabled=" false  ||ro.jiaoshizhanghao"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="学历" prop="xueli">
            <el-input v-model="ruleForm.xueli" 
                placeholder="学历" clearable :disabled=" false  ||ro.xueli"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="出生日期" prop="chushengriqi">
              <el-date-picker
				  :disabled=" false  ||ro.chushengriqi"
                  format="yyyy 年 MM 月 dd 日"
                  value-format="yyyy-MM-dd"
                  v-model="ruleForm.chushengriqi" 
                  type="date"
                  placeholder="出生日期">
              </el-date-picker> 
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="专业代码" prop="zhuanyedaima">
            <el-input v-model="ruleForm.zhuanyedaima" 
                placeholder="专业代码" clearable :disabled=" false  ||ro.zhuanyedaima"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="生源地" prop="shengyuandi">
            <el-input v-model="ruleForm.shengyuandi" 
                placeholder="生源地" clearable :disabled=" false  ||ro.shengyuandi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="就业去向" prop="jiuyequxiang">
            <el-input v-model="ruleForm.jiuyequxiang" 
                placeholder="就业去向" clearable :disabled=" false  ||ro.jiuyequxiang"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="单位名称" prop="danweimingcheng">
            <el-input v-model="ruleForm.danweimingcheng" 
                placeholder="单位名称" clearable :disabled=" false  ||ro.danweimingcheng"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="所在地" prop="suozaidi">
            <el-input v-model="ruleForm.suozaidi" 
                placeholder="所在地" clearable :disabled=" false  ||ro.suozaidi"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="行业" prop="xingye">
            <el-input v-model="ruleForm.xingye" 
                placeholder="行业" clearable :disabled=" false  ||ro.xingye"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="职业" prop="zhiye">
            <el-input v-model="ruleForm.zhiye" 
                placeholder="职业" clearable :disabled=" false  ||ro.zhiye"></el-input>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}'  label="升学状态" prop="shengxuezhuangtai">
            <el-select v-model="ruleForm.shengxuezhuangtai" placeholder="请选择升学状态" :disabled=" false  ||ro.shengxuezhuangtai" >
              <el-option
                  v-for="(item,index) in shengxuezhuangtaiOptions"
                  :key="index"
                  :label="item"
                  :value="item">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :style='{"padding":"10px","margin":"0 0 10px","background":"#fff"}' label="简历文件" prop="jianliwenjian">
            <file-upload
            tip="点击上传简历文件"
            action="file/upload"
            :limit="1"
            :multiple="true"
            :fileUrls="ruleForm.jianliwenjian?ruleForm.jianliwenjian:''"
            @change="jianliwenjianUploadChange"
            ></file-upload>
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
				xuehao : false,
				xingming : false,
				xingbie : false,
				shoujihao : false,
				touxiang : false,
				zhuanye : false,
				jiaoshizhanghao : false,
				xueli : false,
				chushengriqi : false,
				zhuanyedaima : false,
				shengyuandi : false,
				jiuyequxiang : false,
				danweimingcheng : false,
				suozaidi : false,
				xingye : false,
				zhiye : false,
				shengxuezhuangtai : false,
				jianliwenjian : false,
				storeupnum : false,
        },
        type: '',
        userTableName: localStorage.getItem('UserTableName'),
        ruleForm: {
          xuehao: '',
          xingming: '',
          xingbie: '',
          shoujihao: '',
          touxiang: '',
          zhuanye: '',
          jiaoshizhanghao: '',
          xueli: '',
          chushengriqi: '',
          zhuanyedaima: '',
          shengyuandi: '',
          jiuyequxiang: '',
          danweimingcheng: '',
          suozaidi: '',
          xingye: '',
          zhiye: '',
          shengxuezhuangtai: '',
          jianliwenjian: '',
          storeupnum: '',
        },
        shengxuezhuangtaiOptions: [],


        rules: {
          xuehao: [
          ],
          xingming: [
          ],
          xingbie: [
          ],
          shoujihao: [
          ],
          touxiang: [
          ],
          zhuanye: [
          ],
          jiaoshizhanghao: [
          ],
          xueli: [
          ],
          chushengriqi: [
          ],
          zhuanyedaima: [
          ],
          shengyuandi: [
          ],
          jiuyequxiang: [
          ],
          danweimingcheng: [
          ],
          suozaidi: [
          ],
          xingye: [
          ],
          zhiye: [
          ],
          shengxuezhuangtai: [
          ],
          jianliwenjian: [
          ],
          storeupnum: [
            { validator: this.$validate.isIntNumer, trigger: 'blur' },
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
      this.ruleForm.chushengriqi = this.getCurDate()
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
            if(o=='xingbie'){
              this.ruleForm.xingbie = obj[o];
              this.ro.xingbie = true;
              continue;
            }
            if(o=='shoujihao'){
              this.ruleForm.shoujihao = obj[o];
              this.ro.shoujihao = true;
              continue;
            }
            if(o=='touxiang'){
              this.ruleForm.touxiang = obj[o].split(",")[0];
              this.ro.touxiang = true;
              continue;
            }
            if(o=='zhuanye'){
              this.ruleForm.zhuanye = obj[o];
              this.ro.zhuanye = true;
              continue;
            }
            if(o=='jiaoshizhanghao'){
              this.ruleForm.jiaoshizhanghao = obj[o];
              this.ro.jiaoshizhanghao = true;
              continue;
            }
            if(o=='xueli'){
              this.ruleForm.xueli = obj[o];
              this.ro.xueli = true;
              continue;
            }
            if(o=='chushengriqi'){
              this.ruleForm.chushengriqi = obj[o];
              this.ro.chushengriqi = true;
              continue;
            }
            if(o=='zhuanyedaima'){
              this.ruleForm.zhuanyedaima = obj[o];
              this.ro.zhuanyedaima = true;
              continue;
            }
            if(o=='shengyuandi'){
              this.ruleForm.shengyuandi = obj[o];
              this.ro.shengyuandi = true;
              continue;
            }
            if(o=='jiuyequxiang'){
              this.ruleForm.jiuyequxiang = obj[o];
              this.ro.jiuyequxiang = true;
              continue;
            }
            if(o=='danweimingcheng'){
              this.ruleForm.danweimingcheng = obj[o];
              this.ro.danweimingcheng = true;
              continue;
            }
            if(o=='suozaidi'){
              this.ruleForm.suozaidi = obj[o];
              this.ro.suozaidi = true;
              continue;
            }
            if(o=='xingye'){
              this.ruleForm.xingye = obj[o];
              this.ro.xingye = true;
              continue;
            }
            if(o=='zhiye'){
              this.ruleForm.zhiye = obj[o];
              this.ro.zhiye = true;
              continue;
            }
            if(o=='shengxuezhuangtai'){
              this.ruleForm.shengxuezhuangtai = obj[o];
              this.ro.shengxuezhuangtai = true;
              continue;
            }
            if(o=='jianliwenjian'){
              this.ruleForm.jianliwenjian = obj[o];
              this.ro.jianliwenjian = true;
              continue;
            }
            if(o=='storeupnum'){
              this.ruleForm.storeupnum = obj[o];
              this.ro.storeupnum = true;
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
            if((json.xingbie!=''&&json.xingbie) || json.xingbie==0){
                this.ruleForm.xingbie = json.xingbie
            }
            if((json.shoujihao!=''&&json.shoujihao) || json.shoujihao==0){
                this.ruleForm.shoujihao = json.shoujihao
            }
            if((json.touxiang!=''&&json.touxiang) || json.touxiang==0){
                this.ruleForm.touxiang = json.touxiang
            }
            if((json.zhuanye!=''&&json.zhuanye) || json.zhuanye==0){
                this.ruleForm.zhuanye = json.zhuanye
            }
            if((json.jiaoshizhanghao!=''&&json.jiaoshizhanghao) || json.jiaoshizhanghao==0){
                this.ruleForm.jiaoshizhanghao = json.jiaoshizhanghao
            }
          }
        });
        this.shengxuezhuangtaiOptions = "待就业,已就业".split(',')

		if (localStorage.getItem('raffleType') && localStorage.getItem('raffleType') != null) {
			localStorage.removeItem('raffleType')
			setTimeout(() => {
				this.onSubmit()
			}, 300)
		}
      },

    // 多级联动参数
      // 多级联动参数
      info() {
        this.$http.get(`gerenxinxi/detail/${this.$route.query.id}`, {emulateJSON: true}).then(res => {
          if (res.data.code == 0) {
            this.ruleForm = res.data.data;
          }
        });
      },
      // 提交
      onSubmit() {

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
						this.$http.get('gerenxinxi/list', {
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


								this.$http.post(`gerenxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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


						this.$http.post(`gerenxinxi/${this.ruleForm.id?'update':this.centerType?'save':'add'}`, this.ruleForm).then(res => {
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
      touxiangUploadChange(fileUrls) {
          this.ruleForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
      },
      jianliwenjianUploadChange(fileUrls) {
          this.ruleForm.jianliwenjian = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");;
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
