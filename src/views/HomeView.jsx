import Navbar from "../components/navbar/Navbar.jsx"
import AudienceSection from "../components/home/audienceSection/AudienceSection.jsx"
import '../utils/css/border-gradient.css';

function HomeView() {
    return (
        <div className="pt-[110px]">
            <Navbar className="fixed top-0 w-full" />
            <span className="h-[100px] w-full block"></span>
            <AudienceSection />
            <span className="h-[140px] w-full block"></span>
            <div>
                <button>
                    <h5>خدمات</h5>
                </button>
            </div>
        </div>
    )
}

export default HomeView