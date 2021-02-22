<script lang="ts" setup>

import {onUnmounted, onMounted, ref, defineProps,} from 'vue';
import {useRoute} from 'vue-router';
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb";
import {useListInject} from "/@/composables/Home/Announcement/useList";
import {useMarkdown} from "/@/composables/useMarkdown";
import {useAnnounceContent, AnnounceContent} from "/@/repositories/useAnnouncement";

const props = defineProps<{
  id:number
}>()

// 首页面包屑
const {setVisible, push} = useBreadcrumbInject()
setVisible(true)
// 处理路由参数
const {fullPath, meta} = useRoute()
// 本页面相关
// const listCtx = useListInject()
// setListVisible(false)
// onMounted(() => {
//   listCtx.setVisible(false)
// })
// onUnmounted(() => {
//   listCtx.setVisible(true)
// })
const {get} = useAnnounceContent()
const content = ref('')
const title = ref('')
get(props.id).then(
    (data: AnnounceContent) => {
      content.value = useMarkdown(data.text).content.value
      title.value = data.title
      meta.title = data.title
      console.log(data)

      push({
        breadcrumbName: title.value,
        path: fullPath
      })
    }
)


</script>

<template lang="pug">
  h1 {{title}}
  .content(v-html="content")
  .text-align-right Signature
</template>

<style lang="stylus" scoped>
@import "../../assets/stylus/main.styl"
.content
  text-align initial
  padding-left 2em
  padding-right 2em
  background #d0f5b6
</style>
