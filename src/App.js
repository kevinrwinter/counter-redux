import { useDispatch, useSelector } from "react-redux";
// import { selectCount } from "./features/counter/counterSlice";
import { increment, incrementByAmount, decrement, decrementByAmount, reset } from "./features/counter/counterSlice";

import Button from "./components/Button";
import Circle from "./components/Circle";

import "./App.css";

function App() {
  // Read data from the state with useSelector
  const count = useSelector((state) => state.counter.value);
  // const count = useSelector(selectCount);

  // Find actions/ trigger action with useDispatch
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <Button onClick={() => dispatch(decrementByAmount(5))}>&minus;5</Button>
        <Button onClick={() => dispatch(decrement())}>&minus;1</Button>
        <Circle count={count} />
        <Button onClick={() => dispatch(increment())}>&#43;1</Button>
        <Button onClick={() => dispatch(incrementByAmount(5))}>&#43;5</Button>
      </div>
      <div className="reset">
        <Button onClick={() => dispatch(reset())}>0</Button>
      </div>
    </>
  );
}

export default App;
