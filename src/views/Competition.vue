<template>
  <div
      style="width: 100%;height: auto;background: aqua;display: flex;align-items: center;flex-direction: column;overflow: hidden;">
    <img style="width: auto;height: auto;background: aqua;"
         src="https://ali-cdn.educoder.net/images/avatars/LaboratorySetting/1_competition_banner?t=1591241723">
  </div>
  <a-row type="flex" style="margin-top: 1em;" align="center">
    <a-col :xs="24" :sm="20" :lg="20" :xxl="15">
      <a-tabs @change="callback" :tabBarStyle="{textAlign:'left'}">
        <a-tab-pane key="1" tab="全部">
          <competition-list></competition-list>
<!--          // todo Competition view pagination-->
        </a-tab-pane>
        <a-tab-pane key="2" tab="即将发布" force-render>
          <competition-list></competition-list>
        </a-tab-pane>
        <a-tab-pane key="3" tab="进行中">
          <competition-list></competition-list>
        </a-tab-pane>
        <a-tab-pane key="4" tab="往期比赛">
          <competition-list></competition-list>
        </a-tab-pane>
      </a-tabs>
    </a-col>
  </a-row>
</template>


<script lang="ts">
import {defineComponent} from 'vue';
import CompetitionList from '/@/components/competition/CompetitionList.vue';
import useBreadcrumb from '/@/composables/useBreadcrumb';

export default defineComponent({
  name: "Competition",
  components: {CompetitionList},
  setup(){
    useBreadcrumb()
    return {
    }
  },
  data() {
    return {

    };
  },
  mounted() {

  }

})
</script>

<style scoped>

</style>
