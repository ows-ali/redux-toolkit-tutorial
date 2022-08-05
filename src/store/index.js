import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import todoReducer from "../features/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterSlice,
  },

});

export default store;