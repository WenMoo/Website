<script setup lang="ts">
import { computed } from 'vue'
import { channels, type ChannelKey } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'

const props = defineProps<{
  channelKey: ChannelKey
}>()

const channel = computed(() => channels[props.channelKey])
</script>

<template>
  <div>
    <section
      data-nav-hero
      class="relative flex min-h-[100svh] items-center justify-center bg-cover bg-center"
      :style="{ backgroundImage: `url(${channel.hero})` }"
    >
      <div class="absolute inset-0 bg-black/35" />
      <div class="relative z-10 px-4 text-center text-white">
        <h1 class="text-4xl font-semibold tracking-widest md:text-6xl">{{ channel.slogan }}</h1>
        <p class="mt-5 font-[cursive] text-2xl text-sky-100 md:text-3xl">{{ channel.sloganEn }}</p>
        <div class="mx-auto mt-10 flex max-w-xl items-center overflow-hidden rounded-full bg-white/90 shadow-lg">
          <input
            class="h-12 flex-1 bg-transparent px-5 text-sm text-ink outline-none"
            disabled
            placeholder="职位投递即将开放"
          />
          <span class="m-1 rounded-full bg-brand px-5 py-2 text-sm text-white">即将开放</span>
        </div>
      </div>
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/80">⌄</div>
    </section>

    <section class="bg-white px-4 py-20">
      <div class="mx-auto max-w-5xl">
        <SectionTitle title="招聘城市" en="Locations" />
        <RevealOnScroll>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="city in channel.cities"
              :key="city.name"
              class="rounded-2xl border border-slate-100 bg-slate-50 px-6 py-8 text-center"
            >
              <p class="text-lg text-ink">{{ city.name }}</p>
              <p class="mt-2 text-sm text-slate-500">{{ city.hint }}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="bg-[#f7f8fa] px-4 py-20">
      <div class="mx-auto max-w-3xl">
        <SectionTitle :title="channel.title" :en="channel.en" />
        <RevealOnScroll>
          <div class="space-y-5 text-center text-[15px] leading-8 text-slate-600">
            <p v-for="(p, i) in channel.intro" :key="i">{{ p }}</p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  </div>
</template>
