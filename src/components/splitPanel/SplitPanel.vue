<script lang="ts" setup>
import Trigger from './Trriger.vue'
import { ref, defineProps, nextTick, onMounted, watch, defineEmit } from 'vue'
const props = defineProps({
  value: {
    type: [Number],
    default: () => 0.5
  },
  mode: {
    type: [() => 'horizontal', () => 'vertical'],
    default: () => 'vertical'
  },
  min: {
    type: [Number],
    default: () => 0.5
  },
  max: {
    type: [Number],
    default: () => 0.5
  }
})

const emit = defineEmit(['update:value'])

const isHorizontal = () => props.mode == 'horizontal'
const offsetSize = () => isHorizontal() ? 'offsetWidth' : 'offsetHeight'
const state = ref({
  isMoving: false,
  initOffset: 0,
  oldOffset: 0,
  offset: 0,
  currentValue: 0.5,
})
const outerWrapper = ref<HTMLDivElement>()
const trrigerMouseMoving = (e: MouseEvent) => {
  let pageOffset = isHorizontal() ? e.pageX : e.pageY
  let offset = pageOffset - state.value.initOffset;
  let outerWidth = outerWrapper?.value?.[offsetSize()] ?? 0
  console.log(outerWidth)
  let value = (outerWidth * state.value.oldOffset + offset) / outerWidth
  console.log(value)
  emit('update:value', value)
}
const trrigerMouseUp = (e: MouseEvent) => {
  document.removeEventListener("mousemove", trrigerMouseMoving)
  document.removeEventListener("mouseup", trrigerMouseUp)
}
const trrigerMouseDown = (e: MouseEvent) => {
  state.value.initOffset = isHorizontal() ? e.pageX : e.pageY
  state.value.oldOffset = props.value
  document.addEventListener("mousemove", trrigerMouseMoving)
  document.addEventListener("mouseup", trrigerMouseUp)
}
const setOffset = () => {
  nextTick(() => {
    state.value.offset = props.value * 10000 / 100
  })
}

watch(()=>props.value, (val: number) => {
    console.log(val)
    if (val !== state.value.currentValue) {
      state.value.currentValue = val
      setOffset()
    }
  },{deep:true})

onMounted(() => {
  setOffset()
})

</script>

<template lang="pug">
.main(ref="outerWrapper" :class="wrapperClasses")
  div(v-if="isHorizontal()" :class="`${prefix}-horizontal`")
    .left-pane(:style="{ right: `${100 - state.value}%` }" :class="paneClasses")
      slot(name="left")
    div(:class="`${prefix}-trigger-con`" :style="{ left: `${state.offset}%` }" @mousedown="trrigerMouseDown")
      slot(name="trigger")
        trigger(mode="vertical")
    .right-pane(:style="{ left: `${state.offset}%` }" :class="paneClasses")
      slot(name="right")
  div(v-else :class="`${prefix}-vertical`")
    .top-pane(:style="{ bottom: `${100 - state.offset}%` }" :class="paneClasses")
      slot(name="top")
    .trigger(:class="`${prefix}-trigger-con`" :style="{ top: `${state.offset}%` }" @mousedown="trrigerMouseDown")
      slot(name="trigger")
        //- div(:style="{ width: '10px'}")
        trigger(mode="horizontal")
    .bottom-pane(:style="{ top: `${state.offset}%` }" :class="paneClasses")
      slot(name="bottom")
</template>

<style lang="stylus" scoped>
.top-pane
  position absolute
  bottom 50%
  top 0
  left 0
  right 0
.bottom-pane
  position absolute
  top 50%
  bottom 0
  left 0
  right 0
.trigger
  position absolute
  top 50%
  width 100%
  height 0
  z-index 10
.main
  border 1px solid
  position relative
  height 100%
  width 100%

</style>
