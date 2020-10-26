<template>
  <a-modal
      :visible="visible"
      title="登录"
      centered
      :footer="null"
      @cancel="cancel"
      :maskClosable="false"
  >
    <a-form layout="vertical">
      <a-form-item>
        <a-input placeholder="Username">
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input type="password" placeholder="Password">
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" style="width: 100%;">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "LoginDialog",
  props: {
    visible: Boolean
  },
  methods: {
    cancel:function(): void {
      this.$emit('cancel')
    }
  }

})
</script>

<style scoped>

</style>
