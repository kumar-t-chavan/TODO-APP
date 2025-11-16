import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [data,setdata] = useState("")
  const [preview,previewdata] = useState("")

  const handle = (e)=>{
    setdata(e.target.value)
  }

  const btn = ()=>{
if (data === "") {

  const preview = document.querySelector(".preview");
  if (preview) preview.style.border = "none";


  const deleteBtn = document.querySelector(".btn12");
  if (deleteBtn) deleteBtn.style.display = "none";


  alert("Please Fill The Input Section ❌");
}


else{
  previewdata(data)
const data512 = document.getElementsByClassName("preview")[0];
data512.style.border = "2px solid"

const del = document.querySelector('.btn12');
del.style.display = "block"
}



  }

  const btn1 = ()=>{
    setdata("")
    previewdata("")
   
    const preview = document.getElementsByClassName("preview")[0];
      preview.style.border = "none"

       const del = document.querySelector('.btn12');
       del.style.display = "none"

  }
  return (
    <div>
      <div className="maintodo">
        <div className="todoapp">
          <div className="inputsection">
            <input type="text" onChange={handle} value={data}/>
            <button onClick={btn}>ADD</button>
          </div>
<div className='button'>
  
          <div className='preview'>
           <h5>{preview}</h5>
          
          </div>
        <div>
          <button className='btn12' onClick={btn1}>DELETE</button>
        </div>
</div>

        </div>
      </div>
    </div>
  )
}

export default App
