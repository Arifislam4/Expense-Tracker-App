import { useContext } from "react"
import React from 'react'
import { GlobalContext } from "../../contexts/GlobalState"
import { Transection } from "./transectionHistory"


const History = () => {
  const {transections} = useContext(GlobalContext)
  
  return (
    <div>
        <h2>History</h2>
        <ul id='list' className='list'>
          {transections.map(transection =>(<Transection key={transection.id} transection={transection} />))}
            
        </ul>
    </div>
  )
}

export default History