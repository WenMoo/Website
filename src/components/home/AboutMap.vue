<script setup lang="ts">
import { aboutEn, aboutParagraphs, chinaCities, offices } from '@/data/site'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <section class="overflow-hidden bg-white">
    <div class="bg-ink py-10 text-center">
      <h2 class="text-2xl text-white/90 md:text-3xl">公司简介</h2>
      <p class="mt-2 text-sm tracking-[0.18em] text-white/45">{{ aboutEn }}</p>
      <div class="section-title-line mx-auto mt-3" />
    </div>

    <div class="relative mx-auto max-w-6xl px-4 py-16 lg:px-6">
      <div
        class="pointer-events-none absolute inset-0 opacity-40"
        style="background-image: radial-gradient(#d4d4d8 1px, transparent 1px); background-size: 18px 18px"
      />

      <RevealOnScroll>
        <div class="relative mx-auto max-w-3xl space-y-5 text-center text-[15px] leading-8 text-slate-600">
          <p v-for="(p, i) in aboutParagraphs" :key="i">{{ p }}</p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div class="relative mt-16">
          <svg viewBox="0 0 100 72" class="h-auto w-full text-slate-300" aria-hidden="true">
            <rect width="100" height="72" fill="transparent" />
            <path
              fill="currentColor"
              opacity="0.35"
              d="M8 28c4-8 12-12 20-11 6 1 9 6 14 7 6 1 10-4 16-5 8-1 14 3 18 8 3 4 9 5 13 9 2 2 3 7-1 9-6 3-13 1-19 3-7 2-10 8-17 9-8 1-14-4-21-4-8 0-16 4-23 1-5-2-7-9-4-15 2-4 2-8 4-11z"
            />
            <path
              fill="currentColor"
              opacity="0.28"
              d="M58 18c6-3 14-2 18 3 3 4 8 6 9 11 1 6-4 10-9 12-6 2-12-1-18-1-5 0-10 3-14 0-3-2-2-8 1-11 4-4 7-10 13-14z"
            />
          </svg>

          <div
            v-for="office in offices"
            :key="office.id"
            class="absolute -translate-x-1/2 -translate-y-1/2"
            :style="{ left: `${office.x}%`, top: `${office.y}%` }"
          >
            <span class="office-pulse relative block h-2.5 w-2.5 rounded-full bg-brand" />
            <span class="absolute left-3 top-[-6px] whitespace-nowrap text-[11px] text-slate-500">
              {{ office.country }} · {{ office.city }}
            </span>
          </div>
        </div>
      </RevealOnScroll>

      <p class="relative mt-8 text-center text-sm text-slate-500">
        中国：{{ chinaCities.join(' / ') }}
      </p>
    </div>
  </section>
</template>
