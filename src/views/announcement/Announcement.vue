<script lang="ts" setup>
import List from "/@/views/announcement/List.vue"

import {onUpdated, ref, onMounted} from 'vue'
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb"
import {usePageBannerInject} from "/@/composables/Home/usePageBanner"
import {useRoute} from "vue-router"
import {useListProvide} from "/@/composables/Home/Announcement/useList"

// 配置首页面包屑
const breadcrumbCtx = useBreadcrumbInject()
onMounted(() => {
  breadcrumbCtx.setVisible(true)
})
// 配置页面横幅
const pb = usePageBannerInject()
onUpdated(() => {
  pb.refresh()
})

// 本页面相关
const listCtx = ref(useListProvide())

const data =
    [
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

</script>

<template lang="pug">
a-row(type="flex" style={marginTop:'1em'} align="center")
  a-col(:xs="24" :sm="20" :lg="20" :xxl="15")
    router-view()/
</template>


<style scoped>

</style>
