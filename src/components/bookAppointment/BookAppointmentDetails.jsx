import { IoIosArrowDropdown } from "react-icons/io";

const BookAppointmentDetails = () => {
    return (
        <div className="px-8 py-5">
            <h1 className="font-montserrat-extrabold text-[50px] text-center pb-3 uppercase">book an</h1>
            <h1 className="font-montserrat-extrabold text-[32px] text-center pb-3 -mt-8 uppercase c-text-orange">appointment</h1>

            <div className='relative mx-auto w-1/2 pb-6'>
                <div className="relative">
                    <select
                        name="pet"
                        // value={formData.city}
                        // onChange={handleChange}
                        className='input-custom appearance-none text-center font-montserrat-regular focus:outline-none block mx-auto pr-10'
                    >
                        <option value="">Select Pet</option>
                        <option value="Kutta">Tom - Dog</option>
                        <option value="tota-na-mena-sab-china">Dave - Parrot</option>
                        <option value="billi">Simba - Cat</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                        <IoIosArrowDropdown className="text-2xl c-text-orange" />
                    </div>
                </div>
            </div>

            <textarea name="medicalHistory" placeholder="Enter Medical History" className="h-[250px] mb-6 w-1/2 block mx-auto border-2 font-montserrat-regular border-[#F05147] rounded-lg p-3 box-border" id=""></textarea>
            <textarea name="symptoms" placeholder="Enter Current Symptoms/Concerns" className="h-[250px] mb-6 w-1/2 block mx-auto border-2 font-montserrat-regular border-[#F05147] rounded-lg p-3 box-border" id=""></textarea>

            <button type="button" onClick={() => navigate('/book-appointment-details')} className='relative font-montserrat-regular text-xl cursor-pointer w-1/2 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Confirm Booking</button>


        </div>
    )
}

export default BookAppointmentDetails
