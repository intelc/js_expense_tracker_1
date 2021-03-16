import React, { useState } from 'react'

const AddTran = ({onAdd}) => {
    const [name,setName]=useState('')
    const [amount,setAmount]=useState('')
    const [direction,setDirection]=useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        if (!name||!amount){
            alert('bro you trippin')
            return
        }
        const approved=false
        
        onAdd({name,amount,direction,approved})
        setName('')
        setAmount('')
        setDirection('')
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label> Name </label>
                <input type='text' placeholder='Add name'
                value = {name}
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label> Amount </label>
                <input type='text' placeholder='Add amount'
                value = {amount}
                onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <div className="form-control form-control-check">
                <label> payment </label>
                <input type='checkbox' 
                checked = {direction}
                onChange={(e)=>setDirection(e.target.checked)}/>
            </div>
            <input type='submit' value='Save Transaction'className='btn btn-block'/>



        </form>
    )
}

export default AddTran
