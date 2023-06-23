import React, { useState } from 'react';


export const AddYours = ({addYours}) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  const Submit= (e)=>{
    e.preventDefault();
    if(!title||!desc){
      alert("title or desc cannot be blank")
      
    }
    addYours(title,desc);

  } 
  return (
    <div className='container my-3'>
        <h3>Add a to-do</h3>
        <form onSubmit={Submit}>
  <div className="mb-3">
    <label htmlFor="to-do">To-do</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" 
    id="to-do" aria-describedby="emailHelp" placeholder="Enter what you want to do"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc">desc</label>
    <input type="text" className="form-control" value={desc}  onChange={(e)=>setDesc(e.target.value)}
     id="desc"  placeholder="Elaborate"/>
  </div>
  <button type="Submit" className="btn btn-sm btn-success my-3 ">Submit</button>
</form>
    </div>
  )
}
