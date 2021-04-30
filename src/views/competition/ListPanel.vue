<script lang="ts" setup>
import CompetitionList from '@/views/competition/List.vue'
import {useCompetitionList} from "@/repositories/useCompetition";
import {onMounted, ref, watch} from "vue";
import PageLayout from "@/views/layout/PageLayout.vue"
import { pageLayout } from '@/views/layout/layout';

const allList = useCompetitionList()
const willList = useCompetitionList()
const runningList = useCompetitionList()
const finishList = useCompetitionList()

const page = {
  cur: ref(1),
  size: ref(10),
  sizeChange: (val: number) => {
    request()
  },
  currentChange: (val: number) => {
    page.cur.value=val
    request()
  }
}

const initPage = () => {
  page.cur.value = 1
  page.size.value = 10
}


const tabIndex = ref('')
const request = () => {
  switch (tabIndex.value) {
    case "all": {
      allList.getList(page.size.value, page.cur.value)
      break
    }
    case "will": {
      willList.getList(page.size.value, page.cur.value)
      break
    }
    case "running": {
      runningList.getList(page.size.value, page.cur.value)
      break
    }
    case "finish": {
      finishList.getList(page.size.value, page.cur.value)
      break
    }
  }
}
const tabClick = (item) => {
  initPage()
  request()
}


onMounted(() => {
  tabIndex.value = 'all'
  allList.getList(page.size.value, page.cur.value)
})


</script>

<template lang="pug">
page-layout(v-bind:layout="pageLayout")
  //el-row(type="flex" style="margin-top: 1em;" justify="center")
  //  el-col(:xs="24" :sm="24" :md="24" :lg="24" :xl="20")
  el-tabs(v-model="tabIndex" :stretch="true" @tab-click="tabClick")
    el-tab-pane(label="全部" name="all")
      competition-list.width-90per(:data="allList.list.value")/
    el-tab-pane(label="即将发布" name="will")
      competition-list.width-90per(:data="willList.list.value")/
    el-tab-pane(label="进行中" name="running")
      competition-list.width-90per(:data="runningList.list.value")/
    el-tab-pane(label="往期比赛" name="finish")
      competition-list.width-90per(:data="finishList.list.value")/
  el-pagination(
    :current-page="page.cur"
    @size-change="page.sizeChange"
    @current-change="page.currentChange"
    :page-size="page.size"
    :page-sizes="[10, 20, 30, 50]"
    layout="total, prev, pager, next, jumper,sizes")
</template>

<style scoped>
</style>
