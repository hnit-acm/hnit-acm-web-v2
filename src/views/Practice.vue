<template>
  <div
      style="width: 100%;height: auto;background: aqua;display: flex;align-items: center;flex-direction: column;overflow: hidden;">
    <img style="width: auto;height: auto;background: aqua;"
         src="https://ali-cdn.educoder.net/images/avatars/LaboratorySetting/1_competition_banner?t=1591241723">
  </div>
  <a-row type="flex" style="margin-top: 1em;" align="center">
    <a-col :xs="24" :sm="20" :lg="20" :xxl="15">
      <div style="display: flex;flex-direction: row; width: 100%; margin-bottom: 1em;align-items: flex-start;">
        <a-button>最新</a-button>
        <a-button>最热</a-button>
        <div style="width: 100%;"></div>
        <div style="display: flex;flex-direction: row;">
          <a-input></a-input>
          <a-button>搜索</a-button>
        </div>
      </div>
      <a-list :grid="{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 4, xxl: 4 }" :data-source="data">
        <template v-slot:renderItem="{ item }">
          <a-list-item>
            <a-card hoverable>
              <template v-slot:cover>
                <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              </template>
              <template class="ant-card-actions" v-slot:actions>
                <setting-outlined key="setting"/>
                <edit-outlined key="edit"/>
                <ellipsis-outlined key="ellipsis"/>
              </template>
              <a-card-meta :title="item.title" description="This is the description"></a-card-meta>
            </a-card>
          </a-list-item>
        </template>
      </a-list>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import useBreadcrumb from "/@/composables/useBreadcrumb";

export default defineComponent({
  name: "Practice",
  setup(){
    useBreadcrumb()
  },
  data() {
    return {
      data: [
        {
          title: 'Title 1',
        },
        {
          title: 'Title 2',
        },
        {
          title: 'Title 3',
        },
        {
          title: 'Title 4',
        },
        {
          title: 'Title 5',
        },
        {
          title: 'Title 6',
        },
      ]
    }
  }
})
</script>

<style scoped>

</style>
