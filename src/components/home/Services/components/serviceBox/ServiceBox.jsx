import { useState } from 'react';
import { LayoutTemplate, Smartphone, Boxes, Headset } from "lucide-react";
import './serviceBox.css';

function ServiceBox({ icon, title, description, state }) {
    const [isOpen, setIsOpen] = useState(state ? true : false);

    function handleClick() {
        setIsOpen(v => !v);
    }

    const renderIcon = () => {
        switch (icon) {
            case 'smartphone': return <Smartphone size={30} />;
            case 'boxes': return <Boxes size={30} />;
            case 'layout-template': return <LayoutTemplate size={30} />;
            case 'headset': return <Headset size={30} />;
            default: return null;
        }
    };

    return (
        <div className='service-box relative z-20 w-full max-w-[600px]'>
            <div
                onClick={handleClick}
                className={`shadow-md border border-[#9E9EA735] p-5 rounded-[16px] flex flex-col gap-4 cursor-pointer ${isOpen ? 'overflow-visible' : 'h-[100px] overflow-hidden'}`}>

                <div className="flex items-start justify-between gap-4">
                    <h5 className='text-right flex-1 break-words min-w-0 font-semibold'>{title}</h5>
                    <span className="shrink-0 w-[60px] h-[60px] flex justify-center items-center rounded-full bg-secondary">
                        {renderIcon()}
                    </span>
                </div>

                {isOpen && (
                    <div className="flex justify-end text-right mt-2">
                        <p className="break-words leading-relaxed">{description}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ServiceBox;