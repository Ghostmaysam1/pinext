import { useState } from "react"

import ProjectBox from "./components/projectBox/ProjectBox"

import portfolio_1 from '/portfolios/sample1.png'
import chevron_down from '/chevron_down.svg'
 
const projects = [
    { description: "lorem ipsum dollar", image: portfolio_1 },
    { description: "lorem ipsum dollar", image: portfolio_1 },
    { description: "lorem ipsum dollar", image: portfolio_1 },
    { description: "lorem ipsum dollar", image: portfolio_1 },
    { description: "lorem ipsum dollar", image: portfolio_1 },
    { description: "lorem ipsum dollar", image: portfolio_1 },
    { description: "lorem ipsum dollar", image: portfolio_1 },
    { description: "lorem ipsum dollar", image: portfolio_1 },
    { description: "lorem ipsum dollar", image: portfolio_1 }
]

function Portfolio() {
    const [showNumber, setShowNumber] = useState(4);

    function handleLoadMoreClick() {
        if (projects.length - showNumber >= 4) {
            setShowNumber(v => v + 4);
        } else {
            setShowNumber(v => v + projects.length - showNumber);
        }
    }

    function handleLoadLessClick() {
        setShowNumber(4);
    }

    return (
        <div className="flex flex-col gap-2 items-center">
            <h1>نمونه کار</h1>
            <span className="h-[60px] w-full block"></span>
            <div className="w-[90%] flex gap-4 justify-evenly flex-wrap">
                {
                    projects.slice(0, showNumber).map(p => (
                        <ProjectBox description={p.description} image={p.image} />
                    ))
                }
            </div>
            <span className="h-[65px] w-full block"></span>
            {
                showNumber >= projects.length ?
                <button onClick={handleLoadLessClick} className="flex justify-around cursor-pointer items-center gap-1 w-fit rounded-full px-5 py-1"><h4>کمتر</h4> <span><img src={chevron_down} className="rotate-180" alt="" /></span></button>
                :
                <button onClick={handleLoadMoreClick} className="flex justify-around cursor-pointer items-center gap-1 w-fit rounded-full px-5 py-1"><h4>بیشتر</h4> <span><img src={chevron_down} alt="" /></span></button>
            }
        </div>
    )
}

export default Portfolio