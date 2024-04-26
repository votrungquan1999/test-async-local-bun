import { mock } from "bun:test";

export default function getValue() {
  return "def";
}

mock.module("src/getValue", () => {
  return {
    default: getValue,
  };
});
