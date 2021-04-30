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
  spaceSize?: "mini"|"small"|'medium',
  space?: boolean
}>()

</script>

<template lang="pug">
el-row(type="flex" justify="center")
  el-col(:xs="layout?.xs ?? 24" v-bind:sm="layout?.sm ?? 24" v-bind:md="layout?.md ?? 24" v-bind:lg="layout?.lg ?? 24" v-bind:xl="layout?.xl ?? 24")
    el-space.width-100per(direction="vertical" prefixCls="h-space" v-if="space ?? false" v-bind:size="spaceSize?? 'medium'")
      slot
    div(v-else)
      slot
</template>

<style lang="stylus">
.h-space__item
  width 100%
</style>
