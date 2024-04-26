import { test, expect, describe, mock } from "bun:test";
import { getInjectedValue, injectValue } from "src/withValue";
import { withAsyncLocalEventHandler } from "src/withAsynclocal";

import "src/__mocks__/getRandomValue";

describe("test with random injected value", () => {
  test(
    "inject random value in test scope",
    injectValue(async () => {
      const testScopeValue = getInjectedValue();

      const handler = withAsyncLocalEventHandler();

      const value = await handler();

      expect(value).toBe(testScopeValue);
    }),
  );
});
