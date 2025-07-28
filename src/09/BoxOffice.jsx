import React, { useRef } from 'react'
import { useState, useEffect } from 'react'
import { FaCrown } from "react-icons/fa6";


export default function BoxOffice() {

    const [tdata, setTdata] = useState([]);
    const [tag, setTag] = useState([]);
    const [flag,setFlag] = useState(null)
    const [date, setDate] = useState();

    const yesterday = () => {
        let yday = new Date();
        yday.setDate(yday.getDate() - 1)

        return yday.toISOString().slice(0,10);
    }

    const yRef = useRef();
  
    const getFetchData = async () => {


        const apikey = import .meta.env.VITE_MV_API;
        const dt = yRef.current.value.replaceAll('-','');
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${dt}`;

        const resp = await fetch(url);
        const data = await resp.json();
        setTdata(data.boxOfficeResult.dailyBoxOfficeList)
       console.log(data.boxOfficeResult.dailyBoxOfficeList)

    }

     const hadledetail = (item) => {

         setFlag({
            name: item.movieNm,
            rank: item.rank,
            openDate: item.openDt,
            scrnCnt: item.scrnCnt,
            showCnt: item.showCnt
        });

     }


    useEffect(()=>{
        console.log(yesterday());
        yRef.current.max = yesterday();
        yRef.current.value = yesterday();
        getFetchData();
    },[])


   

    useEffect(() => {
        let tm = tdata.map(item =>     
        
            <tr key= {item.movieCd} onClick={() => hadledetail(item) }
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 
                     hover:cursor-pointer hover:bg-amber-200 hover:text-black">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.rank}
                </th>
                <td class="px-6 py-4">
                    {item.movieNm}
                </td>
                <td class="px-6 py-4">
                    {parseInt(item.salesAmt).toLocaleString()}
                </td>
                <td class="px-6 py-4">
                    {parseInt(item.audiCnt).toLocaleString()}
                </td>
                <td class="px-6 py-4">
                    {parseInt(item.salesAcc).toLocaleString()}
                </td>
                <td class="px-6 py-4">
                    {parseInt(item.audiAcc).toLocaleString()}
                </td>
                <td class="px-6 py-4">
                    {item.rankOldAndNew == 'OLD' ? "" : 
                    <span className='font-bold text-red-600'>NEW</span>}
                </td>
            </tr>);

            setTag(tm)
    }, [tdata])



    return (
    
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className='flex justify-end'>
           검색날짜  <input type="date" name="date" 
                    ref={yRef} onChange={getFetchData}
                    className='border'  />
        </div>
        <div>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            순위
                        </th>
                        <th scope="col" class="px-6 py-3">
                            영화명
                        </th>
                        <th scope="col" class="px-6 py-3">
                            매출액
                        </th>
                        <th scope="col" class="px-6 py-3">
                            관객수
                        </th>
                        <th scope="col" class="px-6 py-3">
                            누적 매출액
                        </th>
                        <th scope="col" class="px-6 py-3">
                            누적 관객수
                        </th>
                        <th scope="col" class="px-6 py-3">
                            증가율
                        </th>
                    </tr>
                </thead>
                <tbody>              
                    {tag}
                </tbody>
            </table>
        </div>
        <div className='bg-gray-200'>
            {flag && (
                <>
               <p> ◾ 선택 영화: {flag.name} </p> 
               <p>◾ 등수 : {flag.rank} 
                 ◾ 상영한 스크린 수 : {flag.scrnCnt} 
                 ◾ 상영횟수 : {flag.showCnt>5000 ? (
                    <span className='felx inline-flex text-amber-500'><FaCrown /> {flag.showCnt}</span>) : flag.showCnt }</p>
               </>
                )}
        </div>
    </div>
    

  )
}
