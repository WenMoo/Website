<script setup lang="ts">
import { products } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <section class="bg-[#f7f8fa] px-4 py-20">
    <div class="mx-auto max-w-6xl">
      <SectionTitle title="产品介绍" en="Our Games" />
      <RevealOnScroll>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="game in products"
            :key="game.id"
            class="overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition hover:-translate-y-1"
          >
            <div class="h-44 bg-cover bg-center" :style="{ backgroundImage: `url(${game.cover})` }" />
            <div class="p-5">
              <h3 class="text-lg text-ink">{{ game.name }}</h3>
              <p class="mt-2 text-sm leading-6 text-slate-500">{{ game.summary }}</p>
              <p class="mt-4 text-xs text-brand-dark">{{ game.metric }}</p>
            </div>
          </article>
        </div>
      </RevealOnScroll>
      <p class="mt-10 text-center text-slate-400">更多精彩游戏……</p>
    </div>
  </section>
</template>
