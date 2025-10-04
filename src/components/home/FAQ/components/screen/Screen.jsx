import { useState } from "react"

import Input from "./components/input/Input"
import Questions from "./components/questions/Questions"
import Sidebar from "./components/sidebar/Sidebar"
import Chat from "./components/chats/Chat"

function Screen() {
    const [qNow, setQNow] = useState(null)

    const questionList = [
        {id: 1, text: `چطور پنل ها رو مشاهده کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 2, text: `چطور قیمت ها رو مشاهده کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 3, text: `چطور پشتیبانی رو پیدا کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
    ]

    function onQuestionFire(qId) {
        setQNow(qId)
    }
    return (
        <div className="p-3 pl-5 pt-4 h-full bg-primary-200 flex gap-4">
            {/* chat */}
            <div className="w-full flex flex-col">
                <Chat question={qNow} questionList={questionList} />
                <Questions onQuestion={onQuestionFire} questionList={questionList} />
                <Input questionList={questionList} />
            </div>

            {/* sidebar */}
            <div className="w-[30%]">
                <Sidebar />
            </div>
        </div>
    )
}


export default Screen
