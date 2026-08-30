<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { brand, hero, navItems } from '@/data/site'

const route = useRoute()
const { y } = useWindowScroll()
const { width } = useWindowSize()
const menuOpen = ref(false)
const heroBottom = ref(Number.POSITIVE_INFINITY)

function measureHero() {
  const el = document.querySelector<HTMLElement>('[data-nav-hero]')
  heroBottom.value = el ? el.getBoundingClientRect().bottom : 0
}

const transparent = computed(
  () => Boolean(route.meta.transparentNav) && heroBottom.value > 0 && !menuOpen.value,
)

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

watch(
  [y, width, () => route.fullPath],
  async () => {
    await nextTick()
    measureHero()
  },
  { immediate: true },
)
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-[100] pointer-events-auto transition-colors duration-300"
    :class="
      transparent
        ? 'bg-transparent text-white'
        : 'bg-white/95 text-ink shadow-[0_1px_0_rgba(0,0,0,0.06)] backdrop-blur'
    "
  >
    <div class="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 lg:h-[72px] lg:px-6">
      <RouterLink to="/" class="relative z-10 flex items-center">
        <img :src="brand.logo" :alt="brand.name" class="h-10 w-auto object-contain" />
      </RouterLink>

      <p
        class="pointer-events-none absolute left-1/2 top-1/2 max-w-[42%] -translate-x-1/2 -translate-y-1/2 truncate text-center text-[10px] font-medium tracking-[0.06em] transition-opacity duration-300 sm:text-[12px] md:max-w-[46%] md:text-[13px] lg:text-sm lg:tracking-[0.08em]"
        :class="transparent ? 'opacity-0' : 'opacity-100'"
      >
        {{ hero.slogan }}
      </p>

      <nav class="relative z-10 hidden items-center gap-7 text-[15px] md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="relative py-1 transition-opacity hover:opacity-80"
        >
          {{ item.label }}
          <span
            v-if="route.path === item.to"
            class="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-brand"
          />
        </RouterLink>
      </nav>

      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden"
        type="button"
        :aria-expanded="menuOpen"
        aria-label="打开导航"
        @click="menuOpen = !menuOpen"
      >
        <span class="sr-only">菜单</span>
        <span class="flex flex-col gap-1.5">
          <i class="block h-0.5 w-5 bg-current" />
          <i class="block h-0.5 w-5 bg-current" />
          <i class="block h-0.5 w-5 bg-current" />
        </span>
      </button>
    </div>

    <div v-if="menuOpen" class="border-t border-black/5 bg-white text-ink md:hidden">
      <RouterLink
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        class="block px-5 py-3 text-sm"
        :class="route.path === item.to ? 'text-brand-dark' : ''"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </header>
</template>
