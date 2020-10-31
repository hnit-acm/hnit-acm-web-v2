<template>
  <a-row type="flex" justify="center">
    <a-col :xs="18" :sm="14" :md="10" :lg="8" :xl="8">
      <a-card title="注册" :bordered="false" :bodyStyle="{width: 'auto'}">
        <a-form layout="vertical" :wrapperCol="wrapperCol">
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
                v-model:value="modelRef.phone"
            >
              <template v-slot:enterButton>
                <a-button type="primary">
                  发送验证码
                </a-button>
              </template>
            </a-input-search>
          </a-form-item>
          <a-form-item label="验证码" v-bind="validateInfos.code">
            <a-input v-model:value="modelRef.code"/>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 24 }">
            <a-button type="primary" @click="onSubmit">
              注册
            </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import {defineComponent, reactive, toRaw} from 'vue';
import {useForm} from '@ant-design-vue/use';

export default defineComponent({
  name: "Register",
  setup() {
    const modelRef = reactive({
      schoolNumber: '',
      password: '',
      confirm: '',
      phone: '',
      code: ''
    });
    const {resetFields, validate, validateInfos} = useForm(
        modelRef,
        reactive({
          schoolNumber: [
            {
              required: true, trigger: ['change', 'blur'], message: '请输入学号',
            },
            {
              len: 11, trigger: ['change', 'blur'], message: '学号长度不正确',
            },
          ],
          password: [
            {
              required: true, trigger: ['change', 'blur'], message: '请输入密码',
            },
            {
              len: 11, trigger: ['change', 'blur'], message: '学号长度不正确',
            },
          ],
          confirm: [
            {
              required: true, trigger: ['change', 'blur'], message: '请再次输入密码',
            },
            {
              len: 11, trigger: ['change', 'blur'], message: '学号长度不正确',
            },
          ],
          phone: [
            {
              required: true, trigger: ['change', 'blur'], message: '请输入手机号码',
            },
            {
              len: 11, trigger: ['change', 'blur'], message: '学号长度不正确',
            },
          ],
          code: [
            {
              required: true, trigger: ['change', 'blur'], message: '请输入验证码',
            },
            {
              len: 11, trigger: ['change', 'blur'], message: '学号长度不正确',
            },
          ],
        }),
    );
    const onSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      validate()
          .then(res => {
            console.log(res, toRaw(modelRef));
          })
          .catch(err => {
            console.log('error', err);
          });
    };
    return {
      wrapperCol: {
        span: 24
      },
      validateInfos,
      modelRef,
      onSubmit,
    };
  },
})
</script>

<style scoped>

</style>
