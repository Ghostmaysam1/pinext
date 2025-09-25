import { Link } from "react-router"

function Article({name, date, id}) {
    return (
        <div className="flex flex-col w-[273px] h-[372px] gap-2">
            <div className="bg-[#B5B5B5] w-full h-[270px] rounded-[12px] relative">
                <span className="absolute bottom-0 px-2 py-1 bg-[#E7E7E777] right-0 rounded-br-[12px] rounded-tl-[12px] text-[12px]">{date}</span>
            </div>
            <div className="bg-primary-400 h-[160px] rounded-[12px] p-2 flex flex-col items-center justify-between">
                <h5>{name}</h5>
                <button className="bg-primary-600 w-full rounded-[4px] h-[35px] flex justify-center items-center text-background cursor-pointer"><Link to={id}>بخوانید</Link></button>
            </div>
        </div>
    )
}

export default Article