import "windi.css";
import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { routes } from "./router";

export const createApp = ViteSSG(
  App,
  {
    routes: routes,
  },
  (ctx) => {
    Object.values(import.meta.globEager("./modules/*.ts")).map((i) => i.install?.(ctx));
  }
);
