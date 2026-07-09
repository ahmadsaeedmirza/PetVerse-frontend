import HospitalOne from "./HospitalOne"

const HospitalsSection = () => {
    return (
        <>
            <div className="px-8 py-5">
                <h1 className="font-montserrat-semibold text-2xl pb-3">Hospitals in Lahore</h1>
                <div className="flex flex-row space-x-6 overflow-x-auto flex-nowrap scrollbar-hide">
                    <HospitalOne name="PetsVets" loc="Johar Town" />
                    <HospitalOne name="PetsVets" loc="Johar Town" />
                    <HospitalOne name="PetsVets" loc="Johar Town" />
                    <HospitalOne name="PetsVets" loc="Johar Town" />
                    <HospitalOne name="PetsVets" loc="Johar Town" />
                    <HospitalOne name="PetsVets" loc="Johar Town" />
                </div>
            </div>
        </>
    )
}

export default HospitalsSection
