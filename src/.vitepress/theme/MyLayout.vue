<script setup>
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-ads-before>
      <div class="advertising">
        <div>
          <a href="http://learn.cuixueshe.com">
            课程即将开启预售
          </a>
        </div>
      </div>
    </template>
  </Layout>
</template>

<style>
.advertising {
  display: none;
  justify-content: center;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  min-height: 256px;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
  background-color: rgb(25, 25, 29);
}
</style>
