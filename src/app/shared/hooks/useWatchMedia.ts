import { useWindowSize } from '@vueuse/core';
import { computed, watchEffect } from 'vue';

export function useWatchMedia() {
  const { width } = useWindowSize();
  const media = computed(() => {
    const s = 960;
    const m = 1200;
    if (width.value < s) {
      return 'small';
    } else if (width.value >= s && width.value < m) {
      return 'midium';
    } else {
      return 'large';
    }
  });

  watchEffect(() => {
    document.body.dataset.media = media.value;
  });
}
