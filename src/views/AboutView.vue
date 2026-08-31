<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { aboutPage, aboutParagraphs, brand, products } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <div class="pt-16">
    <section
      class="relative flex min-h-[420px] items-end bg-cover bg-center"
      :style="{ backgroundImage: `url(${aboutPage.heroImage})` }"
    >
      <div class="absolute inset-0 bg-black/40" />
      <div class="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 text-white lg:px-6">
        <p class="text-sm tracking-[0.28em] text-white/70">ABOUT US</p>
        <h1 class="mt-3 text-4xl font-medium md:text-5xl">关于我们</h1>
        <p class="mt-4 max-w-xl text-base text-white/80">{{ brand.tagline }}</p>
      </div>
    </section>

    <section class="px-4 py-20 lg:px-6">
      <div class="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <RevealOnScroll>
          <img
            :src="aboutPage.storyImage"
            alt="必凡办公环境"
            class="h-[320px] w-full rounded-2xl object-cover md:h-[400px]"
          />
        </RevealOnScroll>
        <RevealOnScroll>
          <div>
            <p class="text-sm tracking-[0.2em] text-slate-400">Who We Are</p>
            <h2 class="mt-2 text-2xl text-ink md:text-3xl">我们是谁</h2>
            <div class="section-title-line mt-3" />
            <div class="mt-8 space-y-5 text-[15px] leading-8 text-slate-600">
              <p v-for="(p, i) in aboutParagraphs" :key="i">{{ p }}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="bg-ink px-4 py-14">
      <RevealOnScroll>
        <div class="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
          <div v-for="item in aboutPage.stats" :key="item.label" class="text-center">
            <p class="text-3xl font-medium text-brand md:text-4xl">{{ item.value }}</p>
            <p class="mt-2 text-sm text-white/65">{{ item.label }}</p>
          </div>
        </div>
      </RevealOnScroll>
    </section>

    <section class="bg-[#f7f8fa] px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="我们相信" en="Our Values" />
        <RevealOnScroll>
          <div class="grid gap-6 md:grid-cols-3">
            <article
              v-for="item in aboutPage.values"
              :key="item.title"
              class="rounded-2xl bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
            >
              <p class="text-xs tracking-[0.18em] text-slate-400">{{ item.en }}</p>
              <h3 class="mt-3 text-xl text-ink">{{ item.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-slate-500">{{ item.desc }}</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="发展历程" en="Our Journey" />
        <RevealOnScroll>
          <ol class="relative mx-auto max-w-3xl border-l border-slate-200 pl-8">
            <li
              v-for="item in aboutPage.timeline"
              :key="item.title"
              class="relative pb-12 last:pb-0"
            >
              <span class="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full bg-brand" />
              <p class="text-xs tracking-[0.16em] text-slate-400">{{ item.year }}</p>
              <h3 class="mt-1 text-lg text-ink">{{ item.title }}</h3>
              <p class="mt-2 text-sm leading-7 text-slate-500">{{ item.desc }}</p>
            </li>
          </ol>
        </RevealOnScroll>
      </div>
    </section>

    <section class="bg-[#f7f8fa] px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="我们在做的事" en="What We Do" />
        <RevealOnScroll>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            <article
              v-for="game in products"
              :key="game.id"
              class="overflow-hidden rounded-2xl bg-white shadow-sm"
            >
              <div class="h-28 bg-cover bg-center" :style="{ backgroundImage: `url(${game.cover})` }" />
              <div class="p-4">
                <h3 class="text-sm text-ink">{{ game.name }}</h3>
                <p class="mt-1 text-[11px] text-slate-400">{{ game.metric }}</p>
              </div>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="办公地点" en="Locations" />
        <RevealOnScroll>
          <div class="grid gap-6 md:grid-cols-2">
            <article
              v-for="office in aboutPage.officeCards"
              :key="office.city"
              class="rounded-2xl border border-slate-100 bg-slate-50 px-8 py-10"
            >
              <p class="text-xs tracking-[0.16em] text-slate-400">{{ office.tag }}</p>
              <h3 class="mt-2 text-2xl text-ink">{{ office.city }}</h3>
              <p class="mt-4 text-sm leading-7 text-slate-500">{{ office.hint }}</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="bg-ink px-4 py-20 text-center text-white">
      <RevealOnScroll>
        <p class="text-sm tracking-[0.24em] text-white/50">JOIN US</p>
        <h2 class="mt-3 text-3xl font-medium">欢迎有同样热爱的人加入 BeeFun</h2>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">
          社招、校招与实习通道即将开放，也可以先把简历发到招聘邮箱。
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <RouterLink
            to="/social"
            class="rounded-full bg-brand px-7 py-3 text-sm text-ink transition hover:bg-brand-dark"
          >
            社会招聘
          </RouterLink>
          <RouterLink
            to="/campus"
            class="rounded-full border border-white/25 px-7 py-3 text-sm text-white transition hover:border-white/60"
          >
            校园招聘
          </RouterLink>
        </div>
        <a :href="`mailto:${brand.email}`" class="mt-6 inline-block text-sm text-white/55 hover:text-white">
          {{ brand.email }}
        </a>
      </RevealOnScroll>
    </section>
  </div>
</template>
