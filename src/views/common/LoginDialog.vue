<script lang="ts" setup>
import {StateButton, useStateButton} from '/@/components'

import { defineEmit, ref, defineProps,unref} from 'vue';
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
const loginBtnCtx = useStateButton({name:'登录'})

const {post} = useLogin()

const login = ()=>{
  post(loginForm).then(
      value => {
        loginBtnCtx.success({name:'登录成功',callback:()=>{emit("event-login")}})
      }
  ).catch(
      reason => {
        loginBtnCtx.warning({name:'登录失败',callback:()=>{emit("event-login")}})
      }
  )
}

</script>

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
    state-button(type="primary" v-on:click="login" v-bind:data="unref(loginBtnCtx.data)") 登录
</template>


<style scoped>

</style>
