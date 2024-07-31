import { useState, useEffect } from "react";
import { increment, decrement, incrementByAmount } from "../../store/slices/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/Loading";

const Example = () => {
  const count = useSelector(state => state.counter.value);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [gap, setGap] = useState(0);

  // useEffect(() => {
  //   fetch("http://localhost:3001/set-cookie", {
  //     credentials: 'include'
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // })
  const handleClick = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(0);
      }, 2000)
    })
  }

  return (
    <Loading isLoading={isLoading}>
      <div className="flex gap-x-4">
        <p>{count}</p>
        <button
          className="p-4 bg-blue-300 rounded-md"
          onClick={async () => {
            setIsLoading(true);
            await handleClick();
            dispatch(increment())
            setIsLoading(false);
          }}
        >
          +
        </button>
        <button
          className="p-4 bg-blue-300 rounded-md"
          onClick={() => {
            dispatch(decrement())
          }}
        >
          -
        </button>
        <input type="number"
          className="border-blue-600 border-2"
          value={gap}
          onChange={(e) => {
            setGap(Number(e.target.value))
          }}
        />
        <button
          className="p-4 bg-blue-300 rounded-md"
          onClick={() => {
            dispatch(incrementByAmount(gap))
          }}
        >
          gap
        </button>
      </div>
    </Loading>
  )
}

export default Example;