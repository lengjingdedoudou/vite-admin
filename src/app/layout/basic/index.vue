<template>
  <div class="default__basic-layout">
    <div class="default__basic-layout-content">
      <BasicHeader />
      <BasicSide />
      <BasicContent />
    </div>

    <BasicBackground />
  </div>
</template>

<script lang="ts">
  export default {
    name: 'BasicLayout',
  };
</script>
<script setup lang="ts">
  import BasicContent from './components/Content/index.vue';
  import BasicHeader from './components/Header/index.vue';
  import BasicSide from './components/Side/index.vue';
  import BasicBackground from './components/Background/index.vue';
</script>
