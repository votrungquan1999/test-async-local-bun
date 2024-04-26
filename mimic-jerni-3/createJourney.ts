import { getInjectedStore, injectStore } from "./withStore";

export default function createJourney() {
  const handleEvents = getEventsHandler();

  return {
    async *begin() {
      // simulate that event is coming
      setTimeout(async () => {
        await handleEvents();
      }, 1000);
    },
  };
}
const getEventsHandler = function getEventsHandler() {
  return injectStore(async function handleEvents() {
    const injectedStore = getInjectedStore();

    injectedStore["abc"] = "def";
  });
};
