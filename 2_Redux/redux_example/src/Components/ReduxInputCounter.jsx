import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CounterInputSlice from "../redux/slice/CounterInputSlice";
const actions=CounterInputSlice.actions;


function ReduxInputCounter() {

    // statemanagement ->(slice)
  // const [count, setCount] = useState(0);
  // const [delta ,setDelta] = useState(1);
  const [value , setValue] = useState("");
  const dispatch = useDispatch();

  
const { count } = useSelector(
   (store) => store.CounterInputSlice
);


  const increament = () => {
   dispatch(actions.increment())
  };

  const decrement = () => {
   dispatch(actions.decrement());
  }

  const updateDeltaHandler =() =>{
     dispatch(actions.updateDelta(Number(value)));
    //  dispatch(actions.updateDelta({"Name":"Rabada"}));

  }



  return (<>  
<div>
    <input type="number" value={value} onChange={(e)=> setValue(e.target.value)} />
   <button onClick={updateDeltaHandler}>UpdateDelta</button>

</div>


   <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <button onClick={increament}>+</button>

      <p> Count : {count}</p>

      <button onClick={decrement}>-</button>
    </div>
  </>
  )
 
}

export default  ReduxInputCounter;