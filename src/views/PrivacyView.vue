<script setup lang="ts">
import { brand } from '@/data/site'
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 pb-24 pt-28 text-sm leading-8 text-slate-600">
    <h1 class="text-3xl text-ink">隐私政策</h1>
    <p class="mt-6">
      {{ brand.name }}（以下称「我们」）重视候选人与访客的个人信息保护。本页面用于说明本招聘品牌站在第一期收集与使用信息的方式。
    </p>
    <h2 class="mt-10 text-lg text-ink">我们收集什么</h2>
    <p>
      第一期站点仅提供公司介绍、产品与文化内容，不提供账号注册、简历上传或在线投递。因此除服务器访问日志中可能包含的 IP、浏览器类型、访问时间外，我们不会主动收集可识别个人身份的求职材料。
    </p>
    <h2 class="mt-10 text-lg text-ink">Cookie 与统计</h2>
    <p>
      站点可能使用必要的本地存储以记住界面状态。若后续接入第三方统计或招聘系统，我们将在启用前更新本政策并提供选择退出方式。
    </p>
    <h2 class="mt-10 text-lg text-ink">联系我们</h2>
    <p>如对本政策有疑问，请发送邮件至 {{ brand.email }}。</p>
  </div>
</template>
