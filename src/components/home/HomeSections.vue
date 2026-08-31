<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { homeSections } from '@/data/site'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <div>
    <section
      v-for="(item, i) in homeSections"
      :key="item.to"
      :class="i % 2 === 1 ? 'bg-[#f7f8fa]' : 'bg-white'"
    >
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <RevealOnScroll :class="i % 2 === 1 ? 'lg:order-2' : ''">
          <RouterLink :to="item.to" class="group block overflow-hidden rounded-3xl">
            <img
              :src="item.image"
              :alt="item.title"
              class="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04] md:h-[380px]"
              loading="lazy"
            />
          </RouterLink>
        </RevealOnScroll>

        <RevealOnScroll>
          <p class="text-xs tracking-[0.28em] text-slate-400">
            {{ String(i + 1).padStart(2, '0') }} / {{ item.kicker }}
          </p>
          <h2 class="mt-3 text-3xl font-medium tracking-wide text-ink md:text-4xl">{{ item.title }}</h2>
          <div class="section-title-line mt-4" />
          <p class="mt-6 max-w-md text-[15px] leading-8 text-slate-500">{{ item.desc }}</p>
          <RouterLink
            :to="item.to"
            class="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink"
          >
            查看更多
            <span
              class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-[13px] transition group-hover:translate-x-0.5"
            >
              →
            </span>
          </RouterLink>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>
