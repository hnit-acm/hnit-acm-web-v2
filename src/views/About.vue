<template>
  <div class="about" style="width: 100%;">
    <img style="width: 20%;height: 20%;" src="../assets/nav-logo-color.png">
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {usePageBannerInject} from "/@/composables/usePageBanner";
import {useBreadcrumbInject} from "/@/composables/useBreadcrumb";
export default defineComponent({
  name:"",
  setup(){
    const {setVisible} = useBreadcrumbInject()
    setVisible(false)
    usePageBannerInject()
  }
})
</script>
