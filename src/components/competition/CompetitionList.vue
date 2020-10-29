<template>
  <a-list size="large" :data-source="data">
    <template v-slot:renderItem="{ item }">
      <a-list-item key="item.title" class="t-hover-shadow"
                   style="display:flex; flex-direction: row; padding: 1em;text-align: left;">
        <a-list-item-meta style="width: 80%;">
          <template v-slot:description>
            <p class="p_line_hidden">
              {{ item.description }}
            </p>
            <a-row>
              <a-col :span="12">
                <p style="font-size: 0.5em">
                  竞赛时间：{{ item.startTime }}
                </p>
              </a-col>
              <a-col :span="12">
                <p style="font-size: 0.5em">
                  报名截止时间：{{ item.endTime }}
                </p>
              </a-col>
            </a-row>
          </template>
          <template v-slot:title>
            <a-space align="center">
              <router-link :to="item.href">
                <span style="font-size: 1.5em">
                {{ item.title }}
              </span>
              </router-link>
              <a-tag color="red" style="height: 100%;">进行中</a-tag>
            </a-space>
          </template>
          <template v-slot:avatar>
            <img style="height: 110px;width: 200px;border-radius: 10px;overflow: hidden;"
                 :src="item.avatar"/>
          </template>
        </a-list-item-meta>
        <a-space direction="vertical" style="width: 20%;" align="end">
          <span>已报名:{{ item.numberPepole }}人</span>
          <a-button type="primary" ghost="true" :disabled="item.finish">{{ item.finish ? '报名截止' : '立即报名' }}</a-button>
        </a-space>
      </a-list-item>
    </template>
  </a-list>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export class CompetitionListItem {
  title!: string
  href!: string
  description!: string
  startTime!: string
  endTime!: string
  finish!: number
  avatar!: string
  numberPepole!: number
}

export default defineComponent({
  name: "CompetitionList",
  props: {
    data: {
      type: Array,
      default: () => [
        {
          title: 'Nekilc的比赛',
          href: 'http://www.baidu.com',
          description: '这个比赛呢，啥也没有，就是测试字符串长度足够长的时候，会不会隐藏文字，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
          startTime: '2020-02-02',
          endTime: '2020-02-02',
          numberPepole: 123,
          avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
          finish: 0
        },
        {
          title: 'Joe的比赛',
          href: 'http://www.baidu.com',
          description: 'dasdaaaaaaaaaaaahkfsd',
          startTime: '2020-02-02',
          endTime: '2020-02-02',
          numberPepole: 123,
          avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
          finish: 1
        },
      ] as CompetitionListItem[]
    }
  },
})
</script>

<style lang="stylus">

.t-hover-shadow
  margin 8px

.t-hover-shadow:hover
  box-shadow 0 3px 10px #d9d6d6

.ant-list-item-meta-content
  width 0 !important

.p_line_hidden
  overflow hidden
  height 3em
  font-size 1.1em
  text-overflow ellipsis
  word-wrap break-word
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 2

</style>
