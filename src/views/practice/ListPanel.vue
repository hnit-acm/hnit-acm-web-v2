<script lang="ts" setup>
import { HCard } from "../../components";
import PageLayout from "@/views/layout/PageLayout.vue"
import { pageLayout } from '@/views/layout/layout';
import { ref } from 'vue'
const data = ref([{}, {}, {}, {}, {}])
</script>

<template lang="pug">
page-layout(v-bind:layout="pageLayout" space)
  .flex-row-between
    el-button-group
      el-button(size="mini" type="primary") 最新
      el-button(size="mini" type="primary") 最热
    el-input.width-xs-60per.margin-left-auto(size="mini" clearable style="width:200px;")
      template(#append)
        el-button(type="warning") 搜索
  el-row(:gutter="15")
    el-col(v-for="(item) in data" :xs="24" :sm="8" :md="8" :lg="6" :xl="6")
        el-card.t-h-scale-0_5s.border-all-radius-1em.margin-bottom-1em(:body-style="{padding:0,paddingBottom:'1em'}" )
            el-image.hidden-xs-only(src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg")
              template(#placeholder)
                div
                  i.el-icon-picture-outline
            | 2021年第一次周测
            el-descriptions.margin-left-1em(column="1" size="mini")
              el-descriptions-item(label="参与人数")
                | 100
              el-descriptions-item(label="发布时间")
                | 2021-04-27
            el-button(type="primary" icon="el-icon-star-off" circle)
            el-button(type="primary" icon="el-icon-s-data" circle)
            el-button(type="primary" icon="el-icon-s-promotion" circle)
</template>

<style lang="stylus" scoped>

</style>
