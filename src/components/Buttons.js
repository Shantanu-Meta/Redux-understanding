import React from 'react'
import { useDispatch } from 'react-redux'

const Buttons = ({msg}) => {
  const dispatch = useDispatch(); // dispathc always dispatch an action to redux now on the based on action matching redux choice the reducers and update states.
  return (
    <div className='w-[5rem] bg-red-500 rounded-md flex justify-center'>
      <button className='w-full text-xl' onClick={()=>{msg=="+" ? dispatch({type:"INCREMENT"}) : dispatch({type:"DECREMENT"})}}>{msg}</button>
    </div>
  )
}

export default Buttons
