import { useEffect, useState, useRef, memo } from "react"
import './Chat.css';

function Chat({ question, questionList }) {
    const chatListRef = useRef(null);
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(v => v.concat([question]));
    }, [question])

    useEffect(() => {
        list.forEach((el, i) => {
            if (el === null) {
                list.slice(i, 1);
            }
        })
        setList(list);
        chatListRef.current.scrollTo(0, 10000000000000)
    }, [list])

    return (
        <div ref={chatListRef} className="h-[60%] w-full flex flex-col gap-1 scroll-hidden overflow-auto">
            <Message text={'سلام وقتتون بخیر یک سوال داشتم'} admin={false} />
            <Message text={'وقتتون بخیر بفرمایید'} admin={true} />
            {
                !list.length ? <Message text={'روی یکی از سوالات زیر کلیک کنید'} admin={false} /> : ''
            }
            {
                list.map((id, i) => (
                    <div className="gap-1 flex flex-col" key={`${id}-${i}`}>
                        <Message text={questionList.find(v => v.id == id)?.text}  admin={false} />
                        <Message text={questionList.find(v => v.id == id)?.answer} admin={true} />
                    </div>
                ))
            }
        </div>
    )
}

const Message = memo(({ text, admin }) => {

    function getTime() {
        let d = new Date();
        return d.getHours() + ':' + d.getMinutes();
    }
    return (
        <div className="flex items-center gap-3" style={{ justifyContent: admin ? 'flex-start' : 'flex-end'}}>
            <p>{getTime()}</p>
            <div style={{background: admin ? '#F0ECF4' : '#C3B6D5'}} className="bg-secondary-100 rounded-[4px] px-2.5 text-text py-2 flex items-center">{text}</div>
        </div>
    )
})

export default Chat
