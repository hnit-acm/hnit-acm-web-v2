<script lang="ts" setup>
import {useRoute} from "vue-router";
import PageLayout from "@/views/layout/PageLayout.vue"
import { pageLayout } from '@/views/layout/layout';
import {useMarkdown} from "../../composables/useMarkdown";
import RankList from "@/views/common/RankList.vue";

const route = useRoute()
const md = useMarkdown("## 比赛1 \n 你可以选择难度为1或者难度为2的题目  \n系统将会随机分配20题  \n## 测试 \n 杰卡斯八度空间巴萨的街道办就卡死都不肯")

</script>

<template lang="pug">
page-layout(v-bind:layout="pageLayout" space)
  el-card
    el-image(src="https://www.baidu.com/img/flexible/logo/pc/result.png")
  el-card
    el-tabs(tab-position="left")
      el-tab-pane(label="介绍")
        .content.text-align-left(v-html="md.content.value")
      el-tab-pane(label="排行榜")
        rank-list(data="[]")
</template>

<style lang="stylus" scoped>

</style>
