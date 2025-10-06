import Navbar from "../components/navbar/Navbar.jsx"
import AudienceSection from "../components/home/audienceSection/AudienceSection.jsx"
import ServicesButton from "../components/home/servicesButton/ServicesButton.jsx"
import QuoteBanner from "../components/home/quoteBanner/QuoteBanner.jsx"
import Portfolio from "../components/home/portfolio/Portfolio.jsx"
import Articles from "../components/home/Articles/Articles.jsx"
import FAQ from "../components/home/FAQ/FAQ.jsx"
import Services from "../components/home/Services/Services.jsx"

function HomeView() {
    return (
        <div className="pt-[110px]">
            <Navbar className="fixed top-0 w-full" />
            <span className="h-[100px] w-full block"></span>
            <AudienceSection />
            <span className="h-[140px] w-full block"></span>
            <ServicesButton />
            <span className="h-[20px] w-full block"></span>
            <QuoteBanner />
            <span className="h-[130px] w-full block"></span>
            <Services />
            <span className="h-[130px] w-full block"></span>
            <Portfolio />
            <span className="h-[150px] w-full block"></span>
            <Articles />
            <span className="h-[185px] w-full block"></span>
            <FAQ />
        </div>
    )
}

export default HomeView
