import { defineConfig } from 'vite';

export default defineConfig({
  test: {
    include: ['tests/**/*-test.ts'],
    deps: {
      inline: ['graceful-fs'],
    },
  },
});
