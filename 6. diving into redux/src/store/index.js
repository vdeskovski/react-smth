import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth";
import counterSlice from "./counter";

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;

// const counterReducer = (state = intitialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   return state;
// };

// const initialCounterState = { counter: 0 };
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: initialCounterState,
//   reducers: {
//     increment(state) {
//       state.counter++;
//     },
//     increase(state, action) {
//       console.log(action);
//       state.counter += action.payload;
//     },
//     decrement(state) {
//       state.counter--;
//     },
//   },
// });
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// export const counterActions = counterSlice.actions;
// export default store;
