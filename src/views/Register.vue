<script lang="ts" setup>
import StateButton from '/@/components/stateButton/StateButton.vue'

import {ref, useContext,unref} from 'vue';
import useRegisterForm from "/@/composables/useRegisterForm";
import {message} from 'ant-design-vue'
import {usePageBannerInject} from "/@/composables/Home/usePageBanner";
import {useCode} from "/@/repositories/useCode";
import {useStateButton} from "/@/components/stateButton/useStateButton";

const {} = usePageBannerInject()

const isSuccess = ref(false)
const {modelRef, validateInfos, onSubmit} = useRegisterForm()
const c = useContext()
const success = () => {
  message.success("success")
}
const fail = () => {
  message.error("error")
}
const submit = (e: { preventDefault: () => void }) => {
  onSubmit(e).then(success).catch(fail)
}

const {post} = useCode()
const sendBtnCtx = useStateButton({name:'发送验证码'})

const sendCode = () => {
  sendBtnCtx.loading({name:'发送中'})
  post({}).then(
      value => {
        sendBtnCtx.success({name:'发送成功',interval:60})
      }).catch(
      reason => {
        setTimeout(()=>{
          sendBtnCtx.warning({name:'发送失败',interval:10})
        },1000)
      })
}

</script>

<template lang="pug">
el-row(type="flex" justify="center")
  el-col(:xs="18" :sm="14" :md="10" :lg="8" :xl="8")
    el-card(:body-style="{width: 'auto'}" :shadow="'never'")
      template(#header) 注册
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
              state-button(v-on:click="sendCode" v-bind:data="unref(sendBtnCtx.data)")
        el-form-item(label="验证码" )
          el-input
        el-form-item
          el-button(type="primary") 注册
</template>


<style lang="stylus" scoped>
@import "../assets/stylus/main.styl";
</style>
