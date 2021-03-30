<script lang="ts" setup="props">
import { defineProps } from 'vue'
import { returnProp } from '@/utils'

interface LabelItem {
  name: string
  type: 'item'
}

interface AnnounceListItem {
  name: string
  link: string
  labels?: string[] | LabelItem[]
}

interface AnnounceBoxProps {
  list: AnnounceListItem[]
  morePath: string
  title: string
}

const props = defineProps<{
  data: {
    title: string
    list: {
      name: string,
      link: string,
      labels?: (string | { name: string, type: string })[]
    }[]
    morePath: string
  }
}>()

</script>

<template lang="pug">
.height-100-per.font-color-white
  .flex-row-center.font-size-1em(style="border-bottom:1px solid;padding:1em;")
    router-link.font-color-white(to="/announcement")
      | {{ data.title }}
  .text-align-left(style="padding:1em;")
    .flex-row-start.flex-align-center(v-for="(item,index) in data?.list?.slice(0,6) ?? []")
      router-link.list-item(:to="item.link")
        | {{ item.name }}
      el-tag.margin-left-auto(v-for="(label) in item.labels ?? []" size="mini" :type="returnProp(label, 'type')")
        | {{ returnProp(label, 'name') ?? label }}
  .flex-row-end(style="padding-left:1em;padding-right:1em;" v-show="data?.list.length > 6")
    el-button(type="text" icon="el-icon-d-arrow-right")
      router-link(:to="data?.morePath ?? ''")
        | 更多
</template>

<style lang="stylus" scoped>
@import "../../assets/stylus/main.styl"

.list-item
  width 16em
  color white
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 1

.el-card
  height 100% !important

el-card
  height 100% !important

</style>
