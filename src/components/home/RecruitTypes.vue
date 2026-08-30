<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { recruitTypes } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'

const icons: Record<string, string> = {
  briefcase:
    'M4 7h16v12H4z M8 7V5h8v2',
  spark:
    'M12 3l1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5z',
  book: 'M5 4h11a3 3 0 013 3v13H8a3 3 0 00-3 3V4z',
  cap: 'M3 10l9-5 9 5-9 5-9-5zm3 3.5V16c2 1.5 4 2.2 6 2.2s4-.7 6-2.2v-2.5',
}
</script>

<template>
  <section id="recruit" class="relative overflow-hidden bg-[#f7f8fa] px-4 py-20">
    <div class="pointer-events-none absolute -left-16 top-10 h-56 w-56 rounded-full bg-brand/20 blur-2xl" />
    <div class="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-sky-200/40 blur-2xl" />

    <div class="relative mx-auto max-w-5xl">
      <SectionTitle title="招聘类型" en="Recruitment Type" />
      <RevealOnScroll>
        <div class="grid gap-6 sm:grid-cols-2">
          <RouterLink
            v-for="item in recruitTypes"
            :key="item.key"
            :to="item.to"
            class="group rounded-2xl bg-white p-8 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
          >
            <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-500 group-hover:bg-brand/15 group-hover:text-brand-dark">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" :d="icons[item.icon]" />
              </svg>
            </div>
            <h3 class="text-xl text-ink">{{ item.title }}</h3>
            <p class="mt-1 text-xs uppercase tracking-wider text-slate-400">{{ item.en }}</p>
            <p class="mt-4 text-sm leading-6 text-slate-500">{{ item.desc }}</p>
          </RouterLink>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>
