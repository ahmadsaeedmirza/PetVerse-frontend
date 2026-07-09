import { useNavigate } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import DefaultImg from "../../assets/images/homePage/default.jpg"
import PVMCverified from "../../assets/images/drProfile/pvmc-verified.svg";
import DrServiceComponent from "./DrServiceComponent";
import DrReview from "./DrReview";
const DrProfile = () => {

    const navigate = useNavigate();

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="px-8 py-5 scroll-smooth">

            <div className="w-full p-5 rounded-2xl flex flex-row items-center">
                <div className="w-1/2 flex flex-row items-center">
                    <img src={DefaultImg} alt="" className="rounded-full w-[150px] h-[150px]S" />
                    <div className="pl-8 w-full">
                        <h2 className="font-montserrat-bold text-2xl capitalize c-text-orange">Dr. Prem Kumar</h2>
                        <h2 className="font-montserrat-regular capitalize">Pet Specialist</h2>
                        <h2 className="font-montserrat-semibold uppercase">DVM</h2>
                        <img src={PVMCverified} alt="PVMC Verified" className="w-[150px] h-auto pt-2" />
                    </div>
                </div>
            </div>


            <div className="py-5">
                <div className="flex flex-col justify-center items-center">
                    <h2 className="font-montserrat-bold text-2xl capitalize"><span className="c-text-orange">30 </span>Positive Patients Reviews</h2>
                    <a href="#reviews" className="text-blue-500 text-base text-center font-montserrat-medium underline">
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-3 gap-6 mt-5">
                    <div className="p-5 c-orange rounded-lg flex flex-col items-center">
                        <h2 className="font-montserrat-semibold text-white">Experience</h2>
                        <h2 className="font-montserrat-extrabold text-white text-2xl">6 Years</h2>
                    </div>
                    <div className="p-5 c-orange rounded-lg flex flex-col items-center">
                        <h2 className="font-montserrat-semibold text-white">Satisfaction</h2>
                        <h2 className="font-montserrat-extrabold text-white text-2xl">100 %</h2>
                    </div>
                    <div className="p-5 c-orange rounded-lg flex flex-col items-center">
                        <h2 className="font-montserrat-semibold text-white">Wait Time</h2>
                        <h2 className="font-montserrat-extrabold text-white text-2xl">20 Mins</h2>
                    </div>
                </div>

            </div>
            <h2 className="font-montserrat-extrabold text-2xl">Services</h2>

            <div className="grid grid-cols-[2fr_1fr] gap-6">
                <div className="grid grid-rows-3 gap-6">
                    <DrServiceComponent
                        heading="Clinic Appointment"
                        price="3000"
                        days="Monday, Tuesday, Wednesday"
                        timings="10:00AM - 7:00PM"
                        loc="Civil Vet Hospital"
                    />
                    <DrServiceComponent
                        heading="Home Visit"
                        price="5000"
                        days="Thursday, Friday, Saturday"
                        timings="11:00AM - 6:00PM"
                        loc="Gujranwala"
                    />
                    <DrServiceComponent
                        heading="Online Consultation"
                        price="1500"
                        days="Sunday"
                        timings="2:00PM - 5:00PM"
                        loc="Online"
                    />
                </div>

                <div className="bg-white shadow-md hover:shadow-lg rounded-2xl p-6 transition-shadow">
                    <h2 className="font-montserrat-extrabold text-2xl pb-3">Services</h2>
                    <ul className="list-disc list-inside flex flex-col gap-4 font-montserrat-regular">
                        <li>General Checkup</li>
                        <li>Vaccination</li>
                        <li>Deworming</li>
                        <li>Neutering</li>
                        <li>Spaying</li>
                        <li>Grooming</li>
                        <li>Artifical Insemination</li>
                        <li>Pregnancy Diagnosis</li>
                        <li>X-Ray</li>
                        <li>Surgery</li>
                    </ul>
                    <h2 className="font-montserrat-extrabold text-2xl py-3">Specilization</h2>
                    <ul className="list-disc list-inside flex flex-col gap-4 font-montserrat-regular">
                        <li>Dog Specialist</li>
                        <li>Cat Specialist</li>
                        <li>Equine Specialist</li>
                        <li>Poultry Specialist</li>
                        <li>Cattle/Buffalo Specialist</li>
                    </ul>
                </div>
            </div>

            <div className="py-5">
                <h2 className="font-montserrat-extrabold text-2xl">About Me</h2>
                <p className="font-montserrat-regular text-justify text-base pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel tempore omnis incidunt voluptatum harum modi, perspiciatis quas accusamus odit excepturi alias corrupti ea, nobis voluptatem provident deserunt! Ut, minima amet!
                    Repellendus pariatur sapiente maiores aspernatur, iure labore totam harum ipsam quos repellat alias omnis perferendis quaerat necessitatibus, soluta dolore esse. Modi laborum eos aspernatur, veniam numquam expedita voluptas soluta esse.
                    Ratione nihil dolor itaque adipisci modi assumenda nesciunt molestias hic commodi earum saepe exercitationem eligendi, delectus est ab quibusdam sequi consequatur debitis unde esse tenetur qui? Nam commodi inventore accusantium.
                    Libero aperiam perspiciatis, itaque nihil adipisci animi obcaecati? Ducimus, dolorum. Ex quo ipsa necessitatibus saepe quibusdam ad ipsam rem. Possimus, ad. Maiores atque provident nisi recusandae quae cupiditate laboriosam tempora?
                    Perspiciatis quia obcaecati quasi illo, alias dignissimos sit fugiat fuga pariatur quisquam possimus inventore cum. Suscipit architecto id, assumenda distinctio, voluptates hic aliquid expedita earum harum accusamus incidunt totam consequatur!
                </p>
            </div>

            <div className="py-5 mb-5" id='reviews'>
                <h2 className="font-montserrat-extrabold text-2xl pb-5">Reviews</h2>

                <Carousel responsive={responsive} itemClass="px-3">
                    <DrReview />
                    <DrReview />
                    <DrReview />
                    <DrReview />
                    <DrReview />
                    <DrReview />
                    <DrReview />
                    <DrReview />
                    <DrReview />
                </Carousel>
            </div>

            <button type="button" onClick={() => navigate('/book-appointment')} className='relative font-montserrat-regular text-xl cursor-pointer w-1/2 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Book Appointment</button>

        </div>
    )
}

export default DrProfile
