import { createSlice } from "@reduxjs/toolkit";
const intitialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: intitialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCouter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
export const counterActions = counterSlice.actions; // to call the functions in the corresponding components
export default counterSlice; // to build the redux store
// counterSlice.actions.toggleCouter(); --> returns object: {type: some_id, payload: ...}
