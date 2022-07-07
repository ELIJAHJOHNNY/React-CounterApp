import React, {useState} from 'react';

function Counter() {
  const [counter, setCounter]= useState(0);

  const countClick = (i) =>{
    const id = i.target.id
    if (id === 'increase-button') {
      setCounter((prev)=>
      prev + 1
      )
    }
    else if (id === 'decrease-button') {
      setCounter((prev)=>
      prev - 1
      )
    }
    else if (id === 'reset-button') {
      setCounter(0)
    }
  }

  return (
    <div className='container'>
      <p id='counter-value'>Count: {counter}</p>
      <button id='increase-button' onClick={countClick}>Increase</button>
      <button id='decrease-button' onClick={countClick}>Decrease</button> <br/>
      <button id='reset-button' onClick={countClick}>Reset</button>
    </div>
  );
}

export default Counter
