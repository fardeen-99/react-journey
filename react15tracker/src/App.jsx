import { useState,useEffect } from 'react'
import { MdDelete } from "react-icons/md";

import './App.css'

function App() {
  const [val, setval] = useState("")
  const [val2, setval2] = useState("")
  const [income, setincome ]= useState(0)
  const [expense, setexpense]= useState(0)
  const [transction, settransaction]= useState([])
  const [exptransction, setexptransaction]= useState([])

  // --------------------------
  // Load data from localStorage
  // --------------------------
 useEffect(() => {
  const savedIncome = JSON.parse(localStorage.getItem("income"));
  const savedExpense = JSON.parse(localStorage.getItem("expense"));
  const savedTrans = JSON.parse(localStorage.getItem("transction"));
  const savedExpTrans = JSON.parse(localStorage.getItem("exptransction"));

  if (savedIncome) setincome(savedIncome);
  if (savedExpense) setexpense(savedExpense);
  if (savedTrans) settransaction(savedTrans);
  if (savedExpTrans) setexptransaction(savedExpTrans);
}, []);

  // --------------------------
  // Save data to localStorage
  // --------------------------
  
  
  const deleteitem = (index) => {
  let dltamount=transction[index].amoun
  setincome((prev)=>prev-dltamount)
  settransaction(prev => prev.filter((_, i) => i !== index));
};



  const submit=(e)=>{
e.preventDefault()



let amount = Number(val2)
let expamount = Math.abs( Number(val2))
if(isNaN(amount)) return
if(isNaN(expamount)) return
if(val2.includes("-")){

  setexpense((prev)=>prev+expamount)
  setexptransaction((prev)=>[...prev,{name:val,amoun: expamount}])
  setval("")
return  setval2("")

}

setincome((prev)=>prev+amount)
setval("")
setval2("")


settransaction((prev)=>[...prev,{name:val,amoun: amount}])
  }
  
  useEffect(() => {
    localStorage.setItem("income", JSON.stringify(income));
    localStorage.setItem("expense", JSON.stringify(expense));
    localStorage.setItem("transction", JSON.stringify(transction));
    localStorage.setItem("exptransction", JSON.stringify(exptransction));
  }, [income, expense, transction, exptransction]);

  return (
    <>
<div className="main">

<h1>income and expense trackor</h1>
<div className="first">total balance:{income-expense}</div>
<div className="inc">income:{income}</div>
<div className="exp">expense:{expense}</div>
<div className="inp">
  <div className="ace">
<div className="card">

  <ul>
{

    transction.map((ele,index)=>(
 <li key={index}>
  <span>{ele.name}</span>
  <span>+{ele.amoun}</span>
  <span onClick={()=>deleteitem(index)}><MdDelete />
</span>

 </li> 
  
  
    ))
}
  </ul>

</div>
<div className="exp-card">

  <ul>
{

    exptransction.map((ele,index)=>(
 <li key={index}>
  <span>{ele.name}</span>
  <span>-{ele.amoun}</span>

 </li> 
  
  
    ))
}
  </ul>
</div>
</div>
<form onSubmit={submit}>
  <input type="text" placeholder='name' value={val} onChange={(e)=>setval(e.target.value)} />
  <input type="text" placeholder='amount' value={val2} onChange={(e)=>setval2(e.target.value)} />
  <button>add</button>
</form>

</div>
</div>

    </>
  )
}

export default App
