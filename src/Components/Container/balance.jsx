import React, {useContext} from 'react'
import { GlobalContext } from "../../contexts/GlobalState"


const Balance = () => {
  const {transections} = useContext(GlobalContext)

  const amounts = transections.map(transections =>transections.amount);
  const total = amounts?.reduce((acc, item)=>(acc += item),0)?.toFixed(2)
  return (
    <>
    <h2 className='btext'>Your balance</h2>
    <h3 className='bamount'>${total} </h3>
    </>
  )
}

export default Balance