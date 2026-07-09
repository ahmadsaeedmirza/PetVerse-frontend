import { FaBuilding } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const HospitalOne = ({ name, loc }) => {
    return (
        <>
            <div className="hospital min-w-[250px] flex flex-row items-center c-light-gray px-5 py-8 rounded-lg">
                <div className="h-[50px] w-[50px] flex justify-center items-center rounded-full c-orange">
                    <FaBuilding className="text-white h-auto w-1/2" />
                </div>
                <div className="pl-8">
                    <h2 className="font-montserrat-semibold text-2xl c-text-orange">{name}</h2>
                    <div className="pt-3 flex flex-row items-center">
                        <FaLocationDot className="c-text-orange" />
                        <h2 className="font-montserrat-regular pl-3">{loc}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HospitalOne
