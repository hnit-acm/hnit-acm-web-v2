<template>
  <div class="about" style="width: 100%;">
    <img style="width: 20%;height: 20%;" src="../assets/nav-logo-color.png">
  </div>
</template>

<script lang="ts">
import {defineComponent,onMounted} from 'vue'
import {usePageBannerInject} from "/@/composables/Home/usePageBanner";
import {useBreadcrumbInject} from "/@/composables/Home/useBreadcrumb";
export default defineComponent({
  name:"",
  setup(){
    const {setVisible} = useBreadcrumbInject()
    onMounted(() => {
      setVisible(false)
    })
    usePageBannerInject()
  }
})
</script>
