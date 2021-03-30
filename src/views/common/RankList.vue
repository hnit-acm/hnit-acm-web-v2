<script lang="ts" setup>
import { defineComponent, defineProps, h } from 'vue';
import { ElAvatar, ElBadge, ElPopover } from "element-plus";
import { HCard } from "@/components";

interface RankItem {
  avatar?: string
  username?: string
  number?: number
  percent?: string
}

interface Props {
  list?: RankItem[]
  title?: string
}

const props = defineProps<{
  list?: {
    avatar?: string
    username?: string
    number?: number
    percent?: string
  }[]
  title?: string
}>()
// const c = () =>{
//   const list:RankItem[] = [{} as RankItem]
// }

// const props = defineProps({
//   list: {
//     type:Array,
//     default: () =>[{} as { avatar?: string, username?: string, number?: number, percent?: string }]
//   },
//   title: () => ''
// })

console.log(props.list);

interface ItemProps {
  index: number
  data: RankItem
}
// 函数组件
const RankItemCom = defineComponent({
  props: {
    index: {
      type: Number,
      default: () => 0
    },
    data: {
      type: Object,
      default: () => ({} as { avatar?: string, username?: string, number?: number, percent?: string })
    }
  },
  setup: (props: ItemProps, ctx: {}) => {
    return () =>
      h('div', { class: ['flex-row-around', 'margin-top-1em'] }, [
        h(ElBadge, { value: props.index.toString() ?? '' }, [
          h(ElPopover, { trigger: 'hover', placement: 'top' }, {
            reference: h(ElAvatar, { src: props.data?.avatar ?? '', size: 'small' }),
            default: h('span', {}, props.data?.username)
          })
        ]),
        h('span', props.data?.username ?? ''),
        h('span', props.data?.number ?? ''),
      ])
  }
})


</script>

<template lang="pug">
h-card(style="border-radius:1em")
  template(#header) {{ title ?? 'default' }}
  .flex-row-center
    el-col
      .flex-row-center
        el-badge(:value="1" type="danger")
          el-popover(trigger="hover" placement="top")
            template(#reference)
              el-avatar(:src="list?.[0].avatar ?? ''" size="large" fit="cover")
            | {{list?.[0].username}}
      .flex-row-around.margin-top-1em
        el-badge(:value="2" type="warning")
          el-popover(trigger="hover" placement="top")
            template(#reference)
              el-avatar(:src="list?.[1].avatar ?? ''" size="large" fit="cover")
            | {{list?.[1].username}}
        el-badge(:value="3" type="primary")
          el-popover(trigger="hover" placement="top")
            template(#reference)
              el-avatar(:src="list?.[2].avatar ?? ''" size="large" fit="cover")
            | {{list?.[2].username}}
      template(v-for="(item,index) in (list?.slice(3,10) ?? [])")
        rankItemCom(v-bind:index="index + 4" :data="item")/
</template>

<style lang="stylus" scoped>
@import "../../assets/stylus/flex.styl";
</style>
