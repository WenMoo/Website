<script setup lang="ts">
import { hero } from '@/data/site'
</script>


<template>
  <!-- 尺寸对齐柠檬微趣：全宽、高度 46vw，视频按宽度铺满后垂直居中裁切 -->
  <section
    data-nav-hero
    class="relative z-0 h-[46vw] min-h-[200px] overflow-hidden bg-black"
  >
    <video
      class="absolute left-0 top-1/2 w-full -translate-y-1/2"
      autoplay
      muted
      loop
      playsinline
      preload="auto"
      :poster="hero.poster"
    >
      <source :src="hero.video" type="video/mp4" />
    </video>

    <div class="absolute left-1/2 top-1/2 z-10 w-[40vw] min-w-[220px] -translate-x-1/2 -translate-y-1/2 text-center">
      <p class="text-[clamp(0.95rem,2.4vw,2.75rem)] font-semibold leading-snug tracking-[0.06em] text-white drop-shadow-md">
        {{ hero.slogan }}
      </p>
    </div>
  </section>
</template>
