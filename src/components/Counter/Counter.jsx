import { useSelector, useDispatch } from "react-redux";
import "./index.css";

const Counter = () => {
  const store = useSelector((state) => state);
  const { count, user } = store;
  const dispatch = useDispatch();
  return (
    <div className="Counter">
      <h1>L'utente {user.userNameDefault} </h1>
      <h2>ha {count.value} voglia di vivere 🤗</h2>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default Counter;
