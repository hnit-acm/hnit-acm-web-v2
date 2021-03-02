<script lang="ts" setup>
import {useStateButton} from "@/components/stateButton/useStateButton";
import {computed, defineEmit, defineProps} from "vue";

interface StateButtonProps {
  loading?: false | true
  type?: 'primary' | 'success' | 'danger' | 'warning'
  name?: string
  icon?: string
  interval?: number
  disabled?: boolean
}

const props = defineProps({
  data: {
    type: Object,
    default: () => {
      return {
        loading: false,
        type: 'primary',
        name: 'default',
        icon: 'default',
        interval: 0,
      } as StateButtonProps
    }
  }
})

const emit = defineEmit(['click'])

const interval = computed(
    ctx => {
      return props.data?.interval ? '(' + props.data.interval + ')' : ''
    }
)

</script>

<template lang="pug">
el-button(:type="data?.type ?? 'primary'" :loading="data.loading" :icon="data.icon" :disabled="data.disabled"  v-on:click="emit('click')") {{data.name}}{{interval}}
</template>

<style lang="stylus" scoped>

</style>
