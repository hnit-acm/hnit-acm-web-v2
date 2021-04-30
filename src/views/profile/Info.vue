<script lang="ts" setup>
import PageLayout from "@/views/layout/PageLayout.vue"
import { pageLayout } from '@/views/layout/layout';
</script>

<template lang="pug">
page-layout(:layout="pageLayout" space)
  el-row
    el-card.border-all-radius-1em.width-30per.width-xs-100per
      el-avatar
      h1 Nekilc
      span 时间
    el-card.border-all-radius-1em.width-60per.width-xs-100per
      el-table()
</template>

<style lang="stylus" scoped>

</style>
