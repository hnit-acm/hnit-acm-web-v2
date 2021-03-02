<script lang="ts" setup>
import RankList from "@/views/common/RankList.vue";
import {HListBox} from "@/components"

import PageLayout from "@/views/layout/PageLayout.vue"
import {pageLayout} from "@/views/layout/layout"

import {onMounted} from 'vue';
import {useBreadcrumbInject} from "@/composables/Home/useBreadcrumb";
import {usePageBannerInject} from "@/composables/Home/usePageBanner";

const {setVisible} = useBreadcrumbInject()
onMounted(() => {
  setVisible(false)
})

const {} = usePageBannerInject()

const announceBoxProps = {
  title: '公告',
  morePath:'/announcement',
  list: [
    {
      name: '123',
      link: '/announcement/1',
      labels:["123","123"]
    },
    {
      name: '123',
      link: '123',
      labels:[{
        type:'info',
        name:'info'
      }]
    },
    {
      name: '123',
      link: '123'
    },
    {
      name: '123',
      link: '123'
    },
    {
      name: '123',
      link: '123'
    },
    {
      name: '123',
      link: '123'
    },
    {
      name: '123',
      link: '123'
    }
  ],
}

const listMock = [
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
  {
    username:'123213',
    avatar:'',
    number:123,
  },
]

</script>

<template lang="pug">
page-layout(v-bind:layout="pageLayout")
  el-row(type="flex" justify="center")
    el-col.hidden-xs-only(:sm="14" :md="16" :lg="17" :xl="18")
      el-carousel.border-left-radius-1em
        el-carousel-item(v-for="(item) in [1,2,3,4]")
          .img-t {{item}}
    el-col(:xs="24" :sm="10" :md="8" :lg="7" :xl="6")
      h-list-box.border-right-radius-1em.border-all-radius-xs-1em(:data="announceBoxProps" style="opacity: 80%;background: #ea4949;color: white;")
el-row(type="flex" justify="center")
  el-col(:xs="24" :sm="12" :md="12" :lg="11" :xl="10")
    rank-list(:title="'123'" :list="listMock")/
  el-col(:xs="24" :sm="12" :md="12" :lg="11" :xl="10")
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
