<script lang="ts" setup>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons-vue'
const selectedKeys = ref<string[]>(['1'])
const collapsed = ref<boolean>(false)
</script>

<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div v-if="!collapsed" class="logo">Vue Antd Admin</div>
      <div v-else class="logo">Admin</div>
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          style="font-size: 20px"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined v-else style="font-size: 20px" class="trigger" @click="() => (collapsed = !collapsed)" />
      </a-layout-header>
      <a-layout-content class="layout-content">
        <router-view />
      </a-layout-content>
      <a-layout-footer>
        <Footer />
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style lang="less" scoped>
.layout {
  display: flex;
  overflow-y: hidden;

  .logo {
    color: #58bc58;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .layout-content {
    padding: 20px;
    height: calc(100vh - 166px);
    overflow: auto;
    text-align: center;
  }
}
</style>
