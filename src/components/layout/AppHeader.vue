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
    <div class="relative flex h-16 w-full items-center justify-between px-5 lg:h-[72px] lg:px-10 xl:px-14">
      <RouterLink to="/" class="relative z-10 shrink-0">
        <img :src="brand.logo" :alt="brand.name" class="h-10 w-auto object-contain" />
      </RouterLink>

      <p
        class="pointer-events-none absolute left-1/2 top-1/2 z-[1] w-[42%] max-w-md -translate-x-1/2 -translate-y-1/2 truncate text-center text-[11px] font-medium tracking-[0.06em] transition-opacity duration-300 sm:text-[12px] lg:text-[13px] lg:tracking-[0.08em] xl:text-sm"
        :class="transparent ? 'opacity-0' : 'opacity-100'"
      >
        {{ hero.slogan }}
      </p>

      <nav class="relative z-10 hidden shrink-0 items-center gap-5 text-[14px] lg:flex xl:gap-7 xl:text-[15px]">
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
        class="inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
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

    <div v-if="menuOpen" class="border-t border-black/5 bg-white text-ink lg:hidden">
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
