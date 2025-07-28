import React, { useRef, useState } from 'react'
import TailButton from '../src/component/TailButton'

export default function MyRef() {
    //캄포넌트 변수
    let cnt =0;

    //상태 변수
    const [scnt, setScnt] = useState(0);

    //ref변수
    const rcnt = useRef(0);

const handleCnt = () => {
    cnt = cnt + 1;
    
}

const handleScnt = () => {
    setScnt(scnt+1);
}

const handleRcnt = () => {
    rcnt.current = rcnt.current +1;
    
}

  return (

    <div className='grid grid-cols-3 gap-4'>
     
          <div className='text-red-600 text-lg font-bold'>
            컴포넌트 변수 : {cnt}
          </div>
          <div className='text-blue-600 text-lg font-bold'>
            state 변수 : {scnt}
          </div>
          <div className='text-green-600 text-lg font-bold'>
            ref 변수 : {rcnt.current}
          </div>
          
            <div>
            <TailButton caption="컴포넌트 변수" color="orange" onHandle= {handleCnt}/>
            </div>
        
              <div><TailButton caption="state 변수" color="blue" onHandle= {handleScnt}/></div>
              <div><TailButton caption="ref 변수" color="lime" onHandle= {handleRcnt}/></div>
          
    
    </div>
  )
}
