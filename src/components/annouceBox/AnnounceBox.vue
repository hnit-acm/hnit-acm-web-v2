<script lang="ts" setup>
import {defineProps} from 'vue'

interface AnnounceListItem {
  name: string
  link: string
  label?: string
}

interface AnnounceBoxProps {
  list?: AnnounceListItem[]
  title?: string
}

const props = defineProps<{
  data: AnnounceBoxProps
}>()

</script>

<template lang="pug">
.height-100-per.font-color-white
  .flex-row-center.font-size-1em(style={borderBottom: '1px solid', padding: '1em'})
    router-link.font-color-white(to="/announcement") {{data.title?data.title:'标题'}}
  .text-align-left(style={padding: '1em'})
    .flex-row-start.flex-align-center(v-for="(item,index) in data.list?data.list:[]")
      router-link.list-item(:to="item.link") {{item.name}}
      el-tag.margin-left-auto(v-show="item.label") {{item.label}}
  .flex-row-end(style={paddingLeft: '1em', paddingRight: '1em'})
    el-button(type="text" icon="el-icon-d-arrow-right")
      router-link(to="/announcement") 更多
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
