import { Link } from "react-router"


function Navbar({ className }) {
    let cls = className ? ' ' + className : '';
    return (
        <div className={"h-[100px] flex z-50 gap-[55px] bg-background items-center  justify-center" + cls}>
            <img src="logo.svg" alt="logo" className="w-[78px]" />
            <div className="h-full w-[60%] flex justify-center items-center">
                <ul className="flex justify-center items-center gap-5">
                    <li className="body-text"><Link to="#خدمات">خدمات</Link></li>
                    <li className="body-text"><Link to="#ارتباط_با_ما">ارتباط با ما</Link></li>
                    <li className="body-text"><Link to="#خانه">خانه</Link></li>
                    <li className="body-text"><Link to="#نمونه_کار">نمونه کار</Link></li>
                    <li className="body-text"><Link to="#مقالات">مقالات</Link></li>
                    <li className="body-text"><Link to="#سوالات_متداول">سوالات متداول</Link></li>
                </ul>
            </div>
            <div className="bg-accent flex justify-center items-center px-6 py-4 rounded-[8px]">
                <h5>تماس بگیرید</h5>
            </div>
        </div>
    )
}

export default Navbar