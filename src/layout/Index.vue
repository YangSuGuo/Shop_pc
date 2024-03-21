<script lang="ts" setup>

  import Menu from "@/layout/Menu.vue";
  import Collapse from "./Collapse.vue"
</script>

<template>
  <div style="height: 100%">
    <el-container class="mycontainer">
      <el-aside class="aside" width="auto">
        <Menu/>
      </el-aside>
      <el-container>
        <el-header class="header">
          <Collapse></Collapse>
        </el-header>
        <el-main class="mymain" style="background-color: #FFF">
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