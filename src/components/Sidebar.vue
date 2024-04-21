<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost text-xl" href="/">MSA-CAMP</a>

      <RouterLink class="btn text-xl" :to="{ path: '/menu01' }"
        >Menu 1</RouterLink
      >
      <RouterLink class="btn text-xl" :to="{ path: '/menu02' }"
        >Menu 2</RouterLink
      >
      <RouterLink class="btn text-xl" :to="{ path: '/menu03' }"
        >Menu 3</RouterLink
      >
    </div>
  </div>
</template>
