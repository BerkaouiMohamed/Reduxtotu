import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Deposit, Withdraw } from './redux/Actions'

function Afiichage() {
    const [state,setState] = useState(0)
    const dispatch = useDispatch()
    const balance = useSelector(state=>state.balance)
    console.log("🚀 ~ Afiichage ~ state:", balance)

    const handleClick = () =>{
        dispatch(Withdraw(state))
    }

  const handleClick2 = () =>{
        dispatch(Deposit(state))
    }

  return (
    <div>
        <button onClick={handleClick}>Withdraw</button>
        <input type="number" name="" id="" onChange={e=>setState(e.target.value)} />
        <h1>{balance}</h1>
        <button onClick={handleClick2}>Deposit</button>

      
    </div>
  )
}

export default Afiichage
