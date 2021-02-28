<script setup>
import {HCard} from "../../components";
import {ref} from 'vue'
const data = ref([{},{},{},{},{}])
</script>

<template lang="pug">
el-row
  el-col(v-for="(item) in data" :xs="24" :sm="12" :md="8" :lg="8" :xl="6")
    h-card.border-all-radius-1em
      el-image.hidden-xs-only(src="https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg")
        template(#placeholder)
          div
            span 加载中
      | 测试

</template>

<style lang="stylus" scoped>

</style>
