<script lang="ts" setup>
  import Menu from "@/layout/aside/Menu.vue";
  import Collapse from "./header/Collapse.vue"
  import BreadCrumb from "@/layout/header/BreadCrumb.vue";
</script>

<template>
  <div style="height: 100%">
    <el-container class="mycontainer">
      <!--侧边栏-->
      <el-aside class="aside" width="auto">
        <Menu/>
      </el-aside>
      <el-container>
        <!--顶栏-->
        <el-header class="header">
          <Collapse></Collapse>
          <BreadCrumb></BreadCrumb>
        </el-header>
        <el-main class="mymain">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
  .mycontainer {
    height: 100%;
    .aside {

    }

    .header {
      background-color: #334154;
      display: flex;
      align-items: center;
      color: #FFF;
    }

    .mymain {

    }
  }
</style>