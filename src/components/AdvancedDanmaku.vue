<template>
  <div ref="container" class="danmaku-container">
    <div ref="dmContainer" class="danmaku-area">
      <div
        v-for="danmu in visibleDanmus"
        :key="danmu.id"
        :data-id="danmu.id"
        class="danmu"
        :style="danmu.style"
				@animationend="onDanmuAnimationEnd(danmu.id)"

      >
        <slot name="danmu" :danmu="danmu">
          {{ danmu.text }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch, PropType, computed, watchEffect } from 'vue';

interface Danmu {
  id: string;
  text: string;
  color?: string;
  fontSize?: number;
  channel?: number;
  startTime?: number;
  width?: number;
  style?: any;
  priority?: boolean; // Add this line
}

export default defineComponent({
  name: 'Danmuku',
  props: {
    danmus: {
      type: Array as PropType<Danmu[]>,
      required: true,
    },
    speed: {
      type: Number,
      default: 100,
    },
    channels: {
      type: Number,
      default: 0,
    },
    fontSize: {
      type: Number,
      default: 18,
    },
    maxDanmuku: {
      type: Number,
      default: 100,
    },
    minInterval: {
      type: Number,
      default: 500, // 最小发送间隔（毫秒）
    },
  },
  setup(props) {
    const container = ref<HTMLElement | null>(null);
    const dmContainer = ref<HTMLElement | null>(null);
    const visibleDanmus = ref<Danmu[]>([]);
    const channelHeights = ref<number[]>([]);
    const danmuQueue = ref<Danmu[]>([]);
        const priorityQueue = ref<Danmu[]>([]); // Add this line

    let containerWidth = ref(0);
    let lastSendTime = 0;
    let lastUpdateTime = 0;
    const updateInterval = 1000 / 30; // 60fps
    const lastProcessedIndex = ref(-1);



    const initChannels = () => {
      if (!container.value) return;
      const height = container.value.clientHeight;
      const channelCount = props.channels || Math.floor(height / (props.fontSize * 1.5));
      channelHeights.value = new Array(channelCount).fill(0);
    };

    const estimateDanmuWidth = computed(() => (text: string) => {
      return text?.length * props.fontSize * 0.6 + 20; // 20px as extra padding
    });

    const findAvailableChannel = () => {
      const now = performance.now();
      return channelHeights.value.findIndex(height => now > height);
    };

    const addDanmu = (danmu: Danmu) => {
      const channel = findAvailableChannel();
      if (channel === -1) return false;

      const width = estimateDanmuWidth.value(danmu.text);
			 // 添加额外的移动距离，比如容器宽度的 10%
			const extraDistance = containerWidth.value * 0.1;
			const totalDistance = containerWidth.value + width + extraDistance;
			const duration = totalDistance / props.speed;

      const newDanmu = Object.freeze({
        ...danmu,
        channel,
        startTime: performance.now(),
				endTime: performance.now() + duration * 1000,
        width,
        style: {
          '--top': `${channel * props.fontSize * 1.5}px`,
          '--color': danmu.color || '#ffffff',
          '--fontSize': `${danmu.fontSize || props.fontSize}px`,
          '--duration': `${duration}s`,
          '--transform': `translate3d(${containerWidth.value}px, 0, 0)`,
      '--end-transform': `translate3d(${-width - extraDistance}px, 0, 0)`,
        }
      });

      visibleDanmus.value.push(newDanmu);
      channelHeights.value[channel] = performance.now() + duration * 1000 * 0.5; // Allow 20% overlap

      // setTimeout(() => {
      //   visibleDanmus.value = visibleDanmus.value.filter(d => d.id !== newDanmu.id);
      // }, duration * 1000);

      return true;
    };
		function onDanmuAnimationEnd (id: string) {
      visibleDanmus.value = visibleDanmus.value.filter(danmu => danmu.id !== id);
    }

      const updateDanmus = () => {
    const now = performance.now();

    if (now - lastUpdateTime >= updateInterval) {
      const maxNewDanmus = props.maxDanmuku - visibleDanmus.value.length;
      let addedCount = 0;


      while ((priorityQueue.value.length > 0 || danmuQueue.value.length > 0) && addedCount < maxNewDanmus) {
        if (now - lastSendTime >= props.minInterval) {
          let danmuToAdd: Danmu | undefined;

          if (priorityQueue.value.length > 0) {
            danmuToAdd = priorityQueue.value.shift();
          } else {
            danmuToAdd = danmuQueue.value.shift();
          }

          if (danmuToAdd) {
            const success = addDanmu(danmuToAdd);
            if (success) {
              lastSendTime = now;
              addedCount++;
            } else {
              // If failed to add, put it back at the front of its respective queue
              if (danmuToAdd.priority) {
                priorityQueue.value.unshift(danmuToAdd);
              } else {
                danmuQueue.value.unshift(danmuToAdd);
              }
              break;
            }
          }
        } else {
          break;
        }
      }
      lastUpdateTime = now;
    }
    requestAnimationFrame(updateDanmus);
    };

    const resizeHandler = () => {
      if (container.value) {
        containerWidth.value = container.value.clientWidth;
        initChannels();
      }
    };

    onMounted(() => {
      resizeHandler();
      window.addEventListener('resize', resizeHandler);
      requestAnimationFrame(updateDanmus);
    });

    onUnmounted(() => {
      window.removeEventListener('resize', resizeHandler);
    });

  watchEffect(() => {
    const newDanmus = props.danmus.slice(lastProcessedIndex.value + 1);
    
    for (let i = 0; i < newDanmus.length; i++) {
      const danmu = newDanmus[i];
      if (danmu.priority) {
        priorityQueue.value.push(danmu);
      } else {
        danmuQueue.value.push(danmu);
      }
    }

    lastProcessedIndex.value = props.danmus.length - 1;
  })


    return { container, dmContainer, visibleDanmus, onDanmuAnimationEnd };
  }
});
</script>

<style scoped>
.danmaku-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  contain: layout;
}

.danmaku-area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.danmu {
  position: absolute;
  white-space: nowrap;
  top: var(--top);
  color: var(--color);
  font-size: var(--fontSize);
  will-change: transform;
  transform: var(--transform);
  animation: danmu-move var(--duration) linear;
}

@keyframes danmu-move {
  from { transform: var(--transform); }
  to { transform: var(--end-transform); }
}
</style>
