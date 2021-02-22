<script lang="ts" setup>
import RankList from "/@/components/RankList.vue";
import AnnounceBox,{AnnounceBoxProps} from "/@/components/AnnounceBox.vue";

import {defineComponent, onMounted} from 'vue';
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb";
import {usePageBannerInject} from "/@/composables/Home/usePageBanner";

const {setVisible} = useBreadcrumbInject()
onMounted(() => {
  setVisible(false)
})

const {} = usePageBannerInject()

const announceBoxProps:AnnounceBoxProps={
  list:[],
  title:'公告'
}

</script>

<template lang="pug">
el-row(type="flex" justify="center" style="margin: 1% 2% 2% 2%;")
  el-col(:xs="24" :sm="24" :md="24" :lg="24" :xl="18")
    announce-box(:data="" style="height:100%;z-index:999;position: absolute;right: 0;opacity: 80%;background: #ea4949;color: white;")
    el-carousel
      el-carousel-item(v-for="(item) in [1,2,3,4]")
        .img-t {{item}}
el-row(type="flex" style="margin-top: 1em;margin: 2%;" justify="center")
  el-col(:xs="24" :sm="12" :lg="12" :xl="9")
    rank-list/
  el-col(:xs="24" :sm="12" :lg="12" :xl="9")
    rank-list/
</template>


<style lang="stylus" scoped>
.carousel
  height 100%
  background aquamarine

.img-t
  height 300px
  background-color #49a9ea
</style>
