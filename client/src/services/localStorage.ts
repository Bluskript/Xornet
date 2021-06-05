import { useLocalStorage } from "@vueuse/core";

export const token = useLocalStorage<string | null>("token", null);
export const username = useLocalStorage<string | null>("username", null);
export const thinButtons = useLocalStorage("thinButtons", false);
