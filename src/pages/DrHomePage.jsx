import DrNav from "../components/utils/DrNav"
import DrHome from "../components/drHome/DrHome"
import AppointmentsToday from "../components/drHome/AppointmentsToday"
import Graph from '../components/drHome/Graph'

const DrHomePage = () => {
    return (
        <>
            <DrNav heading='Hello! Vet' />
            <DrHome />
            <Graph />
            <AppointmentsToday />
        </>
    )
}

export default DrHomePage