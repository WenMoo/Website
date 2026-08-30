<script setup lang="ts">
defineProps<{
  title: string
  en: string
  invert?: boolean
}>()
</script>

<template>
  <div class="mb-10 text-center">
    <h2 class="text-2xl font-medium tracking-wide md:text-3xl" :class="invert ? 'text-white' : 'text-ink'">
      {{ title }}
    </h2>
    <p class="mt-2 text-sm tracking-[0.2em]" :class="invert ? 'text-white/70' : 'text-slate-400'">
      {{ en }}
    </p>
    <div class="section-title-line mx-auto mt-3" />
  </div>
</template>
