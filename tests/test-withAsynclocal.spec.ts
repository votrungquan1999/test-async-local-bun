import { test, expect, describe, mock } from "bun:test";
import { withAsyncLocalEventHandler } from "../withAsynclocal";
import { injectValue } from "../withValue";

import "src/__mocks__/getValue";

describe("test with async local", () => {
  test("test do not inject in test scope", async () => {
    const handler = withAsyncLocalEventHandler();

    const value = await handler();

    // "def" is mock value
    expect(value).toBe("def");
  });

  test(
    "test inject in test scope",
    injectValue("ghi", async () => {
      const handler = withAsyncLocalEventHandler();

      const value = await handler();

      expect(value).toBe("ghi");
    }),
  );
});
