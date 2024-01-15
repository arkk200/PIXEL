import { INITIAL_SLIDER_PROGRESS } from "@src/constants";
import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      topSlider: {
        progress: INITIAL_SLIDER_PROGRESS,
        prevProgress: INITIAL_SLIDER_PROGRESS,
      },
      sideSlider: {
        progress: INITIAL_SLIDER_PROGRESS,
        prevProgress: INITIAL_SLIDER_PROGRESS,
      },
      board: [
        // 인덱스[][]
        [-2, -1, -1, -1, -1, -1, -1, -2],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, 0, 1, -1, -1, -1],
        [-1, -1, -1, 2, 3, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1, -1, -1, -1],
        [-2, -1, -1, -1, -1, -1, -1, -2],
      ],
      whoseTurn: 0, // 인덱스
      playerList: [
        { id: 1, name: "James" },
        { id: 2, name: "Jake" },
        { id: 3, name: "John" },
        { id: 4, name: "Jay" },
      ],
    };
  },
});
