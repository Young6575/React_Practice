import React, { useEffect, useState } from 'react'
import TailButton from '../component/TailButton'

export default function TrafficNav({title, c, selC, setselC}) {
    const [tag,setTag] = useState([]);

    useEffect(() => {
        let tm = c.map(item => 
                    <TailButton 
                        key={item}
                        caption={item}
                        color="blue"
                        onHandle={() => {setselC(item)}}
                         />);
            console.log(tm)
        setTag(tm);                 
    },[c])

  return (
    <div>

      <div className='flex items-center justify-between w-full'>

          <span className='font-bold text-3xl '>교통사고 {title}</span>
    
            <div className='flex items-center'>
                {tag}
            </div>
      </div>

    </div>
  )
}
