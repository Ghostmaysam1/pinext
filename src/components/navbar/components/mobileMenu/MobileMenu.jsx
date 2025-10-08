import { X } from "lucide-react";

function MobileMenu({ menuItems, isMenuOpen, closeMenu }) {



    return (
        <div className={`w-full h-[100vh] fixed top-0 z-50 left-0 backdrop-blur-lg flex items-end flex-col gap-6 pt-[140px] px-[19px] ${!isMenuOpen ? 'hidden' : ''}`}>
            <X className="absolute top-10" onClick={closeMenu} />

            <div className="h-min">
                <ul className="flex flex-col justify-center items-end gap-5">
                    
                    {menuItems.map(({ label, href }) => (
                        <li className="text-[18px]" key={href}>
                            <a onClick={closeMenu} href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-accent px-4 py-2 shadow-sm justify-center items-center rounded-[8px]">
                <p className="text-[18px] font-bold">تماس بگیرید</p>
            </div>
        </div>
    )
}

export default MobileMenu;