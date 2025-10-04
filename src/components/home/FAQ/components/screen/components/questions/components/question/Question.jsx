function Question({text, onClick}) {
    return (
        <div onClick={onClick} className="bg-primary-500 cursor-pointer rounded-[12px] px-3 py-2 text-right min-w-[100px] max-w-[30%] h-fit">
            <p className="text-white">{text}</p>
        </div>
    )
}

export default Question
