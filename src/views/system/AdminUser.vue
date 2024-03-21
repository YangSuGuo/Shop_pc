<script lang="ts" setup>
import {reactive, ref} from "vue";
import SysDialog from "@/components/SysDialog.vue";
import useDialog from "@/hooks/useDialog";

import type {FormInstance} from "element-plus";

const addRef = ref<FormInstance>();
const {dialog, onClose,} = useDialog();

const searchParm = reactive({
  nickName: "",
});

const addModel = reactive({
  userId: "",
  username: "",
  password: "",
  nickName: "",
  phone: "",
  sex: "",
  status: "",
});
const addBtn = () => {
  dialog.height = 300;
  dialog.visible = true;
};

const rulse = reactive({
  username: [{required: true, message: '请输入登录账号', trigger: 'blur'}],
  password: [{required: true, message: '请输入登录密码', trigger: 'blur'}],
  nickName: [{required: true, message: '请输入名字', trigger: 'blur'}],
  phone: [{required: true, message: '请输入电话', trigger: 'blur'}],
  sex: [{required: true, message: '请选择性别', trigger: 'blur'}],
});
const commit = () => {
  addRef.value?.validate((valid) => {
    if (valid) {
      dialog.visible = false;
    }
  });
};

</script>

<template>
  <el-main>
    <el-form :inline="true" :model="searchParm" class="demo-form-inline" size="default">
      <el-form-item>
        <el-input v-model="searchParm.nickName" placeholder="请输入姓名"/>
      </el-form-item>
      <el-form-item>
        <el-button class="ml-5" type="primary">搜索</el-button>
        <el-button type="danger" icon="Close" plain>重置</el-button>
        <el-button class="ml-5" type="primary" icon="Plus" @click="addBtn">新增</el-button>
      </el-form-item>
    </el-form>
    <SysDialog
        :title="dialog.title"
        :width="dialog.width"
        :height="dialog.height"
        :visible="dialog.visible"
        @on-close="onClose"
        @on-confirm="commit">
      <template v-slot:content>
        <el-form :model="addModel" :rules="rulse" ref="addRef" label-width="auto" label-position="left">
          <el-form-item label="姓名" prop="nickName">
            <el-input v-model="addModel.nickName"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="addModel.sex">
              <el-radio :label="0">男</el-radio>
              <el-radio :label="1">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="电话" prop="phone">
            <el-input v-model="addModel.phone"></el-input>
          </el-form-item>
          <el-form-item label="登录账户" prop="username">
            <el-input v-model="addModel.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="addModel.password"></el-input>
          </el-form-item>
          <el-form-item label="状态" prop="status">
            <el-radio-group v-model="addModel.status">
              <el-radio :label="0">启用</el-radio>
              <el-radio :label="1">停用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </template>
    </SysDialog>
  </el-main>
</template>

<style lang="scss" scoped>

</style>