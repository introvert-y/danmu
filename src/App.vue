<template>
  <div class="danmuku-wrapper">
    <Danmuku
      :danmus="danmuList"
      :speed="90"
      :channels="3"
      :fontSize="16"
    >
      <template #danmu="{ danmu }">
        <div class="custom-danmu" :style="{ color: danmu.color }">
					<!-- <div class="image_box" v-if="danmu.decorIcon">
					<ResizeImage
						class="icon"
						:src="danmu.decorIcon"
						:is-lazy-load="false"
					/>
				</div>
				<img
					:src="danmu.managerIcon"
					class="decor"
					alt="img"
					v-if="danmu.managerIcon"
				/> -->
				<img class="img" :src="danmu.avatar" />
          <span class="danmu-text">{{ danmu.text }}</span>
          <span class="danmu-id">#{{ danmu.id }}</span>
        </div>
      </template>
    </Danmuku>
    <button @click="addDanmu">发送弹幕</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Danmuku from './components/AdvancedDanmaku.vue';
import { getDanmuData } from './assets/danmu';

interface Danmu {
  id: string;
  text: string;
  color?: string;
  fontSize?: number;
}

export default defineComponent({
  name: 'DanmukuDemo',
  components: {
    Danmuku
  },
  setup() {
    const danmuList = ref<Danmu[]>(getDanmuData().map((item, index) => ({
      id: index.toString(),
      ...item,
    })));

    const addDanmu = () => {
      const newDanmu: Danmu = {
        id: Date.now().toString(),
        name: `我是自定义弹幕hhhhh ${Date.now()}`,
        text: `我是自定义弹幕hhhhh ${Date.now()}`,
        color: getRandomColor(),
        priority: true,
      };
      danmuList.value.push(newDanmu);
    };

    const getRandomColor = () => {
      return `#${Math.floor(Math.random()*16777215).toString(16)}`;
    };

    return {
      danmuList,
      addDanmu
    };
  }
});
</script>

<style scoped>
.danmuku-wrapper {
  width: 375px;
  height: 400px;
  background-color: #000;
  position: relative;
}

button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.custom-danmu {
  display: flex;
  align-items: center;
}

.danmu-text {
  margin-right: 5px;
}

.danmu-id {
  font-size: 0.8em;
  opacity: 0.7;
}
.img {
	width: 16px;
	height: 16px;
	border-radius: 50%;
}
</style>
