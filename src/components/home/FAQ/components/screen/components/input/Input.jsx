import { SendHorizonal, Smile } from "lucide-react"

function Input() {
    return (
        <div style={{boxShadow: '0px 0px 9px rgba(0, 0, 0, .28)'}} className="h-[50px] w-full flex justify-between items-center shrink-0 rounded-[4px] px-2 bg-primary-300">
            <div className="flex gap-1.5">
                <SendHorizonal color="#4B5563" className="cursor-pointer" />
                <Smile color="#4B5563" className="cursor-pointer" />
            </div>
            <p className="text-[15px] text-text select-none cursor-text">روی سوال مورد نظر خود کلیک کنید</p>
        </div>
    )
}

export default Input
