import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const CompleteProfile = () => {

    const navigate = useNavigate();
    const [dotsPass, setDotsPass] = useState('password');
    const [dotsPassConfirm, setDotsPassConfirm] = useState('password');
    const [eyePass, setEyePass] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);
    const [eyePassConfirm, setEyePassConfirm] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);
    const [email, setEmail] = useState("");

    useEffect(() => {
        const savedEmail = localStorage.getItem("signupEmail");
        if (savedEmail) {
            setEmail(savedEmail);
            setFormData(prev => ({ ...prev, email: savedEmail }));
        }
    }, []);

    const togglePassword = (dots, field) => {
        if (dots === "password") {
            if (field === 1) {
                setDotsPass("text");
                setEyePass(
                    <IoEye className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />
                );
            } else if (field === 2) {
                setDotsPassConfirm("text");
                setEyePassConfirm(
                    <IoEye className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />
                );
            }
        } else {
            if (field === 1) {
                setDotsPass("password");
                setEyePass(
                    <IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />
                );
            } else if (field === 2) {
                setDotsPassConfirm("password");
                setEyePassConfirm(
                    <IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />
                );
            }
        }
    }

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
        city: "",
        address: "",
        location: {
            type: "Point",
            coordinates: []
        }
    });

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Get user location
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setFormData((prev) => ({
                        ...prev,
                        location: {
                            type: "Point",
                            coordinates: [longitude, latitude]
                        }
                    }));
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Unable to fetch location. Please enable location access.");
                }
            );
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/api/v1/users/signup`, formData, { withCredentials: true });
            console.log(res.data);
            if (res.data.status === 'success') {
                console.log(res);
                navigate('/home');
            } else {
                alert(res.data.message || 'Signup failed');
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <>
            <div className="w-1/2 pt-10 mx-auto">
                <div className='pt-10 pb-10'>
                    <h1 className="font-montserrat-semibold text-center text-3xl mb-0 leading-none">WELCOME</h1>
                    <h1 className="font-montserrat-extrabold c-text-orange text-center text-4xl leading-none -mt-px">SIGNUP</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <div className="relative">
                            <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Password</label>
                            <input type={dotsPass} name="password" value={formData.password} onChange={handleChange} className={`input-custom font-montserrat-regular focus:outline-none block mx-auto ${dotsPass === 'text' ? 'text-black' : 'c-text-orange'}`} />
                            <div onClick={() => togglePassword(dotsPass, 1)}>{eyePass}</div>
                        </div>
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <div className="relative">
                            <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Confirm Password</label>
                            <input type={dotsPassConfirm} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={`input-custom font-montserrat-regular focus:outline-none block mx-auto ${dotsPassConfirm === 'text' ? 'text-black' : 'c-text-orange'}`} />
                            <div onClick={() => togglePassword(dotsPassConfirm, 2)}>{eyePassConfirm}</div>
                        </div>
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <div className="relative">
                            <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>
                                City
                            </label>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className='input-custom appearance-none font-montserrat-regular focus:outline-none block mx-auto pr-10'
                            >
                                <option value="">-- Select City --</option>
                                <option value="Gujranwala">Gujranwala</option>
                                <option value="Lahore">Lahore</option>
                                <option value="Islamabad">Islamabad</option>
                                <option value="Karachi">Karachi</option>
                                <option value="Sialkot">Sialkot</option>
                                <option value="Sargodha">Sargodha</option>
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

                    <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center items-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Signup</button>
                </form>
            </div>
        </>
    )
}

export default CompleteProfile
