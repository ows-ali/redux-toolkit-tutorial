import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 10,
//   todos: [],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incCounter: (state, action) => {
        state.counter+=1
    },
    decCounter: (state, action) => {
        state.counter-=1
    }
    // addTodo: (state, action) => {
    //   const todo = {
    //     id: Math.random() * 100,
    //     text: action.payload,
    //   };
    //   state.todos.push(todo);
    //   state.count += 1;
    // },
    // removeTodo: (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    //   state.count -= 1;
    // },
  },
});

export const { incCounter, decCounter } = counterSlice.actions;

export default counterSlice.reducer;