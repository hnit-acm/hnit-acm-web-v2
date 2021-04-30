<script lang="ts" setup>
import { onMounted } from 'vue'
import { usePageBannerInject } from "@/composables/Home/usePageBanner";
import { useMarkdown } from '@/composables/useMarkdown';
import PageLayout from '@/views/layout/PageLayout.vue';
import { pageLayout } from '@/views/layout/layout';

const { content, refresh } = useMarkdown('')
refresh("# 湖南工学院ACM队\n\n\n欢迎加入")

usePageBannerInject()
</script>

<template lang="pug">
page-layout(v-bind:layout="pageLayout")
  el-col()
    img(style="width: '20%';height: '20%'" src="../../assets/about-logo.png")
  el-col()
    div(v-html="content")
    el-button-group
      el-button() 软件组
      el-button() 算法组
      el-button() 机器人

</template>
