import React from 'react'
import Transaction from './Transaction'
const Transactions = ({list,onDelete}) => {
    return (
        <div>
            {
                list.map((item)=>(
                

                   
                    <Transaction key= {item.id} tran = {item} onDelete={onDelete}/>   
                    
                   
                )
                )
                
            }
            
        </div>
    )
}

export default Transactions
