import { Link } from "react-router"


function Navbar(props) {
    return (
        <div className={"h-[110px] flex gap-[55px] items-center pt-[20px] justify-center " + props?.className}>
            <img src="logo.svg" alt="logo" className="w-[78px]" />
            <div className="h-full w-[60%] flex justify-center items-center">
                <ul className="flex justify-center items-center gap-5">
                    <li className="body-text"><Link to="#خدمات">خدمات</Link></li>
                    <li className="body-text"><Link to="#درباره_ما">درباره ما</Link></li>
                    <li className="body-text"><Link to="#ارتباط_با_ما">ارتباط با ما</Link></li>
                    <li className="body-text"><Link to="#خانه">خانه</Link></li>
                    <li className="body-text"><Link to="#نمونه_کار">نمونه کار</Link></li>
                    <li className="body-text"><Link to="#مقالات">مقالات</Link></li>
                    <li className="body-text"><Link to="#سوالات_متداول">سوالات متداول</Link></li>
                </ul>
            </div>
            <div className="bg-accent flex justify-center items-center px-6 py-4 rounded-[8px]">
                <h3>تماس بگیرید</h3>
            </div>
        </div>
    )
}

export default Navbar