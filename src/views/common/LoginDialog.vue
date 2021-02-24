<template lang="pug">
el-dialog(title="登录" :model-value="visible" v-on:closed="emit('event-cancel')" :destroy-on-close="true" :center="true")
  el-form(layout="vertical" v-model="loginForm")
    el-form-item(v-model="loginForm.username")
      el-input(placeholder="请输入账号")
    el-form-item(v-model="loginForm.password")
      el-input(placeholder="请输入密码")
    el-form-item(v-model="loginForm.username" v-show="codeVisible")
      el-input(placeholder="请输入验证码")
  template(v-slot:footer)
    el-button(type="primary" v-on:click="$emit('event-login',toRef(loginForm))") 登录
</template>

<script lang="ts" setup>
import { defineEmit, ref, defineProps,getCurrentInstance} from 'vue';
import {useLogin} from "/@/repositories/useLogin";

const props = defineProps({
  visible: () => false,
  codeVisible: () => false,
})

const emit = defineEmit(['event-cancel', 'event-login'])

const loginForm = ref({
  username: '',
  password: '',
})

const {post} = useLogin()

const login = ()=>{
  emit("event-login")
  post(loginForm)
}
</script>

<style scoped>

</style>
