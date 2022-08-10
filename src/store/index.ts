import { createStore } from "vuex";

interface Personality {
  "n/s": number[];
  "t/f": number[];
  "p/j": number[];
  "e/i": number[];
}
export default createStore({
  state: {
    personality: {
      "n/s": [0, 0, 0, 0],
      "t/f": [0, 0, 0, 0],
      "p/j": [0, 0, 0, 0],
      "e/i": [0, 0, 0, 0],
    } as Personality,
    missing_pers_type_steps: [] as (keyof Personality)[],
    pers_type: {
      "n/s": "",
      "t/f": "",
      "p/j": "",
      "e/i": "",
    },
  },

  mutations: {
    changePersonality(context, { key, index, value }) {
      context.personality[key as keyof Personality][index] = value;
    },
    changePersType(context, { key, value }) {
      context.pers_type[key as keyof Personality] = value;
    },
  },
  actions: {
    getTypeOfPersonality(context) {
      context.state.missing_pers_type_steps = [];
      const pers_type = context.state.pers_type;

      Object.entries(context.state.personality).forEach(([key, value]) => {
        const [left, right] = key.split("/");

        const sum = value.reduce((a: number, b: number) => {
          return a + b;
        });

        if (sum) {
          if (sum > 0) {
            pers_type[key as keyof Personality] = right;
          } else if (sum < 0) {
            pers_type[key as keyof Personality] = left;
          }
        } else
          context.state.missing_pers_type_steps.push(key as keyof Personality);
      });

      return pers_type;
    },
  },
  modules: {},
});
