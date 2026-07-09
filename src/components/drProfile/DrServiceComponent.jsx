import Location from "../../assets/images/drProfile/location.svg";
import Days from "../../assets/images/drProfile/days.svg";
import Timings from "../../assets/images/drProfile/timings.svg";

const DrServiceComponent = ({ heading, price, days, timings, loc }) => {
    return (
        <div className="bg-white flex flex-col justify-center shadow-md hover:shadow-lg rounded-2xl p-6 transition-shadow">
            <div className="w-full flex flex-row justify-between items-center">
                <h2 className="font-montserrat-semibold text-xl py-2">{heading}</h2>
                <h2 className="c-text-orange text-lg font-montserrat-medium">Rs. {price}</h2>
            </div>
            <div className="flex flex-row items-center pt-2">
                <img src={Days} alt="" className="h-[20px] w-auto pr-3" />
                <span className="font-montserrat-semibold">Days: </span>
                <p className="font-montserrat-regular pl-3">{days}</p>
            </div>
            <div className="flex flex-row items-center pt-2">
                <img src={Timings} alt="" className="h-[20px] w-auto pr-3" />
                <span className="font-montserrat-semibold">Timings: </span>
                <p className="font-montserrat-regular pl-3">{timings}</p>
            </div>
            <div className="flex flex-row items-center pt-2">
                <img src={Location} alt="" className="h-[20px] w-auto pr-3" />
                <p className="font-montserrat-regular">{loc}</p>
            </div>
        </div>
    )
}

export default DrServiceComponent
