import { useMemo, useCallback } from 'react';
import Question from "./components/question/Question";

function Questions({ onQuestion, questionList, askedQuestions = [] }) {
    const askedQuestionsSet = useMemo(() => new Set(askedQuestions), [askedQuestions]);

    const handleQuestionClick = useCallback((id) => {
        if (!askedQuestionsSet.has(id)) {
            onQuestion(id);
        }
    }, [onQuestion, askedQuestionsSet]);

    return (
        <div className="h-max flex items-center justify-center relative bg-gradient-to-r from-transparent via-white/5 to-transparent px-1 md:px-8">
            <div className='flex gap-6 overflow-x-auto p-4 
                scrollbar-thin 
                scrollbar-thumb-white/20 
                scrollbar-track-transparent 
                hover:scrollbar-thumb-white/30
                scrollbar-thumb-rounded-full'>
                {questionList.map(q => (
                    <div key={`first-${q.id}`} className="flex-shrink-0">
                        <Question
                            onClick={() => handleQuestionClick(q.id)}
                            text={q.text}
                            isActive={askedQuestionsSet.has(q.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Questions;