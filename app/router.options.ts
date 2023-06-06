import type { RouterConfig } from "@nuxt/schema";

export default <RouterConfig> {
    scrollBehavior(to, from, savedPosition) {
        return { top: window.scrollY, left: 0 };
    },
};
