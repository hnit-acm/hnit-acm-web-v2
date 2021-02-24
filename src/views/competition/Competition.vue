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
router-view/
</template>

<style scoped>

</style>
