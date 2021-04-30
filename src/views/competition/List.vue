<script lang="ts" setup>
import { defineComponent, defineProps } from 'vue';

interface CompetitionListItem {
  title: string
  href: string
  description: string
  startTime: string
  endTime: string
  finish: number
  avatar: string
  numberPeople: number
}

const props = defineProps<{
  data?: {
    title: string
    href: string
    description: string
    startTime: string
    endTime: string
    finish: number
    avatar: string
    numberPeople: number
  }[]
}>()

</script>

<template lang="pug">
el-space(direction="vertical")
  .t-h-scale-0_5s(v-for="(item, index) in data" )
    el-card.box-card.border-all-radius-1em()
      .flex-row-start
        img.hidden-xs-only(:src="item.avatar" alt="contest picture" style="margin-right: 10px; height: 110px;width: 200px;border-radius: 10px;")
        .flex-row-start.flex-wrap-wrap
          .flex-row-start
            router-link(:to="{path:'/competition/detail',query:{id:item.id}}")
              span.font-size-1_5em
                | {{ item.title }}
            el-tag(type="danger" style="margin-top: auto; margin-bottom:auto;" size="small")
              | 进行中
          .flex-row-start
            p.p_line_hidden.margin-right-1em(style="text-align: start;")
              | {{ item.description }}
            .flex-col-center
              span(style="white-space: nowrap;")
                | 已报名:{{ item.numberPeople }}人
              el-button(style="white-space: nowrap;" size="small" plain type="primary" :disabled="item.finish")
                | {{ item.finish ? '报名截止' : '立即报名' }}
          .flex-row-between.flex-wrap-wrap.width-100per
            span.main-comment-font(style="white-space: nowrap; ")
              | 竞赛时间：{{item.startTime}}
            span.main-comment-font(style="white-space: nowrap; ")
              | 竞赛时间：{{item.startTime}}
</template>

<style lang="stylus" scoped>
.p_line_hidden {
  overflow: hidden;
  height: 3em;
  font-size: 1.1em;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

</style>
