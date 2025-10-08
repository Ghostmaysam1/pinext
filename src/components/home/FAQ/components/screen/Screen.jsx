import { useState } from "react"

import Input from "./components/input/Input"
import Questions from "./components/questions/Questions"
import Chat from "./components/chats/Chat"

function Screen() {
    const [qNow, setQNow] = useState(null)

    const questionList = [
        {id: 1, text: `چطور پنل ها رو مشاهده کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 2, text: `چطور قیمت ها رو مشاهده کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 3, text: `چطور پشتیبانی رو پیدا کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 4, text: `چطور پشتیبانی رو پیدا کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه کنید'},
        {id: 5, text: `چطور پشتیبانی رو پیدا کنم`, answer: 'در بخش ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه ارتباط با ما به اینستاگرام مراجعه کنید'},
    ]

    function onQuestionFire(qId) {
        setQNow(qId)
    }
    return (
        <div className="p-0 lg:p-3  h-full bg-primary-200 flex gap-4">
            <div className="w-full flex flex-col justify-between">
                <Chat question={qNow} questionList={questionList} />
                <Questions onQuestion={onQuestionFire} questionList={questionList} />
                <Input questionList={questionList} />
            </div>
        </div>
    )
}


export default Screen
