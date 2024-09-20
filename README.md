# Danmuku Component

## Overview

Danmuku is a Vue 3 component that implements a customizable danmaku (bullet screen) system. It allows for efficient rendering of scrolling comments across a video or any other content.

## Features

- Smooth scrolling animation for danmaku messages
- Customizable speed, font size, and number of channels
- Support for priority messages
- Efficient rendering with animation frame updates
- Responsive design that adapts to container size
- Customizable danmaku appearance through slots

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| danmus | Array | Required | Array of danmaku objects |
| speed | Number | 100 | Scrolling speed of danmaku |
| channels | Number | 0 | Number of channels (0 for auto) |
| fontSize | Number | 18 | Font size of danmaku text |
| maxDanmuku | Number | 100 | Maximum number of visible danmaku |
| minInterval | Number | 500 | Minimum interval between danmaku (ms) |

## Usage
```vue
<template>
    <Danmuku
    :danmus="danmuList"
    :speed="90"
    :channels="3"
    :fontSize="16"
    >
        <template #danmu="{ danmu }">
            <div class="custom-danmu" :style="{ color: danmu.color }">
                <img class="avatar" :src="danmu.avatar" />
                <span class="danmu-text">{{ danmu.text }}</span>
                <span class="danmu-id">#{{ danmu.id }}</span>
            </div>
        </template>
    </Danmuku>
</template>
<script>
import Danmuku from './components/AdvancedDanmaku.vue';
export default {
components: { Danmuku },
// ... rest of your component logic
}
</script>
```
## Customization

You can customize the appearance of each danmaku by using the `#danmu` slot. The slot provides a `danmu` object with all the properties of the current danmaku message.

## Performance

The component uses `requestAnimationFrame` for smooth animations and efficient updates. It also implements a channel system to prevent overlapping messages.

## License

[MIT License](LICENSE)
