import React from 'react'
import TailButton from '../component/TailButton'

export default function TrafficNav({title, c, sel, setSel}) {
  const tag = c.map(item => <TailButton key = {item}
                                        caption= {item}
                                        color= {item == sel ? "orange" :"blue"}
                                        onHandle={() => setSel(item)} />)
  
  return (
    <div className='w-full flex justify-between'>
      
      <div className='text-2xl font-bold'>
        교통사고 {title}
      </div>

      <div className='flex'>
        {tag}
      </div>
    </div>
  )
}
