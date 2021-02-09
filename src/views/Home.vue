<script lang="ts" setup="props">
import LoginDialog from "/@/components/LoginDialog.vue";

import {ref} from "vue";
import {useBreadcrumbProvide} from "/@/composables/Home/useBreadcrumb";
import {useRouter} from "vue-router";
import {usePageBannerProvide} from "/@/composables/Home/usePageBanner";
import {useMenu} from "/@/composables/useMenu";

declare const props: {}

const loginVisible = ref(false)
const breadcrumbCtx = ref(useBreadcrumbProvide())
const {back} = useRouter()
const bannerCtx = ref(usePageBannerProvide())
const {menuRouters} = useMenu()
console.log(menuRouters)
const login = (form: any) => {
  console.log(form)
  form.username = '12312313'
}
</script>

<template>
  <el-container>
    <el-header class="header-nav">
      <div class="nav-left">
        <router-link to="/">
          <span style="color: white;font-size: 2em;">HNITACM</span>
        </router-link>
      </div>
      <el-menu class="nav-middle" router mode="horizontal" text-color="white" active-text-color="white" background-color="#49a9ea">
        <el-menu-item v-for="(route,index) in menuRouters" :key="index" :index="route.path" >
          {{ route.meta.title }}
        </el-menu-item>
      </el-menu>
      <div class="nav-right">
        <a-space>
          <a-button type="link" @click="loginVisible=true">
            <span class="navigation-item">登录</span>
          </a-button>
          <span class="navigation-item">|</span>
          <a-button type="link">
            <router-link to="register">
              <span class="navigation-item">注册</span>
            </router-link>
          </a-button>
        </a-space>
      </div>
    </el-header>
    <el-main class="content">
      <div class="page-banner" v-if="bannerCtx.banner"
           style="width: 100%;height: auto;background: aqua;display: flex;align-items: center;flex-direction: column;overflow: hidden;">
        <img style="width: auto;height: auto;background: aqua;"
             :src="bannerCtx.banner">
      </div>
      <a-row type="flex" style="margin-top: 1em;" align="center">
        <a-col :xs="24" :sm="20" :lg="20" :xxl="15">
          <div style="display: flex;height: auto;align-items: center;" v-if="breadcrumbCtx.visible">
            <a-breadcrumb :routes="breadcrumbCtx.routes">
              <template #itemRender="{ route, params, routes, paths }">
                <router-link :to="`/${paths.join('/')}`">
                  {{ route.breadcrumbName }}
                </router-link>
              </template>
            </a-breadcrumb>
            <div></div>
            <a-button type="link" v-on:click="back" style="margin-left: auto;">
              <template #icon>
                <LeftCircleTwoTone/>
              </template>
              返回
            </a-button>
          </div>
        </a-col>
      </a-row>
      <router-view></router-view>
    </el-main>
    <el-footer :style="{ textAlign: 'center' }">
      ©2020 Power by Nekilc
    </el-footer>
    <login-dialog v-bind:visible="loginVisible" v-on:cancel="loginVisible=false" v-on:login="login"></login-dialog>
  </el-container>
</template>

<style lang="stylus" scoped>
@import "../assets/stylus/main.styl"

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
  height auto
  line-height unset
  padding 0 2em
  background #49a9ea

.nav-left
  height 100%
  margin-right 1em


.nav-middle
  width auto
  background #49a9ea

.nav-right
  //width 100%
  margin-left auto
  display flex
  flex-direction row
  justify-content flex-end
  align-items center

.content
  background white

//padding 2%

.page-banner
  width 100%
  height auto
  background aqua
  display flex
  align-items center
  flex-direction column
  overflow hidden

</style>
