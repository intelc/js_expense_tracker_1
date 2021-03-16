import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Transaction from './components/Transaction'
import Transactions from './components/Transactions'
import AddTran from './components/AddTran'

import {useState, useEffect} from 'react'



function App() {

  const [trans,setTrans]=useState([])
  const fetchTrans= async ()=>{
    const res = await fetch("http://localhost:5000/posts")
    const data = await res.json()
    return data
  }
  const updateTrans= async()=>{
    const fetchedTrans = await fetchTrans()
    setTrans(fetchedTrans)

  }
  useEffect(() => {
    updateTrans()
    
  }, [])

  const addTran= async (props)=>{
    const res = await fetch("http://localhost:5000/posts",{method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(props)
  })
  updateTrans()

  }

  const deleteTran= async (id)=>{
    console.log(id)
    const res = await fetch(`http://localhost:5000/posts/${id}`,{method:'DELETE'})
    updateTrans()

  }

  return (
    <div className='container'>
      <Header name='M&T Cash Management' color='blue'/>
      <Transactions list={trans} onDelete={deleteTran}/>
      <AddTran onAdd = {addTran}/>
    </div>
  );
}

export default App;
