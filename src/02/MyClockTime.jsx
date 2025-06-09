
function MyClockTime () {

    let time = new Date().toLocaleTimeString(); 
    return(
        <span className="font-bold">현재 시간 : {time} </span>

    )
}
export default MyClockTime