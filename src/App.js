import React from "react";
import { fetchUsers } from "./store/userReducer";
import {
  incrimentCreater,
  decrimentCreater,
  asyncincrimentCreater,
  asyncdecrimentCreater,
} from "./store/countReducer";
import { useDispatch, useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counts.count);
  const user = useSelector((state) => state.user.users);
  return (
    <div className="App">
      <div>{count}</div>
      <button
        onClick={() => {
          dispatch(asyncincrimentCreater());
        }}
      >
        INCRIMENT
      </button>
      <button
        onClick={() => {
          dispatch(asyncdecrimentCreater());
        }}
      >
        DECRIMENT
      </button>
      <button onClick={() => dispatch(fetchUsers())}>FETCH</button>
      {user.map((users) => (
        <li key={users.id}>{users.name}</li>
      ))}
      <div>SomeNewDataHere</div>
      <div>SomeNewDataHere</div>
    </div>
  );
}

export default App;
