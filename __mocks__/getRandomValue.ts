import { mock } from "bun:test";

export default function getRandomValue() {
  return Math.random().toString(32).slice(2);
}

mock.module("src/getValue", () => {
  return {
    default: getRandomValue,
  };
});
