<script lang="ts" setup>

</script>

<template lang="pug">
el-container
  el-aside
    el-menu
      el-submenu
        template(#title) 公告管理
        el-menu-item 首页走马灯
        el-menu-item 页面横幅
      el-submenu
        template(#title) 用户管理
        el-menu-item 首页走马灯
        el-menu-item 页面横幅
      el-submenu
        template(#title) 练习管理
        el-menu-item 首页走马灯
        el-menu-item 页面横幅
      el-submenu
        template(#title) 比赛管理
        el-menu-item 首页走马灯
        el-menu-item 页面横幅
      el-submenu
        template(#title) 系统设置
        el-menu-item 首页走马灯
        el-menu-item 页面横幅
        el-menu-item 关于我们
  el-container
    el-header
      | header
    el-main
      router-view/
</template>


<style scoped>

</style>