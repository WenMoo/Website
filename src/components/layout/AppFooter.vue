<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { brand } from '@/data/site'
</script>

<template>
  <footer class="bg-brand text-white">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.2fr_1fr_1fr] lg:px-6">
      <div>
        <div class="flex items-center gap-3">
          <img :src="brand.logo" :alt="brand.name" class="h-12 w-auto object-contain" />
        </div>
        <p class="mt-4 max-w-sm text-sm/6 text-white/90">{{ brand.tagline }}</p>
        <p class="mt-2 text-xs text-white/80">{{ brand.legalName }}</p>
      </div>

      <div class="text-sm/7">
        <p>招聘邮箱：{{ brand.email }}</p>
        <p>商务邮箱：{{ brand.contactEmail }}</p>
        <p>电话：{{ brand.phone }}</p>
        <p>地址：{{ brand.address }}</p>
        <p class="mt-4 text-white/90">适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
      </div>

      <div class="flex gap-6">
        <div class="text-center text-xs">
          <div class="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-md bg-white text-[10px] leading-4 text-ink">
            微信公众号
            <br />
            二维码占位
          </div>
          微信公众号
        </div>
        <div class="text-center text-xs">
          <div class="mx-auto mb-2 flex h-20 w-20 items-center justify-center rounded-md bg-white text-[10px] leading-4 text-ink">
            小红书
            <br />
            二维码占位
          </div>
          小红书官方号
        </div>
      </div>
    </div>

    <div class="border-t border-white/25">
      <div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 text-xs text-white/90 lg:px-6">
        <p>©{{ brand.copyrightYear }} {{ brand.name }} {{ brand.nameEn }}</p>
        <p class="flex flex-wrap items-center gap-3">
          <span>{{ brand.icp }}</span>
          <span v-if="brand.police">{{ brand.police }}</span>
          <RouterLink to="/privacy" class="underline decoration-white/50 underline-offset-2">隐私政策</RouterLink>
        </p>
      </div>
    </div>
  </footer>
</template>
