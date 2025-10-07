import { useState } from 'react'
import { LayoutTemplate, Smartphone, Boxes, Headset } from "lucide-react";
import './serviceBox.css';

function ServiceBox({ icon, title, description, state }) {
    const [isOpen, setIsOpen] = useState(state ? true : false);

    function handleClick() {
        setIsOpen(v => !v);
    }

    return (
        <div className='service-box relative'>
            <div
                onClick={handleClick}
                className={`shadow-md transition-all duration-100 ease-in-out overflow-hidden w-[600px] border border-[#9E9EA735] p-5 rounded-[16px] flex flex-col gap-4 ${isOpen ? 'h-[300px]' : 'h-[100px] cursor-pointer'}`}>
                <div className="flex justify-end gap-2 transition duration-300 ease-in-out items-center" style={isOpen ? { flexDirection: 'column-reverse', alignItems: 'flex-end' } : {}}>
                    <h4>{title}</h4>
                    <span className="w-[60px] h-[60px] flex justify-center items-center rounded-full bg-secondary">
                        {
                            icon == 'smartphone' ?
                                <Smartphone size={30} /> : icon == 'boxes' ?
                                    <Boxes size={30} /> : icon == 'layout-template' ?
                                        <LayoutTemplate size={30} /> : icon == 'headset' ?
                                            <Headset size={30} /> : ''
                        }
                    </span>
                </div>
                <div className="flex justify-end text-right">
                    <p>{description}</p>
                </div>

            </div>
        </div>
    )
}

export default ServiceBox;
