<script lang="ts" setup="props">
import LoginDialog from "/@/views/common/LoginDialog.vue";
import PageLayout from '/@/views/layout/PageLayout.vue';
import {pageLayout} from '/@/views/layout/layout';

import {defineProps, ref} from "vue";
import {useBreadcrumbProvide} from "/@/composables/Home/useBreadcrumb";
import {useRouter} from "vue-router";
import {usePageBannerProvide} from "/@/composables/Home/usePageBanner";
import {useMenu} from "/@/composables/useMenu";

const props = defineProps({})

const loginVisible = ref(false)
const breadcrumbCtx = ref(useBreadcrumbProvide())
const {back} = useRouter()
const bannerCtx = ref(usePageBannerProvide())
const {menuRouters} = useMenu()
const login = (form: any) => {
  console.log(form)
  // form.username = '12312313'
  loginVisible.value = false
}
const drawerEnable = ref(false)
const drawerToggle = () => {
  drawerEnable.value = !drawerEnable.value
}

</script>
<template lang="pug">
el-container
  el-affix(z-index="9999" ta)
    el-header.header-nav.flex-row-start.flex-align-center.main-blue
      .nav-left.flex-row-start.flex-align-center
        // adapt mobile
        el-popover(trigger="click")
          template(#reference)
            i.el-icon-s-unfold.logo-font.hidden-sm-and-up.margin-right-1em
          el-menu(mode='vertical' :router="true" background-color="#49a9ea"  text-color="white" active-text-color="blue" )
            el-menu-item.nav-font(v-for="(route,index) in menuRouters" :index="route.path") {{route.meta?.title}}
        router-link(to="/")
          span.logo-font HNITACM
        el-menu.hidden-xs-only.nav-middle.flex-row-start.margin-left-1em(mode='horizontal' :router="true" background-color="#49a9ea"  text-color="white" active-text-color="blue")
          el-menu-item.nav-font(v-for="(route,index) in menuRouters" :index="route.path") {{route.meta?.title}}
      .nav-right.flex-row-end.flex-align-center
        el-space.font-color-white(spacer="|" size="small")
          el-button(type='text' v-on:click="loginVisible=true" )
            span.navigation-item 登录
          el-button(type='text')
            router-link(to="/register")
              span.navigation-item 注册
  el-main.content
    .page-banner.flex-col-start.flex-align-center(v-show="bannerCtx.banner ?? false")
      img(:src="bannerCtx.banner")
    page-layout(v-bind:layout="pageLayout")
      .flex-row-start.flex-align-center(v-if="breadcrumbCtx.visible" style={height: 'auto'})
        el-breadcrumb(v-show="breadcrumbCtx.visible" separator-class="el-icon-arrow-right")
          el-breadcrumb-item(v-for="(item) in breadcrumbCtx.routes" :to="item") {{item.meta.title}}
        a-button(type="link" v-on:click="back" style={marginLeft: 'auto'})
          template(#icon)
            LeftCircleTwoTone/
          | 返回
    router-view/
  el-footer
    | ©2020 Power by Nekilc
  login-dialog(v-bind:visible="loginVisible" v-on:event-closed="loginVisible=false" v-on:event-login="login")

</template>

<style lang="stylus" scoped>
@import "../assets/stylus/main.styl"

.nav-font
  @extend .main-font-bold-1_2em
  @extend .font-color-white

.logo-font
  @extend .main-font-bold-2em
  @extend .font-color-white

.navigation-item
  font-family -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol
  font-family -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'
  font-family "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif
  font-size 1.2em
  font-weight bold
  color white

.header-nav
  height auto
  line-height unset
  padding 0 2em

.nav-left
  height 100%
  margin-right 1em


.nav-middle
  width auto
  background #49a9ea

.nav-right
  //width 100%
  margin-left auto

.content
  background white

//padding 2%

.page-banner
  width 100%
  height auto
  background aqua
  overflow hidden

</style>
