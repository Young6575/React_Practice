import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import getcode from './getcode.json';

// 단위 매핑


// 하늘 상태 코드 해석
const skyUnit = {
  "1": "맑음(🔆)",
  "3": "구름많음(☁️)",
  "4": "흐림(🌫)"
};

// 강수 형태 코드 해석
const ptyUnit = {
  "0": "없음",
  "1": "비(🌧)",
  "2": "비/눈(🌨/❄️)",
  "3": "눈(❄️)",
  "4": "소나기(🌦)",
  "5": "빗방울(🌧)",
  "6": "빗방울/눈날림(💧❄️)",
  "7": "눈날림(🌬❄️)"
};

const unitMap = {};
getcode.forEach(item => {
  unitMap[item['항목값']] = item['단위'];
});


export default function FcstList() {
  const [sparams] = useSearchParams();
  const [tdata, setTdata] = useState([]);
  const [tag, setTag] = useState([]);

  const gubun = sparams.get('gubun');
  const dt = sparams.get('date');
  const area = sparams.get('area');
  const x = sparams.get('x');
  const y = sparams.get('y');
  const date = dt.replaceAll('-', '');

  const ops = getcode.filter(item => item['예보구분'] === `${gubun}예보`);

  const getDataFetch = async () => {
    let baseUrl, baseTime, numOfRows;

    if (gubun === '초단기') {
      baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=';
      baseTime = '0630';
      numOfRows = '1000';
    } else {
      baseUrl = 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=';
      baseTime = '0500';
      numOfRows = '500';
    }

    const url = `${baseUrl}${import.meta.env.VITE_TOUR_API}&pageNo=1&numOfRows=${numOfRows}&dataType=json&base_date=${date}&base_time=${baseTime}&nx=${x}&ny=${y}`;
    const resp = await fetch(url);
    const data = await resp.json();
    setTdata(data.response.body.items.item);

    console.log(tdata)
  };

  const onhandelsel = (e) => {
    const str = e.target.value;
    const start = str.indexOf("[");
    const end = str.indexOf("]");
    const label = str.substring(0, start);
    const code = str.substring(start + 1, end);

    const temp = tdata.filter(item => item.category === code);

    console.log(temp)

    const tagtm = temp.map((item, idx) => {
      let displayValue = item.fcstValue;

      if (code === "PTY") displayValue = ptyUnit[item.fcstValue] || item.fcstValue;
      else if (code === "SKY") displayValue = skyUnit[item.fcstValue] || item.fcstValue;
      else displayValue = `${item.fcstValue} ${unitMap[code] || ''}`;

      return (
        <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-300" >
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {label}
          </th>
          <td className="px-6 py-4">{item.fcstDate}</td>
          <td className="px-6 py-4">{item.fcstTime}</td>
          <td className="px-6 py-4">{displayValue}</td>
        </tr>
      );
    });

    setTag(tagtm);
  };

  useEffect(() => {
    getDataFetch();
  }, []);

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div className="text-2xl font-bold text-center">
          부산광역시 {gubun}예보 ({dt.replaceAll('-', '.')})
        </div>

        <select
          id="sel"
          onChange={onhandelsel}
          className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">--시도선택</option>
          {ops.map(item => (
            <option key={item['항목값']} value={`${item['항목명']}[${item['항목값']}]`}>
              {item['항목명']}[{item['항목값']}]
            </option>
          ))}
        </select>
      </div>

      <div className="relative overflow-x-auto pt-10" >
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">항목명</th>
              <th scope="col" className="px-6 py-3">예측일자</th>
              <th scope="col" className="px-6 py-3">예측시간</th>
              <th scope="col" className="px-6 py-3">예측값</th>
            </tr>
          </thead>
          <tbody>
          {tag}
          </tbody>
        </table>
      </div>
    </div>
  );
}
