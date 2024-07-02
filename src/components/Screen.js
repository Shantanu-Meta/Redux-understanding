import React from 'react'
import {  useSelector } from 'react-redux';

const Screen = () => {
  const {value} = useSelector(store=> store.counter2) // As we have 2 reducers counter & counter2 in store but we r using counter2 reducer from the store which helps to manipulate the [counter2] state, so it will always fetch the value of [counter2] (* check-> line 3 Counter object in Store.js )
  return (
    <div className='w-full rounded-md bg-violet-400 border-2 p-5 my-8'>
      {value}
    </div>
  )
}

export default Screen;
