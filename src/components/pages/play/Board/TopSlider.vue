<script setup lang="ts">
import { socket } from "@src/socket";
import { State } from "@src/types";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore<State>();

const topSlider = computed(() => store.state.gameData.topSlider);
const sideSlider = computed(() => store.state.gameData.sideSlider);

// 탑 슬라이더가 움직이면
const inputTopSlider = (e: Event) => {
  const { playerList, whoseTurn } = store.state.gameData;

  if (playerList[whoseTurn].socketID !== socket.id) return; // 내 차례가 아니면 무시

  const topSliderProgress = (e.target as HTMLInputElement).value;
  store.state.gameData.topSlider.progress = Number(topSliderProgress);

  // 바뀐 위치 알리고
  socket.emit("updateSlider", {
    sliderPosition: "TOP",
    progress: topSliderProgress,
  });

  // 사이드 슬라이더 제자리로 옮기기
  sideSlider.value.progress = sideSlider.value.prevProgress;
};
</script>

<template>
  <div class="slider">
    <div
      class="thumb preview"
      :style="{
        '--prev-progress': `${topSlider.prevProgress / 16 / 2}rem`,
      }"
    />
    <div
      class="thumb"
      :style="{
        '--progress': `${topSlider.progress / 16 / 2}rem`,
      }"
    />
    <input
      :value="topSlider.progress"
      @input="inputTopSlider"
      class="slider-input"
      type="range"
      min="0"
      max="648"
      step="1"
    />
  </div>
</template>

<style scoped>
.slider {
  position: relative;
  height: 0.5rem;
  margin: 0 1rem;
  box-shadow: inset 0 -0.03125rem 0.15625rem 0.0625rem rgba(77, 71, 71, 0.5);
  align-self: center;
}

.thumb {
  position: absolute;
  top: -0.25rem;
  left: calc(var(--progress));

  width: 1.5rem;
  height: 2.25rem;

  background-color: black;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 50% 100%, 0 33%);
}

.thumb.preview {
  background-color: lightgray;
  left: calc(var(--prev-progress));
}

.slider-input {
  appearance: none;
  width: 100%;
  height: 1rem;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
}

.slider-input::-webkit-slider-runnable-track {
  margin-top: 2.5rem;
  cursor: pointer;
}

.slider-input::-webkit-slider-thumb {
  appearance: none;
  width: 3rem;
  height: 4.5rem;
}
</style>
