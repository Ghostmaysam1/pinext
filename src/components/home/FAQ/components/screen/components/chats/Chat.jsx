import { useEffect, useState, useRef, memo } from "react";
import './Chat.css';

const Message = memo(({ text, admin, timestamp }) => {
    return (
        <div className="flex items-start gap-3" style={{ justifyContent: admin ? 'flex-start' : 'flex-end' }}>

            <span className={`text-xs text-gray-500 whitespace-nowrap mt-1 ${!admin ? 'hidden' : ''}`}>{timestamp}</span>
            <div style={{ background: admin ? '#F0ECF4' : '#C3B6D5' }} 
                 className="rounded-[4px] px-3 py-2 max-w-[80%] break-words shadow-sm">
                {text}
            </div>
            <span className={`text-xs text-gray-500 whitespace-nowrap mt-1 ${admin ? 'hidden' : ''}`}>{timestamp}</span>
        </div>
    );
});


function Chat({ question, questionList }) {
    const chatListRef = useRef(null);

    const [messages, setMessages] = useState([]);


    useEffect(() => {
        setMessages([
            {
                id: 'welcome',
                timestamp: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
            }
        ]);
    }, []);

    useEffect(() => {

        if (question != null) {
            const newMessage = {
                id: question,
                timestamp: new Date().toLocaleTimeString('fa-IR', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prevMessages => [...prevMessages, newMessage]);
        }
    }, [question]);

    useEffect(() => {
        const chatEl = chatListRef.current;
        if (!chatEl) return;


        chatEl.scrollTo({
            top: chatEl.scrollHeight,
            behavior: 'smooth'
        });

    }, [messages]);


    const renderedMessages = messages.map((msg, index) => {
        if (msg.id === 'welcome') {
            return {
                key: `welcome-${index}`,
                userText: 'سلام وقتتون بخیر یک سوال داشتم',
                botText: 'وقتتون بخیر بفرمایید',
                timestamp: msg.timestamp
            };
        }

        const item = questionList.find(v => v.id == msg.id);
        if (!item) return null;

        return {
            key: `${msg.id}-${index}`,
            userText: item.text,
            botText: item.answer,
            timestamp: msg.timestamp
        };
    }).filter(Boolean);

    return (
        <div ref={chatListRef} id="chat" className="h-full w-full flex flex-col gap-3 p-2 px-4 overflow-auto">
            {messages.length <= 1 && (
                <div className="flex justify-center my-4">
                    <div className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm">
                        روی یکی از سوالات زیر کلیک کنید
                    </div>
                </div>
            )}

            {renderedMessages.map((msg) => (
                <div className="flex flex-col gap-1" key={msg.key}>
                    <Message text={msg.userText} admin={false} timestamp={msg.timestamp} />
                    <Message text={msg.botText} admin={true} timestamp={msg.timestamp} />
                </div>
            ))}
        </div>
    );
}

export default Chat;