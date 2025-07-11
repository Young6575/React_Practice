import { Link, useNavigate } from "react-router-dom"
import TailButton from "../component/TailButton"

export default function RouteHome() {
    const naviagte = useNavigate();

  return (
    <div className='w-9/10 mt-10 flex flex-col justify-center items-center'>
      <h1 className="text-2xl font-bold text-center">Home</h1>
      <ul className="w-60">
        <Link to='p1/사과/🍎'>
        <li className="w-full p-4 m-2 border border-amber-300">
            사과 🍎
        </li>
        </Link>
        <Link to='p1/당근/🥕'>
            <li className="w-full p-4 m-2 border border-amber-300">
                당근 🥕
            </li>
        </Link>
        <Link to='p1/바나나/🍌'>
            <li className="w-full p-4 m-2 border border-amber-300">
                바나나 🍌
            </li>
        </Link>
      </ul>

        <div className="w-60 grid grid-cols-1">
            <TailButton caption='사과 🍎'
                        color='blue'
                        onHandle={()=> naviagte('p2?item1=사과&item2=🍎')} />
            <TailButton caption='당근 🥕'
                        color='blue'
                        onHandle={()=> naviagte('p2?item1=당근&item2=🥕')} />
            <TailButton caption='바나나 🍌'
                        color='blue'
                        onHandle={()=> naviagte('p2?item1=바나나&item2=🍌')} />
        </div>

    </div>
  )
}
