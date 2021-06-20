<script lang="ts" setup>
import RankList from "@/views/common/RankList.vue";
import {HListBox} from "@/components"

import PageLayout from "@/views/layout/PageLayout.vue"
import {pageLayout} from "@/views/layout/layout"

import {onMounted, ref} from 'vue';
import {useBreadcrumbInject} from "@/composables/Home/useBreadcrumb";
import {usePageBannerInject} from "@/composables/Home/usePageBanner";
import {useSystemService} from "@/repositories/useSystemService";

// const { setVisible } = useBreadcrumbInject()
// onMounted(() => {
//   setVisible(false)
// })

const {} = usePageBannerInject()

// 公告
const {fetchAnnounceList} = useSystemService()
const announceBoxProps = ref({
  title: '公告',
  morePath: '/announcement',
  list: []
})
onMounted(() => {
  fetchAnnounceList(10).then(
      value => {
        announceBoxProps.value.list = value.list
      }
  )
})

const listMock = [
  {
    username: 'nekilc',
    avatar: '',
    number: 123,
    percent: '100%'
  },
  {
    username: 'nekilc1',
    avatar: '',
    number: 123,
  },
  {
    username: 'nekilc2',
    avatar: '',
    number: 123,
  },
  {
    username: 'nekilc3',
    avatar: '',
    number: 123,
  },
  {
    username: 'nekilc4',
    avatar: '',
    number: 123,
  },
  {
    username: 'nekilc5',
    avatar: '',
    number: 123,
  },
  {
    username: 'nekilc6',
    avatar: '',
    number: 123,
  },
  {
    username: 'nekilc7',
    avatar: '',
    number: 123,
  },
  {
    username: 'nekilc8',
    avatar: '',
    number: 123,
  },
  {
    username: 'nekilc9',
    avatar: '',
    number: 123,
  },
]

const carouselList = ref([])
const {fetchCarouselList} = useSystemService()
onMounted(() => {
  fetchCarouselList().then(
      value => {
        carouselList.value = value.list
      }
  )
})


</script>

<template lang="pug">
//page-layout(:layout="pageLayout" space)
page-layout(:layout="pageLayout" space)
  el-row(type="flex" justify="center")
    el-col.hidden-xs-only(:sm="14" :md="16" :lg="17" :xl="18")
      el-carousel.border-left-radius-1em.main-blue
        el-carousel-item(v-for="(item) in carouselList")
          el-image.img-t(:src="item.img" fit="fill")
            template(#placeholder)
              el-empty(description="加载中")
    el-col(:xs="24" :sm="10" :md="8" :lg="7" :xl="6")
      h-list-box.border-right-radius-1em.border-all-radius-xs-1em(:data="announceBoxProps" style="opacity: 80%;background: #ea4949;color: white;")
  el-row(type="flex" justify="center" :gutter="15")
    el-col(:xs="24" :sm="12" :md="12" :lg="12" :xl="12")
      rank-list(:title="'123'" :list="listMock")/
    el-col(:xs="24" :sm="12" :md="12" :lg="12" :xl="12")
      rank-list(:list="listMock")/
</template>


<style lang="stylus" scoped>
.carousel
  height 100%
  background aquamarine

.img-t
  height 300px
  background-color #49a9ea
</style>
