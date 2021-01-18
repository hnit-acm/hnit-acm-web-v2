<template>
  {{ params.id }}asdsadasdqdqw
</template>

<script lang="ts">

import {defineComponent, inject, onUnmounted, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useBreadcrumbInject} from "/@/composables/useBreadcrumb";
// todo 公告详情页
export default defineComponent({
  name: "AnnouncementContent",
  props: {
    id: () => 0 // 公告id，给后端使用
  },
  setup() {
    // 首页面包屑
    const {setVisible,push} = useBreadcrumbInject()
    setVisible(true)
    // 处理路由参数
    const {params, meta} = useRoute()
    // 本页面相关
    const {setListVisible} = inject("list")
    // setListVisible(false)
    onMounted(() => {
      setListVisible(false)
    })
    onUnmounted(()=>{
      setListVisible(true)
    })
    return {
      params,
      setVisible
    }
  },
  created(){
    console.log('1 created')
  },
  mounted(){
    console.log('1 mounted')

  },
  updated(){
    console.log('1 updated')

  },
  unmounted(){
    console.log('1 unmounted')
  }
})


</script>

<style scoped>

</style>
