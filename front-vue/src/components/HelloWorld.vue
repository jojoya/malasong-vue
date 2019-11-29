<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <el-form :inline="true" :model="limitForm" :rules="rules" ref="limitForm" class="demo-form-inline">
      <el-form-item label="消费端" prop="clientNode">
        <el-select v-model="limitForm.clientNode" placeholder="请选择" style="width: 150px">
          <el-option
            v-for="item in options"
            :key="item.label"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="限值" prop="limitTime">
        <el-input-number v-model="limitForm.limitTime" @change="handleChange" :min="0" :max="100" :step="1"  style="width: 150px"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('limitForm')">保存</el-button>
        <el-button @click="resetForm('limitForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data () {
            return {
                msg: '编程马拉松 - 限流',
                options: [{
                    label: 'A'
                }, {
                    label: 'B'
                }],
                limitForm:{
                    clientNode: '',
                    limitTime: 0
                },
                rules: {
                    clientNode: [
                        { required: true, message: '请选择消费端', trigger: 'blur' }
                    ],
                    limitTime: [
                        { required: true, message: '请设定限时', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert(JSON.stringify(this.limitForm));
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleChange(value) {
                console.log(value);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
