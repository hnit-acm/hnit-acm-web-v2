<script lang="ts" setup>

import {onMounted} from 'vue';
import {useBreadcrumbInject} from '/@/composables/Home/useBreadcrumb';
import {usePageBannerInject} from "/@/composables/Home/usePageBanner";

const {setVisible} = useBreadcrumbInject()
onMounted(() => {
  setVisible(true)
})
const {refresh} = usePageBannerInject()
refresh()
</script>

<template lang="pug">
el-row(type="flex" align="center")
  el-col(:xs="24" :sm="24" :md="24" :lg="24" :xl="24")
    router-view/
</template>

<style scoped>

</style>
