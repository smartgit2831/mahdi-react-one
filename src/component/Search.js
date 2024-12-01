import React, { useState } from 'react'
import "../css/Search.css"
import { useFetch } from '../hooks/useFetch';
export default function Search(element) {
    const [name, setNmae] = useState();
    const [famil, setFamil] = useState();
    const [code, setCode] = useState();
    const [url, setUrl] = useState();
    function serch(e){
        console.log(name)
        if(name !== undefined){
            setUrl('http://localhost:3000/person?q='+ name )
        }else if(famil !== undefined){
            setUrl('http://localhost:3000/person?q='+ famil )
        }else if(code !== undefined){
            setUrl('http://localhost:3000/person?q='+ code )
        }
    }
    const {data} = useFetch(url)
  return (
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <div class="container-fluid">
                <a class="navbar-brand" onClick={serch}>جستو جو</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <span>نام</span>
                            <input type="text" onChange={(e)=>setNmae(e.target.value)}/>
                        </li>
                        <li class="nav-item">
                            <span>نام خوانوادگی</span>
                            <input type="text" onChange={(e)=>setFamil(e.target.value)}/>
                        </li>
                        <li class="nav-item">
                            <span>کد ملی</span>
                            <input type="number" onChange={(e)=>setCode(e.target.value)}/>
                        </li>  
                    </ul>
                </div>
            </div>
        </nav>


        {data && 
        <table className='table table-striped'>
            <thead>
                <th>نام</th>
                <th>نام خوانوادگی</th>
                <th>کد ملی</th>
                <th>عملیات</th>
            </thead>
            <tbody>
                {data && data.map((e, i)=>(
                    <tr key={i}>
                        <td>{e.name}</td>
                        <td>{e.famil}</td>
                        <td>{e.code}</td>
                        <td className='icon_del_edit'>
                            <i class="material-icons">border_color</i>
                            <i class="material-icons">delete_forever</i>
                            <i class="material-icons">visibility</i>
                            <i class="material-icons" onClick={element.loc}>pin_drop</i>
                            <i class="material-icons" onClick={()=>element.nemudar(e)}>poll</i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        }
    </div>
  )
}
