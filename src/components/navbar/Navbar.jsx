function Navbar({ className }) {
    let cls = className ? ' ' + className : '';
    const menuItems = [
        { label: "خدمات", href: "#خدمات" },
        { label: "ارتباط با ما", href: "#ارتباط_با_ما" },
        { label: "خانه", href: "#خانه" },
        { label: "نمونه کار", href: "#نمونه_کار" },
        { label: "مقالات", href: "#مقالات" },
        { label: "سوالات متداول", href: "#سوالات_متداول" }
    ];
    return (
        <nav className={"h-[100px] flex z-50 gap-[55px] bg-background items-center  justify-center" + cls}>
            <img src="logo.svg" alt="logo" className="w-[78px]" />
            <div className="h-full w-[60%] flex justify-center items-center">
                <ul className="flex justify-center items-center gap-5">
                    {menuItems.map(({ label, href }) => (
                        <li className="body-text" key={href}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-accent flex justify-center items-center px-6 py-4 rounded-[8px]">
                <h5>تماس بگیرید</h5>
            </div>
        </nav>
    )
}

export default Navbar