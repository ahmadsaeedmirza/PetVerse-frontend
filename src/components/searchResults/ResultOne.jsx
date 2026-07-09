import DefaultImg from '../../assets/images/homePage/default.jpg';
import { FaStar } from "react-icons/fa6";

const ResultOne = () => {
    return (
        <div className='flex flex-row border-0 w-full'>
            <img src={DefaultImg} className='w-1/4 h-auto rounded-3xl' alt="" />
            <div className="flex flex-col pl-5 w-3/4 justify-between">
                <div>
                    <h1 className="font-montserrat-bold text-2xl">Dr. Adullah Cheema</h1>
                    <p className="font-montserrat-medium">Cat Specilist</p>
                    <p className="font-montserrat-medium">Dog Specilist</p>
                    <p className="font-montserrat-medium">Bird Specilist</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div>
                        <p className="font-montserrat-regular">3 Years Experience</p>
                        <p className="font-montserrat-black text-2xl c-text-orange">Rs. 3000</p>
                    </div>
                    <div>
                        <p className="font-montserrat-regular">120 Reviews</p>
                        <p className="font-montserrat-black text-2xl flex flex-row items-center">5.0 <FaStar className="inline text-yellow-500 ml-3" /></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultOne
