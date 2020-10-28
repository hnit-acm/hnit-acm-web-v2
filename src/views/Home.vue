<template>
  <a-layout>
    <a-layout-header class="header-nav">
      <div class="nav-left">
        <img style="height: 68%;width: auto;" src="../assets/nav-logo-color.png">
      </div>
      <a-menu
          theme="dark"
          mode="horizontal"
          class="nav-middle"
      >
        <a-menu-item key="1">
          <router-link to="index">
            <span class="navigation-item">首页</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="practice">
            <span class="navigation-item">算法练习</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="competition">
            <span class="navigation-item">在线竞赛</span>
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="about">
            <span class="navigation-item">关于我们</span>
          </router-link>
        </a-menu-item>
      </a-menu>
      <div class="nav-right">
        <a-space>
          <a-button type="link" @click="visible=true">
            <span class="navigation-item">登录</span>
          </a-button>
          <span class="navigation-item">|</span>
          <a-button type="link">
            <router-link to="/register">
              <span class="navigation-item">注册</span>
            </router-link>
          </a-button>
        </a-space>

      </div>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view></router-view>
<!--      <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">-->
<!--        Content-->
<!--      </div>-->
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }">
      ©2020 Power by Nekilc
    </a-layout-footer>
    <login-dialog :visible="visible" @cancel="visible=false"></login-dialog>
  </a-layout>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LoginDialog from "@/components/LoginDialog.vue";

export default defineComponent({
  name: 'Home',
  components: {LoginDialog},
  data: () => {
    return {
      visible: Boolean(false)
    }
  }
});
</script>

<style lang="stylus" scoped>
.navigation-item
  font-family -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
  font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
  font-size 1.2em
  font-weight bold
  color white

.header-nav
  display flex
  flex-direction row
  justify-content flex-start
  align-items center

.nav-left
  height 100%


.nav-middle
  width auto

.nav-right
  width 100%
  display flex
  flex-direction row
  justify-content flex-end
  align-items center

.content
  padding 3%

</style>
