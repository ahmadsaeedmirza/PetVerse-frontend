import { FaStar } from "react-icons/fa6";

const DrReview = () => {
    return (
        <div className="bg-white shadow-md hover:shadow-lg border-2 border-[#F05147] rounded-2xl p-6 mx-3 transition-shadow w-full">
            <h2 className="font-montserrat-bold pb-2">Ahmad Saeed</h2>
            <p className="font-montserrat-regular text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus consectetur veritatis officiis nesciunt rerum iure in vitae voluptatum facere. Alias adipisci repellat magnam! Sed soluta autem sit excepturi hic incidunt.</p>
            <div className="flex flex-row items-center pt-2">
                <FaStar className="inline text-yellow-500" />
                <p className="font-montserrat-semibold pl-3">3.0</p>
            </div>
        </div>
    )
}

export default DrReview
