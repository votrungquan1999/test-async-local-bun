import { test, expect } from "bun:test";
import { getHandler } from "../simple";

test("test", async () => {
  const handler = getHandler();

  const value = await handler();

  expect(value).toBe("abc");
});
