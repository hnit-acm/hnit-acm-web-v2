<script lang="ts" setup>
import { HStateButton } from '@/components'

import { ref, useContext, unref } from 'vue';
import useRegisterForm from "@/composables/useRegisterForm";
import { usePageBannerInject } from "@/composables/Home/usePageBanner";
import { useCode } from "@/repositories/useCode";
import { useStateButton } from "@/components";

const { } = usePageBannerInject()

const isSuccess = ref(false)
const { modelRef } = useRegisterForm()
const c = useContext()
const success = () => {
}
const fail = () => {
}

const { post } = useCode()
const sendBtnCtx = useStateButton({
  name: '发送验证码',
  disabled: false,
  type: 'primary',
  icon: '',
  loading: false,
  interval: 0,
})

const sendCode = () => {
  sendBtnCtx.loading({ name: '发送中' })
  post(13090900909).then(
    value => {
      sendBtnCtx.success({ name: '发送成功', interval: 60 })
    }).catch(
      reason => {
        setTimeout(() => {
          sendBtnCtx.error({ name: '发送失败', interval: 10 })
        }, 1000)
      })
}

const regBtnCtx = useStateButton({
  name: '注册',
  disabled: false,
  type: 'primary',
  icon: '',
  loading: false,
  interval: 0,
})

const register = () => {
  regBtnCtx.loading({ name: '注册中' })
  post(13090900909).then(
    value => {
      regBtnCtx.success({ name: '注册成功', interval: 60 })
    }).catch(
      reason => {
        setTimeout(() => {
          regBtnCtx.error({ name: '注册失败', interval: 10 })
        }, 1000)
      })
}

</script>

<template lang="pug">
el-row(type="flex" justify="center")
  el-col(:xs="18" :sm="14" :md="10" :lg="8" :xl="8")
    el-form(size="mini")
      el-form-item(label="学号")
        el-input
      el-form-item(label="密码")
        el-input
      el-form-item(label="确认密码")
        el-input
      el-form-item(label="手机号码")
        el-input
          template(#append)
            h-state-button(v-on:click="sendCode" v-bind:data="unref(sendBtnCtx.data)")
      el-form-item(label="验证码" )
        el-input
      el-form-item
        h-state-button(v-on:click="register" v-bind:data="unref(regBtnCtx.data)") 注册
</template>


<style lang="stylus" scoped>
@import "../assets/stylus/main.styl";
</style>
