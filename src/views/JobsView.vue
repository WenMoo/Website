<script setup lang="ts">
import { computed, ref } from 'vue'
import { brand, bossJobsUrl, jobs, jobsPage } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'

const activeFilter = ref<(typeof jobsPage.filters)[number]>('全部')

const filteredJobs = computed(() => {
  if (activeFilter.value === '全部') return jobs
  if (activeFilter.value === '社会招聘') return jobs.filter((job) => job.track === 'social')
  if (activeFilter.value === '校园招聘') return jobs.filter((job) => job.track === 'campus')
  return jobs.filter((job) => job.category === activeFilter.value)
})
</script>

<template>
  <div class="pt-16">
    <section
      class="relative flex min-h-[420px] items-end bg-cover bg-center"
      :style="{ backgroundImage: `url(${jobsPage.heroImage})` }"
    >
      <div class="absolute inset-0 bg-black/45" />
      <div class="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 text-white lg:px-6">
        <p class="text-sm tracking-[0.28em] text-white/70">CAREERS</p>
        <h1 class="mt-3 text-4xl font-medium md:text-5xl">人才招聘</h1>
        <p class="mt-4 max-w-2xl text-base leading-7 text-white/80">{{ jobsPage.intro }}</p>
        <a
          :href="bossJobsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm text-ink transition hover:bg-brand-dark"
        >
          去 BOSS 直聘投递
          <span>→</span>
        </a>
      </div>
    </section>

    <section class="bg-[#f7f8fa] px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="在招职位" en="Open Roles" />

        <div class="mb-10 flex flex-wrap justify-center gap-3">
          <button
            v-for="filter in jobsPage.filters"
            :key="filter"
            type="button"
            class="rounded-full px-5 py-2 text-sm transition"
            :class="
              activeFilter === filter ? 'bg-ink text-white' : 'bg-white text-slate-500 hover:text-ink'
            "
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="space-y-4">
          <RevealOnScroll v-for="job in filteredJobs" :key="job.id">
            <article
              class="flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)] md:flex-row md:items-center md:justify-between md:px-8 md:py-7"
            >
              <div class="min-w-0">
                <div class="flex flex-wrap gap-2">
                  <span class="rounded-full bg-brand/20 px-3 py-1 text-xs text-brand-dark">
                    {{ job.track === 'social' ? '社会招聘' : '校园招聘' }}
                  </span>
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">{{ job.category }}</span>
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">{{ job.type }}</span>
                </div>
                <h3 class="mt-3 text-xl text-ink">{{ job.title }}</h3>
                <p class="mt-2 text-sm text-slate-500">
                  {{ job.city }} · {{ job.exp }} · {{ job.edu }}
                </p>
                <p class="mt-2 text-sm font-medium text-brand-dark">{{ job.salary }}</p>
              </div>
              <a
                :href="bossJobsUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex shrink-0 items-center justify-center rounded-full bg-ink px-6 py-3 text-sm text-white transition hover:bg-black"
              >
                立即投递
              </a>
            </article>
          </RevealOnScroll>
        </div>

        <p v-if="!filteredJobs.length" class="py-16 text-center text-sm text-slate-400">暂无该分类职位</p>
        <p class="mt-10 text-center text-sm text-slate-400">
          职位以
          <a :href="bossJobsUrl" target="_blank" rel="noopener noreferrer" class="underline underline-offset-2">
            BOSS 直聘 · 必凡娱乐
          </a>
          实时更新为准
        </p>
      </div>
    </section>

    <section class="px-4 py-20">
      <div class="mx-auto max-w-6xl">
        <SectionTitle title="办公地点" en="Locations" />
        <RevealOnScroll>
          <div class="grid gap-6 md:grid-cols-2">
            <article class="rounded-2xl border border-slate-100 bg-slate-50 px-8 py-10">
              <p class="text-xs tracking-[0.16em] text-slate-400">总部 · 研发</p>
              <h3 class="mt-2 text-2xl text-ink">深圳</h3>
              <p class="mt-4 text-sm leading-7 text-slate-500">{{ brand.address }}</p>
            </article>
            <article class="rounded-2xl border border-slate-100 bg-slate-50 px-8 py-10">
              <p class="text-xs tracking-[0.16em] text-slate-400">研发 · 职能</p>
              <h3 class="mt-2 text-2xl text-ink">北京</h3>
              <p class="mt-4 text-sm leading-7 text-slate-500">与深圳总部协同的研发与职能团队</p>
            </article>
          </div>
        </RevealOnScroll>
      </div>
    </section>

    <section class="bg-ink px-4 py-20 text-center text-white">
      <RevealOnScroll>
        <p class="text-sm tracking-[0.24em] text-white/50">JOIN BEEFUN</p>
        <h2 class="mt-3 text-3xl font-medium">在 BOSS 直聘投递简历</h2>
        <p class="mx-auto mt-4 max-w-xl text-sm leading-7 text-white/65">
          搜索「必凡娱乐」，选择意向岗位投递。美术岗请附作品集，也可发到招聘邮箱。
        </p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            :href="bossJobsUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="rounded-full bg-brand px-7 py-3 text-sm text-ink transition hover:bg-brand-dark"
          >
            打开 BOSS 直聘
          </a>
          <a
            :href="`mailto:${brand.email}`"
            class="rounded-full border border-white/25 px-7 py-3 text-sm text-white transition hover:border-white/60"
          >
            {{ brand.email }}
          </a>
        </div>
      </RevealOnScroll>
    </section>
  </div>
</template>
