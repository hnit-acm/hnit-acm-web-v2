<template>
  <h1>title</h1>
  <div v-html="content" class="content"></div>
  <div style="text-align: right;">
    Signature
  </div>

</template>

<script lang="ts">

import {defineComponent, inject, onUnmounted, onMounted, ref,} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb";
import {useListInject} from "/@/composables/Home/Announcement/useList";
import {useMarkdown} from "/@/composables/useMarkdown";
import {useAnnouceContent} from "/@/repositories/useAnnouncement";

// todo 公告详情页
export default defineComponent({
  name: "AnnouncementContent",
  props: {
    id: () => 0 // 公告id，给后端使用
  },
  setup() {
    // 首页面包屑
    const {setVisible, push} = useBreadcrumbInject()
    setVisible(true)
    // 处理路由参数
    const {params, meta} = useRoute()
    // 本页面相关
    const listCtx = useListInject()
    // setListVisible(false)
    onMounted(() => {
      listCtx.setVisible(false)
    })
    onUnmounted(() => {
      listCtx.setVisible(true)
    })
    const {get} = useAnnouceContent()
    let content = ref('')
    get(1).then(
        value => {
          console.log(value)
          content.value = useMarkdown(value).content.value
        }
    )
    return {
      params,
      listCtx,
      content
    }
  },
  data() {
    return {
      content: '123'
    }
  },
  methods: {},
  created() {
    console.log('1 created')
  },
  mounted() {
    console.log('1 mounted')

  },
  updated() {
    console.log('1 updated')

  },
  unmounted() {
    console.log('1 unmounted')
  }
})


</script>

<style lang="stylus" scoped>
.content
  text-align initial
  padding-left 2em
  padding-right 2em
  background #d0f5b6
</style>
