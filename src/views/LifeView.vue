<script setup lang="ts">
import { clubs, lifeIntro, workPhotos } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
</script>

<template>
  <div class="pt-16">
    <section
      class="relative flex min-h-[420px] items-end bg-cover bg-center"
      style="background-image: url(/images/life-hero.svg)"
    >
      <div class="absolute inset-0 bg-black/35" />
      <div class="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 text-white lg:px-6">
        <h1 class="text-4xl font-medium">必凡乐活</h1>
        <p class="mt-3 tracking-[0.2em] text-white/70">Our Club</p>
      </div>
    </section>

    <section class="px-4 py-16">
      <div class="mx-auto max-w-3xl space-y-4 text-center text-slate-600 leading-8">
        <p v-for="(p, i) in lifeIntro" :key="i">{{ p }}</p>
      </div>
    </section>

    <section class="bg-[#f7f8fa] px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="兴趣俱乐部" en="Play Together" />
        <RevealOnScroll>
          <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <article
              v-for="club in clubs"
              :key="club.name"
              class="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1"
            >
              <div class="text-3xl">{{ club.emoji }}</div>
              <p class="mt-3 text-sm text-ink">{{ club.name }}</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="办公室与活动" en="Life at BeeFun" />
        <div class="grid gap-4 md:grid-cols-3">
          <img
            v-for="(photo, i) in workPhotos"
            :key="i"
            :src="photo.src"
            :alt="photo.alt"
            class="h-52 w-full rounded-2xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  </div>
</template>
