import DrNav from "../components/utils/DrNav";
import SchedulingComp from "../components/drScheduling/SchedulingComp";

const DrScheduling = () => {
    return (
        <>
            <DrNav heading='Scheduling' />
            <div className="py-5 px-8">
                <h1 className="font-montserrat-extrabold text-2xl c-text-orange pl-5">Avalibility</h1>
                <SchedulingComp heading='Online Consultation' />
                <SchedulingComp heading='Clinic Appointment' />
                <SchedulingComp heading='Home Visit' />
            </div>
        </>
    )
}

export default DrScheduling
