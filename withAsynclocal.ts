import { getInjectedValue, injectValue } from "./withValue";

async function main() {
  const handler = withAsyncLocalEventHandler();

  const value = await handler();

  console.log("injected value: ", value); // "abc"
}

export function withAsyncLocalEventHandler() {
  return injectValue(async () => {
    const value = getInjectedValue();

    return value;
  });
}

main();
