import React, {useState, useContext} from 'react'
import { GlobalContext } from '../../contexts/GlobalState'

export const Addtransection = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransection} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();
    console.log('onSubmit');
    const newTransection ={
      id: Math.floor(Math.random()* 100000), 
      text,
      amount:Number(amount)
    }
    addTransection(newTransection);
  }

  return (
    <>
        <h3>Add New</h3>
        <form onSubmit={onSubmit} id='form'>
            <div className='form-control'>
                <label htmlFor="number">Purpose</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text...' />
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount <br />(Negative -Expense, Positive -Income) </label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter Amount' />
            </div>
            <button className='btn'>Add Transection</button>
        </form>
    </>
  )
}

export default Addtransection