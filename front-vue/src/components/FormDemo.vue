<template>
  <div>
    <div class="demo-image">
      <div class="block">
        <el-image
          style="width: 100%; height: 100%"
          fit="cover"
          :src="imageSrc"
        ></el-image>
      </div>
    </div>
    <el-dialog
      title="张颖 · 账务"
      :visible.sync="dialogVisible"
      :show-close="false"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :lock-scroll="true"
      top="18%"
      width="450px"
      higth="200px">
      <el-form :model="formInline" class="demo-form-inline" label-width="70px">
        <el-form-item label="账号">
          <label slot="label">
            <el-popover
              placement="bottom-start"
              title=""
              width="200"
              trigger="hover">
              <div class="popover-content" v-html="popoverHtml"></div>
              <i class="el-icon-info" slot="reference"></i>
            </el-popover>
            账号:
          </label>
                <el-input v-model="formInline.user" placeholder="账号"  style="width: 250px" ></el-input>
        </el-form-item>
        <el-form-item label="密码">
<!--          <label slot="label">密&nbsp;&nbsp;&nbsp;&nbsp;码:</label>-->
          <el-input v-model="formInline.region" placeholder="密码"  style="width: 250px" ></el-input>
        </el-form-item>
      </el-form>
<!--      <footer>-->
        <el-row>
          <el-col span="12" :offset="12" align="right">
            <el-button @click="dialogVisible=true">注 册</el-button>
            <el-button @click="dialogVisible=true" type="primary">登 录</el-button>
          </el-col>
        </el-row>
<!--      </footer>-->
    </el-dialog>
  </div>
</template>

<script>

    import userPhoto from '@/assets/p3.jpg'

    export default {
        name: "FormDemo",
        data() {
            return {
                dialogVisible:true,
                formInline: {
                    user: '',
                    region: ''
                },
                imageSrc: userPhoto,
                visible: false,
                popoverHtml:"<li>wo shi H1.</li>"
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>

</style>
