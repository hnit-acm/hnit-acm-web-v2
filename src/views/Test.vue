<script lang="ts" setup>
import { HSplitPanel } from '@/components'
import { ref } from 'vue';
const text = ref(0.1)
</script>
<template lang="pug">
h-split-panel(style="width:100%;height:200px;" v-model:value="text")
  template(#top)
    | asdasdasd
  template(#bottom)
    | asdasdasd
</template>