<script lang="ts" setup>
import {HStateButton, useStateButton} from '@/components'

import {defineEmit, ref, defineProps, unref} from 'vue';
import {useLogin} from "@/repositories/useLogin";

const props = defineProps({
  visible: {
    type: Boolean,
    default: () => false
  },
  codeVisible: {
    type: Boolean,
    default: () => false
  },
})

const emit = defineEmit(['event-closed', 'event-login'])

const loginForm = ref({
  username: '',
  password: '',
})
const loginBtnCtx = useStateButton({
  name: '登录',
  type: 'primary',
})

const {post} = useLogin()

const login = () => {
  loginBtnCtx.loading({name: '登录中'})
  post(unref(loginForm)).then(
      value => {
        loginBtnCtx.success({
          name: '登录成功', callback: () => {
            emit("event-login")
          }
        })
      }
  ).catch(
      reason => {
        console.log(reason)
        loginBtnCtx.error({
          name: '登录失败', interval: 3, callback: () => {
            // emit("event-login")
          }
        })
      }
  )
}

</script>

<template lang="pug">
el-dialog(title="登录" :model-value="visible" v-on:closed="emit('event-closed')" :destroy-on-close="true" :center="true")
  el-form(layout="vertical" v-model="loginForm" size="mini")
    el-form-item()
      el-input(label="123" v-model="loginForm.username" placeholder="请输入账号")
    el-form-item()
      el-input(v-model="loginForm.password" type="password" placeholder="请输入密码" show-password)
    el-form-item(v-show="codeVisible")
      el-input(v-model="loginForm.username" placeholder="请输入验证码")
  template(v-slot:footer)
    h-state-button(v-on:click="login" size="mini" v-bind:data="unref(loginBtnCtx.data)") 登录
</template>


<style lang="stylus" scoped>
@import "../../assets/stylus/main.styl"
.main
  width 20% !important

</style>
