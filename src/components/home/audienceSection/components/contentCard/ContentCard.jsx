import { useMemo } from 'react';

function ContentCard({ tabs = [], selectedTab }) {

    const content = useMemo(() => {
        return tabs.find(tab => tab.name === selectedTab)?.text || '';
    }, [tabs, selectedTab]);

    return (
        <div dir="rtl" className="w-[90%] max-w-180 p-8 h-76 rounded-xl bg-background shadow-[0_0_27px_rgba(0,0,0,0.12)] overflow-hidden">
            <div className='text-justify h-full overflow-auto custom-scrollbar transition-opacity duration-200'>
                {content}
            </div>
        </div>
    );
}

export default ContentCard;