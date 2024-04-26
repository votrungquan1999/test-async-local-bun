import { AsyncLocalStorage } from "async_hooks";

const storage = new AsyncLocalStorage<string>();

async function main() {
  const handler = getHandler();

  const value = await handler();

  console.log("injected value: ", value); // "abc"
}

export function getHandler() {
  return () => {
    return storage.run("abc", async () => {
      const value = storage.getStore();

      return value;
    });
  };
}

main();
