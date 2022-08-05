import { useState } from "react";

import "./App.css";

import TodoItem from "./components/TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./features/todoSlice";

function App() {
   const [input, setInput] = useState("");

   const count = useSelector((state) => state.todo.count);
   const todos = useSelector((state) => state.todo.todos);
   const dispatch = useDispatch();

   const handleAddTodo = (e) => {
     e.preventDefault();
     dispatch(addTodo(input));
   };

   const handleTodoDone = (id) => {
     dispatch(removeTodo(id));
   };
   return (
     <div className="App">
      
      <h2>Redux Notes</h2>
      <p>Redux is used to lift the state up</p>
      <p>Redux is called single source of truth or state (aka global state) of the application</p>
      <p>We never mutate/update the state, we always return a new copy of the state. If we mutate then re-rendering will not trigger</p>
      <h3>Redux has following main core components: </h3>
        <ol>
          <li>Action(which informs what change we want in state). Actions have <i>type</i> and <i>payload</i></li>
          <li>Reducers (how will the state actually change based on action request). Reducers get an action object, it has switch case to check action type and update state using (but not necessarily) payload  </li>
          <li>Store (which basically connects our reducer (or multiple reducers) and holds whole <i>(gloabal) state</i> of the application</li>

      </ol>  
      <h3>How do we use redux on component level: </h3>
        <p>We have selector (to access store) and dispatch to dispatch an action which a reducer will handle and update store/state accordingly. </p>  
      <p>We use mapStateToProps and mapDispatchToProps if we are using class components</p>
      <p>We use useSelector() and useDispatch() hooks if we are using functional components</p>
      {/* </p> */}
      <h2>Redux Devtools</h2>
      <ul>

        <li>We can debug appliactions using redux devtools</li>
        <li>It helps us track if an action is triggered or not/state is updating or not</li>

        <li>We can time travel using redux dev tools</li>
        <li>Redux devtools should be enabled on development environment only</li>

      </ul>

      <h2>Redux toolkit project</h2>
      <i>Intro to redux is required before using redux toolkit</i>
      <p>We dont have to worry about returning a copy using ... operator or Object.assign() it automatically triggers state change, and we can use functions like .push()</p>

       <h1>TODO List</h1>
       <form className="App-form" onSubmit={handleAddTodo}>
         <input type="text" onInput={(e) => setInput(e.target.value)} />
         <button type="submit">+</button>
       </form>
       <div className="Todos">
         {count > 0 &&
           todos.map((todo) => (
             <TodoItem
               key={todo.id}
               text={todo.text}
               id={todo.id}
               onCheck={handleTodoDone}
             />
           ))}
         {count === 0 && <p>No todos</p>}
       </div>
     </div>
   );
 }

 export default App;