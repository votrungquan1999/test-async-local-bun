import { getInjectedStore, injectStore } from "./withStore";

export default function createJourney() {
  const handleEvents = getEventsHandler();

  // simulate that event is coming
  setTimeout(() => {
    handleEvents();
  }, 1000);

  return {};
}
const getEventsHandler = function getEventsHandler() {
  return injectStore(async function handleEvents() {
    const injectedStore = getInjectedStore();

    injectedStore["abc"] = "def";
  });
};
