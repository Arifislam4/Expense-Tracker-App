import React, {useContext} from 'react'
import { GlobalContext } from '../../contexts/GlobalState'

export const Transection = ({ transection}) => {
    const {deleteTransection} = useContext(GlobalContext);
     const sign = transection.amount < 0 ? '-' : '+';


  return (
    <li className={transection.amount < 0 ? 'minus' : 'plus'}> 
        {transection.text} <span>{sign} $ {Math.abs(transection.amount)}</span> 
        <button onClick={()=> deleteTransection(transection.id)} className='delete-btn'>X</button>
    </li>
  )
}
