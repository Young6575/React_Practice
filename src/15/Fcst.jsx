import React, { useEffect, useRef, useState} from 'react'
import TailButton from '../component/TailButton'
import getcode from './getcode.json'
import getxy from './getxy.json'
import { useNavigate } from 'react-router-dom'


export default function Fcst() {
    const dtRef = useRef();
    const areaRef = useRef();
    const area = [...new Set(getxy.map(item => item['1단계']))]
    const navigate = useNavigate();

    const handleLink = (gubun) => {
        const tm = getxy.filter(item => item['1단계'] == areaRef.current.value)[0];
        let x = tm["격자 X"]
        let y = tm['격자 Y']
      //  console.log(x,y)
     // console.log(gubun, dtRef.current.value, areaRef.current.value)
      
      navigate(`/FcstList?gubun=${gubun}&date=${dtRef.current.value}&area=${areaRef.current.value}&x=${x}&y=${y}`)
        
     
        

    }


/////////// UseEffect /////////////////////

useEffect(()=>{
    //오늘날짜
    let today = new Date().toISOString().split('T')[0];
    dtRef.current.value = today

},[])


  return (
    <div>

        <div className='text-3xl font-bold mb-7' >
            일기예보 선택
        </div>
    
        <div className='grid grid-cols-2 gap-4'>
             <input type="date" 
                    id="dt" 
                    ref={dtRef} 
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    
            <select id="area" 
                    ref={areaRef} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            
            <option value=''>--시도선택</option>
            {
                area.map(item => <option key={item} value={item}>{item}</option>)
            }
            </select>
        </div>
    

        <div className='grid grid-cols-2 gap-4'>
            <TailButton caption="초단기예보" 
                        color="blue"
                        onHandle={()=> handleLink('초단기')} />
            
            <TailButton caption="단기예보" 
                        color="blue"
                        onHandle={() => handleLink('단기')} />
        </div>
        


    </div>
  )
}
