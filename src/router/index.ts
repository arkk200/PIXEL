import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(""),
  routes: [
    { path: "/", name: "main", component: () => import("./main.vue") },
    { path: "/play", name: "play", component: () => import("./play.vue") },
    { path: "/room", name: "room", component: () => import("./room.vue") },
    {
      path: "/join/:roomId",
      name: "join",
      component: () => import("./join.vue"),
    },
  ],
});

export default router;
