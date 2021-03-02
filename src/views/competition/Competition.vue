<script lang="ts" setup>
import PageLayout from "@/views/layout/PageLayout.vue"
import {pageLayout} from '@/views/layout/layout'

import {onMounted} from 'vue';
import {useBreadcrumbInject} from '@/composables/Home/useBreadcrumb';
import {usePageBannerInject} from "@/composables/Home/usePageBanner";

const {setVisible} = useBreadcrumbInject()
onMounted(() => {
  setVisible(true)
})
const {refresh} = usePageBannerInject()
refresh()
</script>

<template lang="pug">
page-layout(v-bind:layout="pageLayout")
  router-view/
</template>

<style scoped>

</style>
