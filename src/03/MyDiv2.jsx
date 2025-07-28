import { GoChevronRight } from "react-icons/go";
import MyDiv3 from "./MyDiv3"

export default function MyDiv2(props) {
  return (
      <div className="w-9/10 h-4/5 bg-amber-500
                    flex flex-col  items-center
                    p-20 text-2xl
                    text-white font-bold">
        <div className="w-9/10 flex justify-start
                        mb-5">
            {props.a} <GoChevronRight className="text-3xl" /> {props.b}
        </div>   

        <MyDiv3 a={props.a} b={props.b} c={props.c} />
    </div>
  )
}
