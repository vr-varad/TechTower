import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../redux/features/counterSlice";


const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    const inc = () => {
        dispatch(increment());
    }
    const dec = () => {
        dispatch(decrement());
    }
  return (
    <div className='font-mono flex flex-col justify-center items-center'>
        <h1 className="text-2xl">{count}</h1>
        <button className="bg-red-600 text-white p-1 rounded-lg m-2" onClick={inc}>Increase</button>
        <button className="bg-red-600 text-white p-1 rounded-lg" onClick={dec}>Decrease</button>
    </div>
  )
}

export default Counter