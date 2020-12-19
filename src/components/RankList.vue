<template>
  <a-card :title="title" :head-style="{display:'flex'}">
    <a-space direction="vertical" align="center" size="middle">
      <a-space direction="vertical">
        <a-badge :count="1" :number-style="{ backgroundColor: 'red',width:'2em',height:'2em',borderRadius:'1em'}">
          <a-avatar :size="64" :src="data[0].avatar">
          </a-avatar>
        </a-badge>
        <a-space direction="vertical">
          <span>{{ data[0].username }}</span>
          <a-space size="large">
            <span>{{ data[0].number }}</span>
            <span> {{ data[0].percent }}</span>
          </a-space>
        </a-space>
      </a-space>
      <a-space :size="100" align="end">
        <a-space direction="vertical">
          <a-badge :count="2" :number-style="{ backgroundColor: 'orange',width:'2em',height:'2em',borderRadius:'1em'}">
            <a-avatar :size="54" :src="data[1].avatar"></a-avatar>
          </a-badge>
          <a-space direction="vertical">
            <span>{{ data[1].username }}</span>
            <a-space>
              <span>{{ data[1].number }}</span>
              <span> {{ data[1].percent }}</span>
            </a-space>
          </a-space>
        </a-space>

        <a-space direction="vertical">
          <a-badge :count="3" :number-style="{ backgroundColor: 'blue',width:'2em',height:'2em',borderRadius:'1em'}">
            <a-avatar :size="44" :src="data[2].avatar"></a-avatar>
          </a-badge>
          <a-space direction="vertical">
            <span>{{ data[2].username }}</span>
            <a-space>
              <span>{{ data[2].number }}</span>
              <span> {{ data[2].percent }}</span>
            </a-space>
          </a-space>
        </a-space>

      </a-space>
      <div style="display:flex;flex-direction: column;">
        <a-space direction="vertical" align="start" size="small">
          <div v-for="(item,i) in data.slice(3)" :key="i">
            <a-space>
              <a-badge :count="i+4"
                       :number-style="{textAlign:'center', backgroundColor: 'green',width:'2em',height:'2em',borderRadius:'1em'}"></a-badge>
              <a-avatar :size="36" :src="item.avatar"></a-avatar>
              <a-space :size="50">
                <span>{{ item.username }}</span>
                <span>{{ item.number }}</span>
                <span>{{ item.percent }}</span>
              </a-space>
            </a-space>
          </div>
        </a-space>
      </div>
    </a-space>
  </a-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export class RankList {
  avatar!: string
  username!: string
  number!: number
  percent!: string
}

export default defineComponent({
  name: "RankList",
  props: {
    title: {
      type: String,
      default: () => 'title'
    },
    data: {
      type: Array,
      default: () => [
        {
          username: 'nekilc',
          number: 10,
          avatar: 'https://s3.ax1x.com/2020/12/19/rUKmPP.jpg',
          percent: '99%'
        },
        {
          username: 'nekilc',
          number: 8,
          avatar: 'https://s3.ax1x.com/2020/12/19/rUKmPP.jpg',
          percent: '22%'
        },
        {
          username: 'nekilc',
          number: 1,
          avatar: 'https://s3.ax1x.com/2020/12/19/rUKmPP.jpg',
          percent: '10%'
        },
        {
          username: 'nekilc',
          number: 1,
          avatar: 'https://s3.ax1x.com/2020/12/19/rUKmPP.jpg',
          percent: '10%'
        },
        {
          username: 'nekilc',
          number: 1,
          avatar: 'https://s3.ax1x.com/2020/12/19/rUKmPP.jpg',
          percent: '10%'
        },
        {
          username: 'nekilc',
          number: 1,
          percent: '10%'
        },
        {
          username: 'nekilc',
          number: 1,
          avatar: 'https://s3.ax1x.com/2020/12/19/rUKmPP.jpg',
          percent: '10%'
        },
        {
          username: 'nekilc',
          number: 1,
          percent: '10%'
        },
        {
          username: 'nekilc',
          number: 1,
          percent: '10%'
        },
        {
          username: 'nekilc',
          number: 1,
          avatar: 'https://s3.ax1x.com/2020/12/19/rUKmPP.jpg',
          percent: '10%'
        },
      ] as RankList[]
    }
  },
})

</script>

<style scoped>

</style>
