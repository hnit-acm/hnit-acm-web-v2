<template>
  <a-card title="公告" style="height: 100%;" :headStyle="{color:'white'}">
    <a-list
        :split="false"
        :loading="loading"
        item-layout="horizontal"
        :data-source="data.slice(0,6)"
        size="middle"
    >
      <template v-slot:renderItem="{ item }">
        <a-list-item style="text-align: left;padding: 1px;">
          <a-list-item-meta>
            <template v-slot:title style="color: white;">
              <div style="display: flex;flex-direction: row;">
                <router-link class="list-item" :to="item.link">{{ item.name }}</router-link>
                <a-tag color="red" v-if="item.label" style="margin-left: auto;">{{ item.label }}</a-tag>
              </div>
              <!--              <div style="height: 1.5em;overflow: hidden;">-->
              <!--                <a style="color: white;" :href="item.link">-->
              <!--                  {{ item.name }}-->
              <!--                </a>-->
              <!--                <a-tag color="red" v-if="item.label" style="float: right;">{{ item.label }}</a-tag>-->
              <!--              </div>-->
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
    <a-button style="float: right;bottom: 0;color: white;" type="link">
      <template v-slot:icon>
        <DoubleRightOutlined/>
      </template>
      <router-link to="announcement">更多</router-link>
    </a-button>
  </a-card>
</template>

<script lang="ts">

import {defineComponent} from 'vue';

export class AnnounceListItem {
  name!: string
  link!: string
  label?: string
}

export default defineComponent({
  name: "AnnounceBox",
  props: {
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
        },
        {
          name: "嘤嘤嘤",
          link: '//www.baidu.com'
        }
      ] as AnnounceListItem[]
    }
  }
})
</script>

<style lang="stylus" scoped>

.list-item
  width 16em
  color white
  overflow hidden
  text-overflow ellipsis
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 1

</style>
