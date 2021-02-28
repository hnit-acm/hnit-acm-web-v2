<script lang="ts" setup>
import CompetitionList from '/@/views/competition/List.vue'
</script>

<template lang="pug">
el-row(type="flex" style="margin-top: 1em;" justify="center")
  el-col(:xs="24" :sm="24" :md="24" :lg="24" :xl="20")
    el-tabs(:stretch="true")
      el-tab-pane(label="全部")
        competition-list/
      el-tab-pane(label="即将发布")
        competition-list/
      el-tab-pane(label="进行中")
        competition-list/
      el-tab-pane(label="往期比赛")
        competition-list/
</template>

<style scoped>

</style>
