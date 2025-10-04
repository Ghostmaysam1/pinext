function User() {
    return (
        <div className="h-[30px] w-[160px] flex gap-4 justify-between items-center">
            <div className="flex items-start">
                <p className="text-[#d9d9d9]">حالا</p>
            </div>
            <div className="flex gap-2.5">
                <div className="flex h-7.5 items-end justify-evenly flex-col">
                    <span className="h-1 w-9.5 text-[8px] font-light bg-[#d9d9d9] rounded-2xl"></span>
                    <span className="h-0.5 w-[75px] text-[8px] font-light bg-[#d9d9d9] rounded-2xl"></span>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#d9d9d9]"></div>
            </div>
        </div>
    )
}

export default User
