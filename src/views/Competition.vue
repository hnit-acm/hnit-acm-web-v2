<script lang="ts" setup>
import CompetitionList from '/@/components/competition/CompetitionList.vue';

import {defineComponent, onMounted} from 'vue';
import {useBreadcrumbInject} from '/@/composables/Home/useBreadcrumb';
import {usePageBannerInject} from "/@/composables/Home/usePageBanner";

const {setVisible} = useBreadcrumbInject()
onMounted(() => {
  setVisible(true)
})
const {refresh} = usePageBannerInject()
refresh()
</script>

<template lang="pug">
el-row(type="flex" style="margin-top: 1em;" justify="center")
  el-col(:xs="24" :sm="20" :lg="20" :xl="15")
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
