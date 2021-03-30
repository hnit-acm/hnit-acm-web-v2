<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  layout: {
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}>()

</script>

<template lang="pug">
el-row(type="flex" justify="center")
  el-col(:xs="layout?.xs ?? 24" :sm="layout?.sm ?? 24" :md="layout?.md ?? 24" :lg="layout?.lg ?? 24" :xl="layout?.xl ?? 24")
    slot
</template>

<style lang="stylus" scoped>

</style>
