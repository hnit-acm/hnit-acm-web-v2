<template>
  <a-row type="flex" justify="center">
    <a-col :xs="18" :sm="14" :md="10" :lg="8" :xl="8">
      <a-card title="注册" :bordered="false" :bodyStyle="{width: 'auto'}">
        <a-form layout="vertical" :wrapperCol="wrapperCol" v-if="!isSuccess">
          <a-form-item label="学号" v-bind="validateInfos.schoolNumber" required>
            <a-input v-model:value="modelRef.schoolNumber"/>
          </a-form-item>
          <a-form-item label="密码" v-bind="validateInfos.password">
            <a-input v-model:value="modelRef.password"/>
          </a-form-item>
          <a-form-item label="确认密码" v-bind="validateInfos.confirm">
            <a-input v-model:value="modelRef.confirm"/>
          </a-form-item>
          <a-form-item label="手机号码" v-bind="validateInfos.phone">
            <a-input-search
                v-model:value.number="modelRef.phone"
                @search="sendCode"
            >
              <template v-slot:enterButton>
                <a-button type="primary" @click="sendCode">
                  发送验证码
                </a-button>
              </template>
            </a-input-search>
          </a-form-item>
          <a-form-item label="验证码" v-bind="validateInfos.code">
            <a-input v-model:value="modelRef.code"/>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 24 }">
            <a-button type="primary" @click="submit">
              注册
            </a-button>
          </a-form-item>
        </a-form>
        <div v-if="isSuccess">
          注册成功
        </div>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import {defineComponent, ref,useContext} from 'vue';
import useRegisterForm from "/@/composables/useRegisterForm";
import {SetupContext} from "@vue/runtime-core";
import {message} from 'ant-design-vue'
import {usePageBannerInject} from "/@/composables/Home/usePageBanner";

export default defineComponent({
  name: "Register",
  props: {},
  setup(props: {}, ctx: SetupContext<any>) {
    const {} = usePageBannerInject()

    const isSuccess = ref(false)
    const {modelRef, validateInfos, onSubmit} = useRegisterForm()
    const c =useContext()
    const success = () => {
      message.success("success")
    }
    const fail = () => {
      message.error("error")
    }
    const submit = (e: { preventDefault: () => void }) => {
      onSubmit(e).then(success).catch(fail)
    }
    const sendCode = ()=>{
      message.success("send code")
    }
    return {
      modelRef,
      validateInfos,
      submit,
      wrapperCol: {
        span: 24
      },
      isSuccess,
      sendCode
    }
  },
})
</script>

<style scoped>

</style>
