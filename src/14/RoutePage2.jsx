import { useSearchParams } from "react-router-dom"

export default function RoutePage2() {
    const [sparams] = useSearchParams();
    const item1 = sparams.get("item1")
    const item2 = sparams.get("item2")
    const data = ['사과', '바나나']

  return (
    <div className='w-9/10 mt-10 flex flex-col justify-center items-center'>
      <h1 className="text-2xl font-bold text-center">Page2</h1>

      <div>
       { item2 == 'm' ? '메뉴선택' :
        `${item2}는 ${ data.includes(item1) ? "과일입니다." : "과일이 아닙니다."}` }
      </div>
    </div>
  )
}
