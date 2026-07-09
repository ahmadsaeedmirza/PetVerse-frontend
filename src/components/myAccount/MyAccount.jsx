import Edit from '../../assets/images/myAccount/edit.png'
import Default from '../../assets/images/homePage/default.jpg';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";

const MyAccount = () => {
    return (
        <div className='w-1/2 mx-auto mt-10'>

            <div className="mx-auto relative flex rounded-full h-[150px] w-[150px] mb-10">
                <img src={Default} alt="" className='rounded-full' />
                <img src={Edit} alt="" className='absolute bottom-0 right-0 cursor-pointer h-5 w-auto' />
            </div>

            <form>
                <div className='relative mx-auto w-1/2 pb-6'>
                    <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Name</label>
                    <input type="text" name="name" className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                </div>
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Password</label>
                        <input type='text' name="password" className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                        <div ></div>
                    </div>
                </div>
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>New Password</label>
                        <input type='text' name="confirmPassword" className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                        <div></div>
                    </div>
                </div>
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>
                            City
                        </label>
                        <select
                            name="city"
                            className='input-custom appearance-none font-montserrat-regular focus:outline-none block mx-auto pr-10'
                        >
                            <option value="">-- Select City --</option>
                            <option value="Gujranwala">Gujranwala</option>
                            <option value="Lahore">Lahore</option>
                            <option value="Islamabad">Islamabad</option>
                            <option value="Karachi">Karachi</option>
                            <option value="Sialkot">Sialkot</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                            <IoIosArrowDropdown className="text-2xl c-text-orange" />
                        </div>
                    </div>
                </div>

                {/* Location button */}

                {/* <div className='mx-auto pb-6'>
                    <button type="button" onClick={getLocation} className='relative cursor-pointer w-1/2 flex justify-center items-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Get My Location</button>
                    {formData.location.coordinates.length > 0 && (
                        <p className="text-sm mt-2">
                            📍 Lat: {formData.location.coordinates[1]}, Lng: {formData.location.coordinates[0]}
                        </p>
                    )}
                </div> */}

                <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center items-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Save Changes</button>
            </form>

        </div>
    )
}

export default MyAccount
