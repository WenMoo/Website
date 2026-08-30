<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button
    v-show="y > 480"
    class="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-lg ring-1 ring-black/5 transition hover:-translate-y-0.5"
    type="button"
    aria-label="回到顶部"
    @click="toTop"
  >
    ↑
  </button>
</template>
