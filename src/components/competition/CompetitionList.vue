<template>
  <div v-for="(item, index) in data" :key="index">
    <el-card class="box-card" shadow="hover">
      <div style="display: flex; flex-direction: row; width: 100%">
        <img class="hidden-sm-and-down" :src="item.avatar" alt="contest picture" style="height: 110px;width: 200px;border-radius: 10px;">
        <div style="display: flex; margin-left: 10px; flex-direction: column">
          <div style="display: flex; flex-direction: row">
            <router-link :to="item.href">
              <span style="font-size: 1.5em">{{ item.title }}</span>
            </router-link>
            <el-tag type="danger" style="margin-top: auto;margin-bottom: auto; margin-left: 10px" size="small">进行中</el-tag>
          </div>
          <p style="text-align: start" class="p_line_hidden">{{ item.description }}</p>
          <el-row>
            <el-col :span="12">
              <p style="font-size: 0.9em; text-align: start">竞赛时间：{{ item.startTime }}</p>
            </el-col>
            <el-col :span="12">
              <p style="font-size: 0.9em; text-align: start">报名截止时间：{{ item.endTime }}</p>
            </el-col>
          </el-row>
        </div>
        <div style="display: flex;width: 20% ; flex-direction: column">
          <div style="display: flex;margin-left: auto; margin-top: auto; margin-bottom: auto; flex-direction: column">
            <span>已报名:{{ item.numberPeople }}人</span>
            <el-button style="width: 7em" size="medium" plain type="primary" :disabled="item.finish">{{ item.finish ? '报名截止' : '立即报名' }}</el-button>
          </div>
        </div>
      </div>
    </el-card>
  </div>
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
  numberPeople!: number
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
          numberPeople: 123,
          avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
          finish: 0
        },
        {
          title: 'Joe的比赛',
          href: 'http://www.baidu.com',
          description: '这个比赛呢，啥也没有，就是测试字符串长度足够长的时候，会不会隐藏文字，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
          startTime: '2020-02-02',
          endTime: '2020-02-02',
          numberPeople: 123,
          avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
          finish: 1
        },
        {
          title: 'Heiko的比赛',
          href: 'http://www.baidu.com',
          description: '这个比赛呢，啥也没有，就是测试字符串长度足够长的时候，会不会隐藏文字，啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
          startTime: '2020-02-02',
          endTime: '2020-02-02',
          numberPeople: 123,
          avatar: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
          finish: 1
        },
      ] as CompetitionListItem[]
    }
  },
})
</script>

<style lang="stylus" scoped>

.t-hover-shadow {
  margin: 8px;
}

.t-hover-shadow:hover {
  box-shadow: 0 3px 10px #d9d6d6;
}

.ant-list-item-meta-content {
  width: 0 !important;
}

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

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  margin: 10px
}

</style>
