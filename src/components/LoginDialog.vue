<template>
  <a-modal
      :visible="visible"
      title="登录"
      centered
      :footer="null"
      @cancel="$emit('cancel')"
      :maskClosable="false"
  >
    <a-form layout="vertical" v-model="loginForm">
      <a-form-item v-model="loginForm.username">
        <a-input placeholder="请输入账号">
        </a-input>
      </a-form-item>
      <a-form-item v-model="loginForm.password">
        <a-input type="password" placeholder="请输入密码">
        </a-input>
      </a-form-item>
      <a-form-item v-if="codeVisible">
        <a-input type="text" placeholder="请输入验证码">
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="width: 100%;" v-on:click="$emit('login',toRef(loginForm))">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import {defineComponent, defineEmit, ref, readonly,toRef} from 'vue';

export default defineComponent({
  name: "LoginDialog",
  props: {
    visible: () => false,
    codeVisible: () => false,
  },
  setup: function () {
    const loginForm = ref({
      username: '',
      password: '',
    })
    defineEmit(['cancel', 'login'])
    return {
      loginForm,
      toRef,
    }
  },
})
</script>

<style scoped>

</style>
