import React, { useRef, useState, useEffect} from 'react'
import TailButton from '../component/TailButton'


export default function MyRef() {
  const n1Ref = useRef();
  const n2Ref = useRef();
  const n3Ref = useRef();
  const opRef = useRef();


  useEffect(()=>{
    n1Ref.current.focus();

  },[])

const handleCal = (e) => {
  e.preventDefault();

  let n1 = parseInt(n1Ref.current.value);
  let n2 = parseInt(n2Ref.current.value);
  
  let n3;
  switch (opRef.current.value) {

    case '+' : n3 = n1 + n2; break;
    case '-' : n3 = n1 - n2; break;
    case 'x' : n3 = n1 * n2; break;
    case '/' : n3 = n1 / n2; break;
  }
  n3Ref.current.value = n3;
  n1Ref.current.focus();
}


  return (

    <div className='w-9/10 bg-lime-50 flex justify-center'>
     
      <form className='flex justify-center'>
        <input type="number" name="num1" 
          ref={n1Ref}
         className="block p-2.5 w-20 bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        
        <select name="op" defaultValue="-" 
          ref={opRef}
        className="text-lg font-bold bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

        <option value="+"> + </option>
        <option value="-"> - </option>
        <option value="x"> x </option>
        <option value="/"> / </option>
        </select>

        <input type="number" name="num2" 
          ref = {n2Ref}
         className="block p-2.5 w-20 bg-gray-50 mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        
        <TailButton caption ="="
                    color="blue"
                    onHandle={handleCal}/>

        <input type="number" name="num3" readOnly 
          ref = {n3Ref}
         className=" bg-lime-300 block p-2.5 w-20  mx-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        
        

      </form>
          
    
    </div>
  )
}
