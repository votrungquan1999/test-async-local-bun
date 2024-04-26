import setup from "src/asynclocal";
import getStore from "./getStore";

async function initValue() {
  return getStore();
}

const store = setup<Record<string, string>>(initValue);

export const injectStore = store.inject;
export const getInjectedStore = store.get;
