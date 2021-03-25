<script lang="ts" setup>
import PageLayout from "@/views/layout/PageLayout.vue"
import { pageLayout } from '@/views/layout/layout';

import { defineComponent, onMounted } from 'vue';
import { useBreadcrumbInject } from "@/composables/Home/useBreadcrumb";
import { usePageBannerInject } from "@/composables/Home/usePageBanner";


const { setVisible } = useBreadcrumbInject()
onMounted(() => {
  setVisible(true)
})
const { } = usePageBannerInject()

const data = [
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
</script>

<template lang="pug">
page-layout(v-bind:layout="pageLayout")
  router-view/
</template>

<style scoped>
</style>
