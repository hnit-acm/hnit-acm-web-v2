<script lang="ts" setup>
import { useStateButton } from "@/components/stateButton/useStateButton";
import { computed, defineEmit, defineProps } from "vue";

const props = defineProps<{
  data?: {
    loading?: false | true
    type?: 'primary' | 'success' | 'danger' | 'warning'
    icon?: string
    name?: 'default' | string
    interval?: 0 | number
    disabled?: false | true
  }
}>()

const emit = defineEmit(['click'])

const interval = computed(
  ctx => {
    return props.data?.interval ? '(' + props.data.interval + ')' : ''
  }
)

</script>

<template lang="pug">
div
  el-button(:type="data?.type ?? 'primary'" :loading="data?.loading ?? false" :icon="data?.icon ?? ''" :disabled="data?.disabled ?? false"  v-on:click="emit('click')") {{ data?.name ?? 'default' }}{{ interval }}
</template>

<style lang="stylus" scoped>

</style>
