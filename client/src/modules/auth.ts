import { token } from "@/services/localStorage";
import { UserModule } from "@/types";
import { NavigationGuardWithThis } from "vue-router";

const authMiddleware: NavigationGuardWithThis<undefined> = function (to, from, next) {
  if (to.meta.title) document.title = `${to.meta.title}`;
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token.value == null) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guest)) {
    if (token.value == null) {
      next();
    } else {
      next({ name: "dashboard" });
    }
  } else {
    next();
  }
};

export const install: UserModule = async ({ router }) => {
  router.beforeEach(authMiddleware);
};
