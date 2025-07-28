import  { useEffect, useState } from 'react'  
import TrafficNav from './TrafficNav';

export default function Traffic() {
    // fetch data
    const [tdata,setTdata] = useState([]);

    //대분류목록
    const [c1,setC1] = useState([]);
    //선택한 대분류
    const[selC1,setSelC1] = useState();

    //중분류목록
    const[c2,setC2] = useState([]);


    //Fectch

    const getFetchdata = async () => {
        const baseurl = "https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?"
        const url = `${baseurl}page=1&perPage=18&serviceKey=${import.meta.env.VITE_DATA_API}`
        
        const resp = await fetch(url);
        const data = await resp.json();

        setTdata(data.data);
    }


    //컴퍼넌트가 시작되면 fetch
    useEffect(() => {
        getFetchdata();
    },[]) ;

    useEffect(() => {
        let arr1 = []
        if (tdata.length ==0) return;

        arr1 = tdata.map(item => 
            //arr1.includes(item['사고유형대분류']) ? '' : arr1.push(item['사고유형대분류'])
            item['사고유형대분류']
        )
        arr1 = new Set(arr1);
        arr1 = [...arr1];
        setC1(arr1);
    },[tdata])
  
  
    //대분류가 선택되었을 때
    useEffect(() => {
        if (!tdata || !selC1) return;

        if (tdata.length ==0) return;

         let arr2 = tdata
        .filter(item => item['사고유형중분류'] === selC) // 조건 필터링
        .map(item => item['사고건수']); // 예시: 사고건수를 추출

    arr2 = [...new Set(arr2)]; // 중복 제거
    setC2(arr2); // 상태 저장
    console.log(arr2);
}, [selC1]);

    return (
    <div className='w-9/10'>
       <TrafficNav title="대분류" 
                    c={c1}
                    selC={selC1}
                    setselC = {setSelC1} />
        <TrafficNav title="중분류" 
                    c={c2}
                    selC={null}
                    setselC = {() => {}} />
    </div>
  )
}
