import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount]=useState(0);
  //0번째 index count, 1번째 index를 setcount라는 상수로 받아옴
  //usestate(0)은 count상태의 초깃값(0)을 설정

  const OnIncrease = () => {
    setCount(count + 1);
    console.log("increase가 클릭됨");
  }

  const OnDecrease = () => {
    setCount(count-1);
    console.log("decrease가 클릭됨");

  }
  
  

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={OnIncrease}>+</button>
      <button onClick={OnDecrease}>-</button>
    </div>
  )
};
export default Counter;