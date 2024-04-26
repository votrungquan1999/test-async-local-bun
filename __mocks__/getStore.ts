import { mock } from "bun:test";

function getStore() {
  return {};
}

mock.module("src/mimic-jerni-3/getStore", () => {
  return {
    default: getStore,
  };
});
