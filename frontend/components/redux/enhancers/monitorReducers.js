const round = (number) => Math.round(number * 100) / 100;

let monitorReducerEnhancer;

if (!process.browser) {
  const { performance } = require("perf_hooks");
  monitorReducerEnhancer = (createStore) => (
    reducer,
    initialState,
    enhancer
  ) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = round(end - start);

      console.log("reducer process time:", diff);

      return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
  };
} else {
  monitorReducerEnhancer = (createStore) => (
    reducer,
    initialState,
    enhancer
  ) => {
    const monitoredReducer = (state, action) => {
      const start = performance.now();
      const newState = reducer(state, action);
      const end = performance.now();
      const diff = round(end - start);

      console.log("reducer process time:", diff);

      return newState;
    };

    return createStore(monitoredReducer, initialState, enhancer);
  };
}

export default monitorReducerEnhancer;
