import DocOne from "./DocOne"

const DoctorsSection = () => {
    return (
        <>
            <div className="px-8 py-5">
                <h1 className="font-montserrat-semibold text-2xl pb-3">Best Doctors In Area</h1>
                <div className="flex flex-row space-x-6 overflow-x-auto flex-nowrap scrollbar-hide">
                    <DocOne name='Dr Prem Kumar' specilization='Pet Specialist' price='3000' rating='4.8' />
                    <DocOne name='Dr Shahid Kapoor' specilization='Pet Specialist' price='3000' rating='4.8' />
                </div>
            </div>
        </>
    )
}

export default DoctorsSection
