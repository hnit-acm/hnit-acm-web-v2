<template>
  <a-card title="排行榜">
    <a-space direction="vertical" align="center" size="middle">
      <a-space direction="vertical">
        <a-badge :count="1" :number-style="{ backgroundColor: 'red',width:'2em',height:'2em',borderRadius:'1em'}">
          <a-avatar :size="64">
            <template v-slot:icon>
              <UserOutlined/>
            </template>
          </a-avatar>
        </a-badge>
        <span>用户名</span>
      </a-space>
      <a-space :size="40">
        <a-space direction="vertical">
          <a-badge :count="2" :number-style="{ backgroundColor: 'orange',width:'2em',height:'2em',borderRadius:'1em'}">
            <a-avatar :size="54"></a-avatar>
          </a-badge>
          <span>用户名</span>
        </a-space>

        <a-space direction="vertical">
          <a-badge :count="3" :number-style="{ backgroundColor: 'blue',width:'2em',height:'2em',borderRadius:'1em'}">
            <a-avatar :size="44"></a-avatar>
          </a-badge>
          <span>用户名</span>
        </a-space>

      </a-space>
      <div style="display:flex;flex-direction: column;">
        <a-space direction="vertical" align="center" size="small">
          <div v-for="(i) in ranklist" :key="i">
            <a-space>
              <a-badge :count="i+3"
                       :number-style="{textAlign:'center', backgroundColor: 'red',width:'2em',height:'2em',borderRadius:'1em'}"></a-badge>
              <a-avatar :size="36"></a-avatar>
              <span>用户名</span>
              <span>做题数</span>
              <span>正确率</span>
            </a-space>

          </div>
        </a-space>
      </div>
    </a-space>
  </a-card>


</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "RankList",
  data() {
    return {
      ranklist: [
        1, 2, 3, 4, 5, 6, 7
      ]
    }
  }
})

</script>

<style scoped>

</style>
