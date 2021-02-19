<template lang="pug">
el-row

a-row(type="flex" justify="center" style="margin: 1% 2% 2% 2%;")
  a-col(:xs="24" :sm="24" :lg="24" :xxl="18")
    announce-box(style="height:100%;z-index:999;position: absolute;right: 0;opacity: 80%;background: #ea4949;color: white;")
    el-carousel
      el-carousel-item(v-for="(item) in [1,2,3,4]")
        .img-t {{item}}
a-row(type="flex" style="margin-top: 1em;margin: 2%;" justify="center")
  a-col(:xs="24" :sm="12" :lg="12" :xxl="9" style="padding-right: 0.5em;")
    rank-list/
  a-col(:xs="24" :sm="12" :lg="12" :xxl="9" style="padding-right: 0.5em;")
    rank-list/
</template>

<script lang="ts" setup>
import RankList from "/@/components/RankList.vue";
import AnnounceBox from "/@/components/AnnounceBox.vue";

import {defineComponent, onMounted} from 'vue';
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb";
import {usePageBannerInject} from "/@/composables/Home/usePageBanner";

const {setVisible} = useBreadcrumbInject()
onMounted(() => {
  setVisible(false)
})
const {} = usePageBannerInject()
</script>

<style lang="stylus" scoped>
.carousel
  height 100%
  background aquamarine

.img-t
  height 300px
</style>
