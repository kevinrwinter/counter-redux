import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 314,
    // isLoading: true,
  },
  reducers: {
    increment: (state) => {
      // state.value += 1;
      state.value++;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      // state.value -= 1;
      state.value--;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// actions
export const { increment, incrementByAmount, decrement, decrementByAmount, reset } = counterSlice.actions;

// reading state
export const selectCount = (state) => state.counter.value;
// export const selectLoading = (state) => state.counter.isLoading;

// store
export default counterSlice.reducer;
