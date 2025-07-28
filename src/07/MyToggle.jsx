import React from 'react'
import MyToggleBox from './MyToggleBox'


export default function MyToggle() {
  return (
    
    <div className='grid grid-cols-1 lg:grid-cols-2 gpa-4'>
      <MyToggleBox color="blue"/>
      <MyToggleBox color="orange"/>
      <MyToggleBox color="lime"/>
    </div>
  )
}

