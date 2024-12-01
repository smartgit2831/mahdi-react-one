import React, { useState } from 'react'
import { useFetch } from '../hooks/useFetch';

export default function Editeor({edit}) {
    const {data, postData} = useFetch('http://localhost:3000/person', 'POST');
    const {dataing, setDataing} = useState()

    // const [n, setn] = useState()
    const [edit_name, setEdite_name] = useState()
    const [edit_famil, setEdite_famil] = useState()
    const [edit_code, setEdite_code] = useState()
    function editing(e){
        e.preventDefault()
        if(edit){
            data && data.map(e=>{
                if(e.id === edit.id){
                    edit.name = edit_name
                    edit.famil = edit_famil
                    edit.code = edit_code
                    postData({edit_name, edit_famil, edit_code})
                }
            })
        }
    }
  return (
    <div>
        <form onSubmit={editing}>
            <div className='mb-3 mt-3 '>
                <label htmlFor="name">نام:</label>
                <input type="text" className='form-control' id='name' onChange={(e)=>setEdite_name(e.target.value)}/>
                <label htmlFor="famil">نام خوانوادگی:</label>
                <input type="text" className='form-control' id='famil' onChange={(e)=>setEdite_famil(e.target.value)}/>
                <label htmlFor="code">کد ملی:</label>
                <input type="number" className='form-control' id='code'onChange={(e)=>setEdite_code(e.target.value)}/>
            </div>
            <button>ویرایش</button>
        </form>
    </div>
  )
}
