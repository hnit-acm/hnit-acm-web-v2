<template>
  <a-row type="flex" align="center">
    <a-col :sm="18" :lg="18" :xxl="14">
      <a-carousel class="carousel" autoplay>
        <div class="img-t"><h3>1</h3></div>
        <div class="img-t"><h3>2</h3></div>
        <div class="img-t"><h3>3</h3></div>
        <div class="img-t"><h3>4</h3></div>
      </a-carousel>
    </a-col>
    <a-col :sm="6" :lg="6" :xxl="4">
      <div style="width: 100%;height: 100px;border: black solid;background: black;"></div>
    </a-col>
  </a-row>
  <a-row :gutter="24" type="flex" align="center" style="margin-top: 1em;">
    <a-col :xs="24" :sm="12" :lg="12" :xxl="9">
      <rank-list></rank-list>

    </a-col>
    <a-col :xs="24" :sm="12" :lg="12" :xxl="9">
      <rank-list></rank-list>

    </a-col>
  </a-row>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import RankList from "@/components/RankList.vue";

export default defineComponent({
  name: "Index",
  components: {RankList}
})
</script>

<style lang="stylus" scoped>
.carousel
  height 300px
  background aquamarine

.img-t
  height 300px
</style>
