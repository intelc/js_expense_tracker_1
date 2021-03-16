import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa"
import {FaLongArrowAltLeft} from "react-icons/fa"
import {FaTimes} from "react-icons/fa"

//props are variable to pass into the component,
//or could be potential events the component can trigger. How 
//exact actions are triggered is handled within the component
//given that the component has sub-components. Thus seperation is required.
const Transaction = ({tran, onDelete}) => {
    return (
        <div className='task'>
            <header className='header'>
                <h2>{tran.name}</h2>
                {tran.direction ? <FaLongArrowAltLeft/> :<FaLongArrowAltRight/>}
                <h2 style={{color:`${tran.direction? "green": "red"}`}}>{tran.amount}</h2>
                <FaTimes style={{color:'red'}} onClick={()=>{onDelete(tran.id)
                console.log(tran.id)}}/>
            </header>
            
        </div>
    )
}

export default Transaction
