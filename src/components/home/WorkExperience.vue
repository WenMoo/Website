<script setup lang="ts">
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { workPhotos } from '@/data/site'
import SectionTitle from '@/components/common/SectionTitle.vue'
import RevealOnScroll from '@/components/common/RevealOnScroll.vue'
import 'swiper/css'
import 'swiper/css/navigation'

const modules = [Navigation]
</script>

<template>
  <section class="relative overflow-hidden bg-white px-4 py-20">
    <div
      class="pointer-events-none absolute inset-0 opacity-30"
      style="background-image: radial-gradient(#d4d4d8 1px, transparent 1px); background-size: 18px 18px"
    />
    <div class="relative mx-auto max-w-6xl">
      <SectionTitle title="工作体验" en="Work Experience" />
      <RevealOnScroll>
        <div class="relative px-8">
          <Swiper
            :modules="modules"
            :navigation="true"
            :space-between="20"
            :breakpoints="{ 0: { slidesPerView: 1.15 }, 768: { slidesPerView: 2.2 }, 1024: { slidesPerView: 3 } }"
          >
            <SwiperSlide v-for="(photo, i) in workPhotos" :key="i">
              <img
                :src="photo.src"
                :alt="photo.alt"
                class="h-64 w-full rounded-2xl object-cover shadow-md"
                loading="lazy"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </RevealOnScroll>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #64748b;
  width: 34px;
  height: 34px;
  background: white;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 14px;
  font-weight: 700;
}
</style>
