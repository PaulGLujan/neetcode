// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true, // Enables using `describe`, `it`, etc., without importing
    },
});