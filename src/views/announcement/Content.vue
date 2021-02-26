<script lang="ts" setup>

import {ref, defineProps,} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb";
import {useMarkdown} from "/@/composables/useMarkdown";
import {useAnnounceContent} from "/@/repositories/useAnnouncement";

const props = defineProps({id: () => 0})

// 首页面包屑
const {setVisible, push} = useBreadcrumbInject()
setVisible(true)
// 处理路由参数
const route = useRoute()
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

get(props.id ?? 0).then(
    (data) => {
      content.value = useMarkdown(data.text).content.value
      title.value = data.title
      route.meta.title = data.title
      route.path = route.fullPath
      push(route)
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
