<script lang="ts" setup>
import { useRoute } from "vue-router";
const loading = false
// 处理路由相关
const fullPath = () => {
  const { fullPath } = useRoute()
  return fullPath
}
const data =
  [
    {
      id: 1,
      title: '123',
      date: '2020-02-02'
    },
    {
      id: 2,
      title: '123',
      date: '2020-02-02'
    },
    {
      id: 3,
      title: '123',
      date: '2020-02-02'
    },
    {
      id: 3,
      title: '123',
      date: '2020-02-02'
    }
  ]
</script>

<template lang="pug">
a-list(:loading="loading" item-layout="horizontal" :data-source="data")
  template(v-slot:renderItem="{ item }")
    a-list-item
      a-list-item-meta
        template(v-slot:title)
          router-link(:to="fullPath() + '/' + item.id.toString()") {{ item.title }} {{ item.date }}
</template>

<style lang="stylus" scoped>

</style>
