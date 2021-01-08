<template>
  <a-list
      class="demo-loadmore-list"
      :loading="loading"
      item-layout="horizontal"
      :data-source="data"
  >
    <template v-slot:renderItem="{ item }">
      <a-list-item>
        <a-list-item-meta>
          <template v-slot:title>
            <a href="https://www.antdv.com/">{{ item.title }} {{item.date}}</a>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
  <router-view></router-view>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import useBreadcrumb from "/@/composables/useBreadcrumb";

export default defineComponent({
  name: "Announcement",
  setup(){
    useBreadcrumb()
  },
  data() {
    return {
      routes: [
        {
          path: 'index',
          breadcrumbName: 'First-level Menu',
        },
        {
          path: 'first',
          breadcrumbName: 'Second-level Menu',
        },
        {
          path: 'second',
          breadcrumbName: 'Third-level Menu',
        },
      ],
      data: [
        {
          title:'123',
          date:'2020-02-02'
        },
        {
          title:'123',
          date:'2020-02-02'
        },
        {
          title:'123',
          date:'2020-02-02'
        },
        {
          title:'123',
          date:'2020-02-02'
        }
      ]
    }
  }
})
</script>

<style scoped>

</style>
