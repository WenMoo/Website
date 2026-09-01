<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { gamesPage, products } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'

const featured = computed(() => products.find((game) => game.featured) ?? products[0])
const activeFilter = ref<(typeof gamesPage.filters)[number]>('全部')

const filteredGames = computed(() =>
  activeFilter.value === '全部' ? products : products.filter((game) => game.genre === activeFilter.value),
)
</script>

<template>
  <div class="pt-16">
    <section
      class="relative flex min-h-[420px] items-end bg-cover bg-center"
      :style="{ backgroundImage: `url(${gamesPage.heroImage})` }"
    >
      <div class="absolute inset-0 bg-black/45" />
      <div class="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 text-white lg:px-6">
        <p class="text-sm tracking-[0.28em] text-white/70">OUR GAMES</p>
        <h1 class="mt-3 text-4xl font-medium md:text-5xl">游戏产品</h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-white/80">{{ gamesPage.intro }}</p>
      </div>
    </section>

    <section v-if="featured" class="px-4 py-20 lg:px-6">
      <div class="mx-auto max-w-6xl">
        <p class="text-sm tracking-[0.2em] text-slate-400">Featured</p>
        <h2 class="mt-2 text-2xl text-ink md:text-3xl">代表作</h2>
        <div class="section-title-line mt-3" />

        <RevealOnScroll>
          <article class="mt-10 overflow-hidden rounded-3xl bg-[#f7f8fa] lg:grid lg:grid-cols-2">
            <div
              class="min-h-[260px] bg-cover bg-center md:min-h-[360px]"
              :style="{ backgroundImage: `url(${featured.cover})` }"
            />
            <div class="flex flex-col justify-center p-8 md:p-12">
              <div class="flex flex-wrap gap-2">
                <span class="rounded-full bg-white px-3 py-1 text-xs text-slate-500">{{ featured.platform }}</span>
                <span class="rounded-full bg-brand/20 px-3 py-1 text-xs text-brand-dark">{{ featured.genre }}</span>
              </div>
              <h3 class="mt-5 text-3xl text-ink">{{ featured.name }}</h3>
              <p class="mt-2 text-sm text-brand-dark">{{ featured.metric }}</p>
              <p class="mt-5 text-[15px] leading-8 text-slate-600">{{ featured.summary }}</p>
              <ul class="mt-6 flex flex-wrap gap-2">
                <li
                  v-for="item in featured.highlights"
                  :key="item"
                  class="rounded-md bg-white px-3 py-1.5 text-xs text-slate-500"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </section>

    <section class="bg-[#f7f8fa] px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="全部产品" en="All Titles" />

        <div class="mb-12 flex flex-wrap justify-center gap-3">
          <button
            v-for="filter in gamesPage.filters"
            :key="filter"
            type="button"
            class="rounded-full px-5 py-2 text-sm transition"
            :class="
              activeFilter === filter
                ? 'bg-ink text-white'
                : 'bg-white text-slate-500 hover:text-ink'
            "
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="space-y-8">
          <RevealOnScroll v-for="(game, i) in filteredGames" :key="game.id">
            <article class="grid items-center gap-8 overflow-hidden rounded-3xl bg-white p-4 shadow-sm md:p-6 lg:grid-cols-2 lg:gap-12 lg:p-0">
              <div
                class="min-h-[220px] rounded-2xl bg-cover bg-center lg:min-h-[300px] lg:rounded-none"
                :class="i % 2 === 1 ? 'lg:order-2' : ''"
                :style="{ backgroundImage: `url(${game.cover})` }"
              />
              <div class="px-2 pb-4 lg:px-10 lg:py-10">
                <div class="flex flex-wrap gap-2">
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">{{ game.platform }}</span>
                  <span class="rounded-full bg-brand/20 px-3 py-1 text-xs text-brand-dark">{{ game.genre }}</span>
                </div>
                <h3 class="mt-4 text-2xl text-ink">{{ game.name }}</h3>
                <p class="mt-1 text-xs text-brand-dark">{{ game.metric }}</p>
                <p class="mt-4 text-sm leading-7 text-slate-500">{{ game.summary }}</p>
                <ul class="mt-5 flex flex-wrap gap-2">
                  <li
                    v-for="item in game.highlights"
                    :key="item"
                    class="rounded-md bg-slate-50 px-3 py-1.5 text-xs text-slate-500"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </article>
          </RevealOnScroll>
        </div>
      </div>
    </section>

    <section class="bg-ink px-4 py-20 text-center text-white">
      <RevealOnScroll>
        <p class="text-sm tracking-[0.24em] text-white/50">MAKE GAMES WITH US</p>
        <h2 class="mt-3 text-3xl font-medium">这些产品，由你来写下个版本</h2>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">
          策划、程序、美术、运营都在扩招。来和上线产品一起打磨长期口碑。
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/jobs"
            class="rounded-full bg-brand px-7 py-3 text-sm text-ink transition hover:bg-brand-dark"
          >
            加入我们
          </RouterLink>
          <RouterLink
            to="/about"
            class="rounded-full border border-white/25 px-7 py-3 text-sm text-white transition hover:border-white/60"
          >
            了解必凡
          </RouterLink>
        </div>
      </RevealOnScroll>
    </section>
  </div>
</template>
