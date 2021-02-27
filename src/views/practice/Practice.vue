<script lang="ts" setup>
import {defineComponent, onMounted} from 'vue';
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb";
import {usePageBannerInject} from "/@/composables/Home/usePageBanner";

const {setVisible} = useBreadcrumbInject()
onMounted(() => {
  setVisible(true)
})
const {} = usePageBannerInject()

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
el-row(type="flex" justify="center")
  el-col(:xs="24" :sm="24" :md="24" :lg="24" :xl="20")
    router-view/
</template>

<style scoped>

</style>
