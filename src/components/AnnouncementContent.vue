<template>
  {{ id }}asdsadasdqdqw
</template>

<script lang="ts">

import {defineComponent} from 'vue';
import {useRoute, useRouter} from 'vue-router';
export default defineComponent({
  name: "AnnouncementContent",
  props: {
    id: () => 0
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
