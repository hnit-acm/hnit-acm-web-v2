<script lang="ts" setup>
import {onMounted} from 'vue'
import {usePageBannerInject} from "@/composables/Home/usePageBanner";
import {useBreadcrumbInject} from "@/composables/Home/useBreadcrumb";

const {setVisible} = useBreadcrumbInject()
onMounted(() => {
  setVisible(false)
})
usePageBannerInject()
</script>

<template lang="pug">
.about
  img(style={width: '20%', height: '20%'} src="../../assets/nav-logo-color.png")/
</template>
