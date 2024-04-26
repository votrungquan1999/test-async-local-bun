import { describe, expect, test } from "bun:test";
import initJourney from "src/mimic-jerni-3/initJourney";
import { setTimeout } from "timers/promises";
import { getInjectedStore, injectStore } from "src/mimic-jerni-3/withStore";

import "src/__mocks__/getStore";

describe("mimic jerni", () => {
  test(
    "inject store in test scope and jerni should be able to access it",
    injectStore(async () => {
      const worker = await initJourney();

      // wait for the event simulation to finish, equals to jerni.waitFor(event)
      await setTimeout(1200);

      const injectedStore = getInjectedStore();

      expect(injectedStore).toEqual({ abc: "def" });
    }),
  );

  test(
    "inject different store between test scope and jerni call, should not affect each other",
    injectStore(async () => {
      const worker = await injectStore({}, initJourney)();

      // wait for the event simulation to finish, equals to jerni.waitFor(event)
      await setTimeout(1200);

      const injectedStore = getInjectedStore();

      expect(injectedStore).toEqual({});
    }),
  );
});
