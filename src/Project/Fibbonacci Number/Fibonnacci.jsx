import { useState } from "react";

export default function FibonnacciDisplayer() {
  const fib = [];
  let a = 0;
  let b = 1;
  const [number, setNumber] = useState(0)

  for (let i = 0; i < number; i++) {
    fib.push(a);
    [a, b] = [b, a + b];
  }

  console.log(fib);

  return (
    <div>
        <input type="text"
        value={number}
        onChange={function(event){
            setNumber(event.target.value)
        }}
        /> 
        <p>{fib.join(", ")}</p>
    </div>
  );
}
