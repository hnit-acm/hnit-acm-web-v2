<template lang="pug">
.height-100-per.font-color-white
  .flex-row-center.font-size-1em(style={borderBottom:'1px solid',padding:'1em'})
    router-link.font-color-white(to="/announcement") 公告
  .text-align-left(style={padding:'1em'})
    .flex-row-start.flex-align-center(v-for="(item,index) in data")
      router-link.list-item(:to="item.link") {{item.name}}
      el-tag.margin-left-auto(v-show="item.label") {{item.label}}
  .flex-row-end(style={paddingLeft:'1em',paddingRight:'1em'})
    el-button(type="text" icon="el-icon-d-arrow-right")
      router-link(to="/announcement") 更多

</template>

<script lang="ts" setup="props">

import {defineProps} from 'vue'



export interface AnnounceListItem {
  name: string
  link: string
  label?: string
}

const props = defineProps({
  data: {
    type: Array,
    default: () => [
      {
        name: "Nekilc测试用的超长的字符串aaaaaaaa",
        link: '/announcement/1',
        label: '重要'
      },
      {
        name: "嘤嘤嘤",
        link: '//www.baidu.com'
      },
      {
        name: "嘤嘤嘤",
        link: '//www.baidu.com',
        label: '重要'
      },
      {
        name: "嘤嘤嘤",
        link: '//www.baidu.com'
      },

      {
        name: "嘤嘤嘤",
        link: '//www.baidu.com'
      }
    ] as AnnounceListItem[]
  }
})

</script>

<style lang="stylus" scoped>
@import "../assets/stylus/font.styl"
@import "../assets/stylus/main.styl"
@import "../assets/stylus/margin.styl"

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
