<template lang="pug">
el-dialog(title="登录" :model-value="visible" v-on:closed="$emit('event-closed')" :destroy-on-close="true" :center="true")
  el-form(layout="vertical" v-model="loginForm")
    el-form-item(v-model="loginForm.username")
      a-input(placeholder="请输入账号")
    el-form-item(v-model="loginForm.password")
      a-input(placeholder="请输入密码")
    el-form-item(v-model="loginForm.username" v-show="codeVisible")
      a-input(placeholder="请输入验证码")
  template(v-slot:footer)
    el-button(type="primary" v-on:click="$emit('event-login',toRef(loginForm))") 登录
</template>

<script lang="ts" setup>
import { defineEmit, ref, defineProps} from 'vue';

const props = defineProps({
  visible: () => false,
  codeVisible: () => false,
})

const loginForm = ref({
  username: '',
  password: '',
})
defineEmit(['event-cancel', 'event-login'])
</script>

<style scoped>

</style>
