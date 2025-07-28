import React, { useState } from 'react'
import TailButtonLine from '../component/TailButtonLine'

export default function MyToggleBox({color}) {

  const [flag, setFlag] = useState(false);


  const bg = {
    "blue" : "bg-blue-400",
    "orange" : "bg-orange-400",
    "lime" : "bg-lime-400",
  }
  
  const handleToggle = () => {
    setFlag(!flag);
  }

  return (
    <div className={`w-9/10 h-50 
                    flex flex-col justify-center items-center
                   ${flag && bg[color]}`}>

      <div className={`font-bold text-2xl 
                       ${flag ? "text-white" : "text-black" } 
                        mb-10`}>
        {color}            
      </div>
        <TailButtonLine caption="blue Toggle" 
                          color={color}
                          onHandle={handleToggle}/>
    
    </div>
  )
}
