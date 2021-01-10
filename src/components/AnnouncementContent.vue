<template>
  {{ id }}asdsadasdqdqw
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import {useRoute, useRouter} from 'vue-router';
// todo 公告详情页
export default defineComponent({
  name: "AnnouncementContent",
  props: {
    id: () => 0 // 公告id，给后端使用
  },
  setup() {
    const {params} = useRoute()
    console.log(params)
    return {
      params
    }
  }
})


</script>

<style scoped>

</style>
