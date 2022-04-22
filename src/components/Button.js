import { useEffect, useState } from "react";
export default function Button(props) {
  const [count, setCount] = useState(42);
  return (
    <>
      <button data-task="minus" onClick={() => setCount((old) => old - 1)}>
        -
      </button>
      <span>{count}</span>
      <button
        data-task="plus"
        className="animated"
        onClick={() => setCount((old) => old + 1)}
      >
        +
      </button>
    </>
  );
}
/* <button className="animated" onClick={c}>
        {props.children} {props.text} {count}
        {count > 50 ? <h2>Hell yeah</h2> : null}
      </button> */
