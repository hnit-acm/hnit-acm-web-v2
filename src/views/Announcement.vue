<template>
  <a-list
      v-if="listVisible"
      class="demo-loadmore-list"
      :loading="loading"
      item-layout="horizontal"
      :data-source="data"
  >
    <template v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template v-slot:title>
            <router-link :to="fullPath+'/'+item.id.toString()">{{ item.title }} {{ item.date }}</router-link>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
  <router-view></router-view>
</template>

<script lang="ts">
import {defineComponent, onUpdated, provide, ref, onMounted,onActivated} from 'vue'
import {useBreadcrumbInject} from "/@/composables/useBreadcrumb";
import {usePageBannerInject} from "/@/composables/usePageBanner";
import {useRoute} from "vue-router";

export default defineComponent({
  name: "Announcement",
  setup() {
    // 配置首页面包屑
    const {setVisible,refresh} = useBreadcrumbInject()
    setVisible(true)
    onUpdated(() => {
      refresh()
    })
    // 配置页面横幅
    const pb = usePageBannerInject()
    onUpdated(() => {
      pb.refresh()
    })
    // 处理路由相关
    const {fullPath} = useRoute()
    // 本页面相关
    const listVisible = ref(true)
    const setListVisible = (val:boolean)=>{
      listVisible.value = val
    }
    provide("list",{
      listVisible,
      setListVisible
    })
    return {
      fullPath,
      setVisible,
      listVisible
    }
  },
  data() {
    return {
      data: [
        {
          id: 1,
          title: '123',
          date: '2020-02-02'
        },
        {
          id: 2,
          title: '123',
          date: '2020-02-02'
        },
        {
          id: 3,
          title: '123',
          date: '2020-02-02'
        },
        {
          id: 3,
          title: '123',
          date: '2020-02-02'
        }
      ]
    }
  },
  created(){
    console.log('2 created')
  },
  mounted(){
    console.log('2 mounted')

  },
  updated(){
    console.log('2 updated')

  },
  unmounted(){
    console.log('2 unmounted')

  }
})
</script>

<style scoped>

</style>
