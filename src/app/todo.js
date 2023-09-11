'use client'
import React, { useRef, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function todo() {
  const [list,setlist] = useState([])
  const [activity,setactivity] = useState('')
  const [edit,setedit] = useState(null)
  const inputref = useRef(null);

  function add()
  {
    if(!activity)
    {
      alert('Please fill the input box')
    }
    else if(edit==null)
    {
      setlist([...list,activity])
      setactivity('')
      inputref.current.focus()
    }
    else
    {
        setlist(list.map((item,id) => {
            if(id==edit)
            {
                return activity
            }
            return item
        }))
        setedit(null)
        inputref.current.focus()
    }
    setactivity('')
  }
  function editActivity(e,data,index)
  {
      e.preventDefault()
      setactivity(data)
      setedit(index)
      inputref.current.focus()
  }
  function deleteActivity(e,index)
  {
      e.preventDefault()
      setlist(list.filter((list,i) => {
        return index != i
    }))
  }
  function clear()
  {
      setlist([])
  }
  return (
    <>
        <div className='container'>

            <h1>Todo List</h1>

            <div className='head'>
                <input type='text' ref={inputref} onChange={(e) => setactivity(e.target.value)} value={activity} placeholder='Enter Task'/>
                <button className='btn btn1' onClick={add}>Add</button>
                <button className='btn btn2' onClick={clear}>Clear</button>
            </div>

            <ul>
              {
                list.map((data,index) => {
                  return(
                    <div key={index} className='box'>
                      <li>{data}</li>
                      <div className='action'>
                        <a href='#' className='edit' onClick={(e) => editActivity(e,data,index)}>{<EditIcon/>}</a>
                        <a href='#' className='del' onClick={(e) => deleteActivity(e,index)}>{<DeleteIcon/>}</a>
                      </div>
                    </div>
                  )
                })
              }
            </ul>
         </div>
        
    </>
  )
}

export default todo
