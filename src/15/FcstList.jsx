import React, { useEffect, useState } from 'react'
import { data, useSearchParams } from 'react-router-dom'
import getcode from './getcode.json'

export default function FcstList() {
  const [sparams] = useSearchParams();
  const [tdata,setTdata] = useState([]);

  const gubun = sparams.get('gubun');
  const dt = sparams.get('date');
  const area = sparams.get('area');
  const x = sparams.get('x')
  const y = sparams.get('y')
  const date = dt.replaceAll('-', '')

  const ops = getcode.filter(item => item['예보구분'] == `${gubun}예보`)

  const getDataFetch = async () => {

    let baseUrl;
    let baseTime;
    let numOfRows;
    if (gubun == '초단기') {
      baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey='
      baseTime = '0630'
      numOfRows = '1000'
    }
    else {
      baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey='
      baseTime = '0500'
      numOfRows = '500'
    }

    const url = `${baseUrl}${import.meta.env.VITE_TOUR_API}&pageNo=1&numOfRows=${numOfRows}&dataType=json&base_date=${date}&base_time=${baseTime}&nx=${x}&ny=${y}`

    const resp = await fetch(url)
    const data = await resp.json();

    console.log(data)
    setTdata(data.response.body.items.item)
  
  //  console.log(data.response.body.items.item)
  }



  useEffect(() => {
    console.log(gubun, dt, area, x, y)
    getDataFetch();

  }, [])

  useEffect(()=>{
    console.log(tdata)

  },[tdata])


  return (
    <div className='w-full'>

      <div className='flex flex-col2 justify-between'>
        <div className='text-2xl font-bold text-center'>
          부산광역시 {gubun}예보  ({dt.replaceAll('-', '.')})
        </div>

        <select id="sel"
          className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

          <option value=''>--시도선택</option>
          {
            ops.map(item => <option value={item['항목명']}>{item['항목명']}[{item['항목값']}] </option>)
          }
        </select>
      </div>

      <div class="relative overflow-x-auto pt-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                항목명
              </th>
              <th scope="col" class="px-6 py-3">
                예측일자
              </th>
              <th scope="col" class="px-6 py-3">
                예측시간
              </th>
              <th scope="col" class="px-6 py-3">
                예측값
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Apple MacBook Pro 17"
              </th>
              <td class="px-6 py-4">
                Silver
              </td>
              <td class="px-6 py-4">
                Laptop
              </td>
              <td class="px-6 py-4">
                $2999
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">
                White
              </td>
              <td class="px-6 py-4">
                Laptop PC
              </td>
              <td class="px-6 py-4">
                $1999
              </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Magic Mouse 2
              </th>
              <td class="px-6 py-4">
                Black
              </td>
              <td class="px-6 py-4">
                Accessories
              </td>
              <td class="px-6 py-4">
                $99
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}
