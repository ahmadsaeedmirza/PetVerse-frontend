import DefaultImg from "../../assets/images/homePage/default.jpg"
import { FaStar } from "react-icons/fa6";

const DocOne = ({ name, specilization, price, rating }) => {
    return (
        <div className="c-almost-white rounded-lg p-4 w-64 h-auto">
            <img src={DefaultImg} alt="" className="rounded-full w-[150px] h-[150px] mx-auto" />
            <div className="py-3">
                <h2 className="font-montserrat-bold text-center text-2xl c-text-orange">{name}</h2>
                <p className="font-montserrat-regular text-center">{specilization}</p>
            </div>
            <div className="flex flex-row justify-between items-center">
                <h1 className="font-montserrat-semibold text-lg">Rs {price}</h1>
                <h1 className="font-montserrat-semibold lext-lg">{rating} <FaStar className="inline text-yellow-500" /></h1>
            </div>
        </div>
    )
}

export default DocOne
