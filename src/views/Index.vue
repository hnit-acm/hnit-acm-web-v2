<template>
    <a-row type="flex" justify="center" style="margin: 1% 2% 2% 2%;">
      <a-col :xs="24" :sm="24" :lg="24" :xxl="18">
        <announce-box
            style="z-index:1;position: absolute;right: 0;opacity: 80%;background: black;color: white;"></announce-box>
        <a-carousel class="carousel" autoplay>
          <div class="img-t"><h3>1</h3></div>
          <div class="img-t"><h3>2</h3></div>
          <div class="img-t"><h3>3</h3></div>
          <div class="img-t"><h3>4</h3></div>
        </a-carousel>
      </a-col>
    </a-row>
    <a-row type="flex" style="margin-top: 1em;margin: 2%;" justify="center" >
      <a-col :xs="24" :sm="12" :lg="12" :xxl="9" style="padding-right: 0.5em;">
        <rank-list></rank-list>
      </a-col>
      <a-col :xs="24" :sm="12" :lg="12" :xxl="9" style="padding-left: 0.5em;">
        <rank-list></rank-list>
      </a-col>
    </a-row>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import RankList from "/@/components/RankList.vue";
import AnnounceBox from "/@/components/AnnounceBox.vue";

export default defineComponent({
  name: "Index",
  components: {RankList, AnnounceBox}
})
</script>

<style lang="stylus" scoped>
.carousel
  height 100%
  background aquamarine

.img-t
  height 300px
</style>
