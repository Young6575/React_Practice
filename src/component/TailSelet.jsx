import React from 'react'

export default function TailSelet({title,selvalue,handle,opv,opt}) {

console.log(opv);
  return (
    
    <>
  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
  <select id="countries" defaultValue="" ref={selvalue} 
        onChange={handle}
        className="w-50 h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="">{title}</option>
    {opv.map((item,idx) => <option key={item} value={item}>{opt[idx]}</option>)}   
  </select>
    </>

  )
}
