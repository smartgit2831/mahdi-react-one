import { useState } from 'react'
import '../css/Person.css'
import {useFetch} from '../hooks/useFetch'
import Create from './Create';
import Location from './Location';
import Nemudar from './Nemudar';
import Search from './Search';
import Editeor from './Editeor';
export default function Person() {
    const {data} = useFetch('http://localhost:3000/person');
    const [btn_plus, setBtn_plus] = useState(false)
    const [btn_loc, setBtn_loc] = useState(false)
    const [btn_nemu, setBtn_nemu] = useState(false)
    const [btn_edit, setBtn_edit] = useState(false)
    const [num, setNum] = useState(1)
    const [edit, setedit] = useState()
    function plus(){
        if(!btn_plus){
            setBtn_plus(true)
        }else if(btn_plus){
            setBtn_plus(false)
        }
    }
    function loc(){
        if(!btn_loc){
            setBtn_loc(true)
        }else if(btn_loc){
            setBtn_loc(false)
        }
        setBtn_nemu(false)
        setBtn_edit(false)
    }
    function nemudar(e){
        setNum(e.month)
        if(!btn_nemu){
            setBtn_nemu(true)
        }else if(btn_nemu){
            setBtn_nemu(false)
        }
        setBtn_loc(false)
        setBtn_edit(false)
    }
    function editer(e){
        setedit(e)
        if(!btn_edit){
            setBtn_edit(true)
        }else if(btn_edit){
            setBtn_edit(false)
        }
        setBtn_nemu(false)
        setBtn_loc(false) 
    }
  return (
    <div className='bdy'>
        <Search loc={loc} nemudar={nemudar}/>
        <button className='btn btn-primary' onClick={()=>plus()}>افزودن</button>
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
                            <i class="material-icons" onClick={()=>editer(e)}>border_color</i>
                            <i class="material-icons">delete_forever</i>
                            <i class="material-icons">visibility</i>
                            <i class="material-icons" onClick={loc}>pin_drop</i>
                            <i class="material-icons" onClick={()=>nemudar(e)}>poll</i>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className={btn_plus ? 'block posit' : 'none'}>
            <Create plus={plus}/>
        </div>
        <div className={btn_loc ? 'block' : 'none'}>
            <Location/>
        </div>
        <div className={btn_nemu ? 'block' : 'none'}>    
            <Nemudar num={num}/>
        </div>
        <div className={btn_edit ? 'block' : 'none'}>
            <Editeor edit={edit}/>
        </div>
    </div>
  )
}
