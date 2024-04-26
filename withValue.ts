import setup from "./asynclocal";
import getValue from "./getValue";

async function initValue() {
  return getValue();
}

const store = setup(initValue);

export const injectValue = store.inject;
export const getInjectedValue = store.get;
