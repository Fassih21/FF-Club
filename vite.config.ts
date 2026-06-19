import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",

      // ✅ Accept ANY tunnel / external host
      allowedHosts: true,

      // ensures external access works
      host: true,
    },
  },
});