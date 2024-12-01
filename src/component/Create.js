import React, { useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import '../css/Create.css'

export default function Create(e) {
    const {data, postData} = useFetch("http://localhost:3000/person" , 'POST');
    const [name, setName] = useState()
    const [famil, setFamil] = useState()
    const [code, setCode] = useState()
    function handelsub(e){
        e.preventDefault()
        console.log(name)
        postData({name, famil, code});
    }
    useEffect(()=>{
        if(data){
            setTimeout(() => {
                window.location.reload()
            }, 500);
        }
    },[data])
  return (
    <div>
        <form onSubmit={handelsub} className='align'>
            <div className='mb-3 mt-3 '>
                <label htmlFor="name">نام:</label>
                <input type="text" className='form-control' id='name' onChange={(e)=>setName(e.target.value)} value={name}/>
                <label htmlFor="famil">نام خوانوادگی:</label>
                <input type="text" className='form-control' id='famil' onChange={(e)=>setFamil(e.target.value)} value={famil}/>
                <label htmlFor="code">کد ملی:</label>
                <input type="number" className='form-control' id='code'onChange={(e)=>setCode(e.target.value)} value={code}/>
            </div>
            <button className='btn btn-primary' >افزودن</button>
            {/* <button className='btn btn-primary' onClick={e.plus}>بستن</button> */}
        </form>
    </div>
  )
}
