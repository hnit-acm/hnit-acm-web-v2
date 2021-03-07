<script setup>
import {HEditor} from "../../components";
import {ref, watch} from "vue";

const codeValue = ref('123132')
watch(codeValue,(newVal,oldVal) => {
  console.log(newVal)
})
</script>

<template lang="pug">
h-editor(v-model="codeValue")
.flex-row-start
  div(style={height:'100px',background:'red',width:'100%'})
  div(style={height:'100px',background:'blue',width:'1%',left:'30%'})
  div(style={height:'100px',background:'yellow',width:'100%'})
</template>

<style lang="stylus" scoped>

</style>
