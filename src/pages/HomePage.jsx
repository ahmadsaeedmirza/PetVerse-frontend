import WelcomeNav from "../components/utils/WelcomeNav"
import SearchBar from "../components/homePage/SearchBar"
import ServiceSection from "../components/homePage/ServiceSection"
import HospitalsSection from "../components/homePage/HospitalsSection"
import DoctorsSection from "../components/homePage/DoctorsSection"
import LookingForSection from "../components/homePage/LookingForSection"
import GetYourAnimalSection from "../components/homePage/GetYourAnimalSection"

const HomePage = () => {
    return (
        <div>
            <WelcomeNav />
            <SearchBar />
            <ServiceSection />
            <HospitalsSection />
            <DoctorsSection />
            <LookingForSection />
            <GetYourAnimalSection />
        </div>
    )
}

export default HomePage
