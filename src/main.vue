<template>
  <div class="default__container">
    <router-view />
  </div>
</template>
<script setup lang="ts">
  import { useWatchMedia } from '@shared/hooks/useWatchMedia';
  useWatchMedia();
</script>
