<script lang="ts" setup>

import {ref, defineProps,getCurrentInstance} from 'vue';
import {useRoute} from 'vue-router';
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb";
import {useMarkdown} from "/@/composables/useMarkdown";
import {useAnnounceContent} from "/@/repositories/useAnnouncement";

const props = defineProps({id: () => 0})

// 首页面包屑
const {setVisible, push} = useBreadcrumbInject()
setVisible(true)
// 处理路由参数
const route = useRoute()

const {content,refresh} = useMarkdown('')

const {get} = useAnnounceContent()
const title = ref('')
const ctx =  getCurrentInstance()
get(props.id ?? 0).then(
    (data) => {
      refresh(data.text)
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
