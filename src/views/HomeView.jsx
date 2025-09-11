import Navbar from "../components/navbar/Navbar.jsx"
import AudienceSection from "../components/home/audienceSection/AudienceSection.jsx"

function HomeView() {
    return (
        <div>
            <Navbar className="fixed top-0 w-full" />
            <AudienceSection />
        </div>
    )
}

export default HomeView