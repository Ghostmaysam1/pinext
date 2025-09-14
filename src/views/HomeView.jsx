import Navbar from "../components/navbar/Navbar.jsx"
import AudienceSection from "../components/home/audienceSection/AudienceSection.jsx"
import ServicesButton from "../components/home/servicesButton/ServicesButton.jsx"
import QuoteBanner from "../components/home/quoteBanner/QuoteBanner.jsx"

function HomeView() {
    return (
        <div className="pt-[110px]">
            <Navbar className="fixed top-0 w-full" />
            <span className="h-[100px] w-full block"></span>
            <AudienceSection />
            <span className="h-[140px] w-full block"></span>
            <ServicesButton />
            {/* TODO */}
            <span className="h-[20px] w-full block"></span>
            <QuoteBanner />
        </div>
    )
}

export default HomeView