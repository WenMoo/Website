<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BackToTop from '@/components/common/BackToTop.vue'
</script>

<template>
  <div class="min-h-screen">
    <AppHeader />
    <main>
      <RouterView />
    </main>
    <AppFooter />
    <BackToTop />
  </div>
</template>
