import React from 'react'
import Incomeexpense from './incomeexpense'
import Balance from './balance'
import History from './history'
import Addtransection from './addtransection'

const Container = () => {
  return (
        <div className='container'>
            <Balance />
            <Incomeexpense />
            <History />
            <Addtransection />
        </div>
  )
}

export default Container