import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import logo from '../../assets/images/signin-up/logo-colored.svg';
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const qualificationOptions = ["DVM", "BVCs", "LAD", "AIT", "Others"];
const specializationOptions = ["Dogs", "Cat", "Cattle/Buffalo", "Bird", "Reptiles", "Aquatic Animals", "Equine", "Poultry"];
const offeringOptions = ["Consultation", "Vaccination", "Deworming", "Neutering", "Surgery", "X-Ray", "Grooming", "Artificial Insemination", "Spaying", "Lab Test", "Pregnancy Diagnosis", "Dental Care", "Checkup"];
const timeOptions = [
    "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
    "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM",
    "08:00 PM", "09:00 PM", "10:00 PM", "11:00 PM"
];
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const initialFormData = {
    email: "",
    phone: "",
    name: "",
    password: "",
    confirmPassword: "",
    address: "",
    city: "",
    qualification: [],
    specialization: [],
    experience: "",
    location: {
        type: "Point",
        coordinates: []
    },
    clinicAppointments: {
        enabled: false,
        days: [],
        fromTime: "",
        tillTime: "",
        price: ""
    },
    onlineConsultation: {
        enabled: false,
        days: [],
        fromTime: "",
        tillTime: "",
        price: ""
    },
    homeVisits: {
        enabled: false,
        days: [],
        fromTime: "",
        tillTime: "",
        price: ""
    },
    offering: []
};

const citiesWithAreas = {
    Lahore: ["DHA", "Model Town", "Johar Town", "Gulberg", "Cantt"],
    Karachi: ["Clifton", "Defence", "Gulshan", "Korangi", "Nazimabad"],
    Islamabad: ["F-6", "F-7", "G-10", "G-11", "Blue Area"],
};

const DrCompleteProfile = () => {
    const navigate = useNavigate();

    // Password visibility states
    const [dotsPass, setDotsPass] = useState('password');
    const [dotsPassConfirm, setDotsPassConfirm] = useState('password');
    const [eyePass, setEyePass] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);
    const [eyePassConfirm, setEyePassConfirm] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);

    // Form data states
    const [formData, setFormData] = useState(initialFormData);

    useEffect(() => {
        const savedEmail = localStorage.getItem("signupEmail");
        if (savedEmail) {
            setFormData(prev => ({ ...prev, email: savedEmail }));
            console.log(savedEmail);
        }
    }, []);

    // Password toggle handler
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
    };

    // Multi-select checkboxes for qualification/specialization/offering
    const handleMultiCheckbox = (field, value) => {
        setFormData(prev => {
            const arr = prev[field];
            const newArr = arr.includes(value)
                ? arr.filter(item => item !== value)
                : [...arr, value];
            return { ...prev, [field]: newArr };
        });
    };

    // Clinic Appointment/Consultation/Home Visit toggles and details
    const handleServiceToggle = (service) => {
        setFormData(prev => ({
            ...prev,
            [service]: {
                ...prev[service],
                enabled: !prev[service].enabled
            }
        }));
    };

    const handleServiceDayChange = (service, day) => {
        setFormData(prev => {
            const selectedDays = prev[service].days;
            const newDays = selectedDays.includes(day)
                ? selectedDays.filter(d => d !== day)
                : [...selectedDays, day];
            return { ...prev, [service]: { ...prev[service], days: newDays } };
        });
    };

    const handleServiceTimeChange = (service, field, value) => {
        setFormData(prev => ({
            ...prev,
            [service]: {
                ...prev[service],
                [field]: value
            }
        }));
    };

    const handleServicePriceChange = (service, value) => {
        setFormData(prev => ({
            ...prev,
            [service]: {
                ...prev[service],
                price: value
            }
        }));
    };

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Get user location
    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setFormData(prev => ({
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

    // Submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/api/v1/vets/signup`, formData, { withCredentials: true });
            if (res.data.status === 'success') {
                navigate('/home');
            } else {
                alert(res.data.message || 'Signup failed');
            }
        } catch (err) {
            alert(
                (err && err.response && err.response.data && err.response.data.message) ||
                (err && err.message) ||
                'Signup failed'
            );
        }
    };

    return (
        <div className="w-1/2 py-10 mx-auto">
            <div className='pt-10 pb-10 flex flex-col justify-center items-center'>
                <img src={logo} alt="" />
                <h1 className="font-montserrat-bold text-center mt-3 mb-0 leading-none">Join The Community Of Vets</h1>
            </div>
            <form onSubmit={handleSubmit}>
                {/* Name */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Name</label>
                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                </div>
                {/* Phone */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Phone</label>
                    <input type="tel" required name="phone" placeholder="0300 1234567" pattern="03[0-9]{2}[0-9]{7}" value={formData.phone} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                </div>
                {/* Password */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Password</label>
                        <input type={dotsPass} name="password" value={formData.password} onChange={handleChange} className={`input-custom font-montserrat-regular focus:outline-none block mx-auto ${dotsPass === 'text' ? 'text-black' : 'c-text-orange'}`} />
                        <div onClick={() => togglePassword(dotsPass, 1)}>{eyePass}</div>
                    </div>
                </div>
                {/* Confirm Password */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Confirm Password</label>
                        <input type={dotsPassConfirm} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={`input-custom font-montserrat-regular focus:outline-none block mx-auto ${dotsPassConfirm === 'text' ? 'text-black' : 'c-text-orange'}`} />
                        <div onClick={() => togglePassword(dotsPassConfirm, 2)}>{eyePassConfirm}</div>
                    </div>
                </div>
                {/* Address */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                </div>
                {/* City */}
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
                            <option value=""></option>
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
                <div className='mx-auto pb-6'>
                    <button type="button" onClick={getLocation} className='relative cursor-pointer w-1/2 flex justify-center items-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Get My Clinic Location</button>
                </div>
                {/* Qualification */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative input-custom">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Qualification</label>
                        {qualificationOptions.map((option, index) => (
                            <label key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={formData.qualification.includes(option)}
                                    onChange={() => handleMultiCheckbox("qualification", option)}
                                    className="accent-orange-500 cursor-pointer"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
                {/* Specialization */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative input-custom">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Specialization</label>
                        {specializationOptions.map((option, index) => (
                            <label key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={option + " Specialist"}
                                    checked={formData.specialization.includes(option + " Specialist")}
                                    onChange={() => handleMultiCheckbox("specialization", option + " Specialist")}
                                    className="accent-orange-500 cursor-pointer"
                                />
                                {option + " Specialist"}
                            </label>
                        ))}
                    </div>
                </div>
                {/* Clinic Appointment */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative input-custom">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>
                            Clinic Appointment
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.clinicAppointments.enabled}
                                onChange={() => handleServiceToggle("clinicAppointments")}
                                className="accent-orange-500 cursor-pointer"
                            />
                            I am willing to get Clinic Appointments
                        </label>
                        {formData.clinicAppointments.enabled && (
                            <div className="mt-4 space-y-4">
                                {/* Days */}
                                <div>
                                    <p className="font-semibold mb-2">Select Days:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {days.map((day, index) => (
                                            <label key={index} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    value={day}
                                                    checked={formData.clinicAppointments.days.includes(day)}
                                                    onChange={() => handleServiceDayChange("clinicAppointments", day)}
                                                    className="accent-orange-500 cursor-pointer"
                                                />
                                                {day}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {/* Time */}
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="block mb-1">From:</label>
                                        <select
                                            value={formData.clinicAppointments.fromTime}
                                            onChange={e => handleServiceTimeChange("clinicAppointments", "fromTime", e.target.value)}
                                            className="w-full border border-orange-500 rounded-md p-2"
                                        >
                                            <option value="">Select time</option>
                                            {timeOptions.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <label className="block mb-1">Till:</label>
                                        <select
                                            value={formData.clinicAppointments.tillTime}
                                            onChange={e => handleServiceTimeChange("clinicAppointments", "tillTime", e.target.value)}
                                            className="w-full border border-orange-500 rounded-md p-2"
                                        >
                                            <option value="">Select time</option>
                                            {timeOptions.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* Price */}
                                <div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.clinicAppointments.price}
                                        placeholder="Price per Appointment (Rs.)"
                                        onChange={e => handleServicePriceChange("clinicAppointments", e.target.value)}
                                        className="w-full border border-orange-500 rounded-md p-2"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Online Consultation */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative input-custom">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>
                            Online Consultation
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.onlineConsultation.enabled}
                                onChange={() => handleServiceToggle("onlineConsultation")}
                                className="accent-orange-500 cursor-pointer"
                            />
                            I am willing to give Online Consultation
                        </label>
                        {formData.onlineConsultation.enabled && (
                            <div className="mt-4 space-y-4">
                                {/* Days */}
                                <div>
                                    <p className="font-semibold mb-2">Select Days:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {days.map((day, index) => (
                                            <label key={index} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    value={day}
                                                    checked={formData.onlineConsultation.days.includes(day)}
                                                    onChange={() => handleServiceDayChange("onlineConsultation", day)}
                                                    className="accent-orange-500 cursor-pointer"
                                                />
                                                {day}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {/* Time */}
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="block mb-1">From:</label>
                                        <select
                                            value={formData.onlineConsultation.fromTime}
                                            onChange={e => handleServiceTimeChange("onlineConsultation", "fromTime", e.target.value)}
                                            className="w-full border border-orange-500 rounded-md p-2"
                                        >
                                            <option value="">Select time</option>
                                            {timeOptions.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <label className="block mb-1">Till:</label>
                                        <select
                                            value={formData.onlineConsultation.tillTime}
                                            onChange={e => handleServiceTimeChange("onlineConsultation", "tillTime", e.target.value)}
                                            className="w-full border border-orange-500 rounded-md p-2"
                                        >
                                            <option value="">Select time</option>
                                            {timeOptions.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* Price */}
                                <div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.onlineConsultation.price}
                                        placeholder="Price Per Session (Rs.)"
                                        onChange={e => handleServicePriceChange("onlineConsultation", e.target.value)}
                                        className="w-full border border-orange-500 rounded-md p-2"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Home Visits */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative input-custom">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>
                            Home Visits
                        </label>
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.homeVisits.enabled}
                                onChange={() => handleServiceToggle("homeVisits")}
                                className="accent-orange-500 cursor-pointer"
                            />
                            I am willing to give Home Visits
                        </label>
                        {formData.homeVisits.enabled && (
                            <div className="mt-4 space-y-4">
                                {/* Days */}
                                <div>
                                    <p className="font-semibold mb-2">Select Days:</p>
                                    <div className="grid grid-cols-2 gap-2">
                                        {days.map((day, index) => (
                                            <label key={index} className="flex items-center gap-2">
                                                <input
                                                    type="checkbox"
                                                    value={day}
                                                    checked={formData.homeVisits.days.includes(day)}
                                                    onChange={() => handleServiceDayChange("homeVisits", day)}
                                                    className="accent-orange-500 cursor-pointer"
                                                />
                                                {day}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                {/* Time */}
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <label className="block mb-1">From:</label>
                                        <select
                                            value={formData.homeVisits.fromTime}
                                            onChange={e => handleServiceTimeChange("homeVisits", "fromTime", e.target.value)}
                                            className="w-full border border-orange-500 rounded-md p-2"
                                        >
                                            <option value="">Select time</option>
                                            {timeOptions.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <label className="block mb-1">Till:</label>
                                        <select
                                            value={formData.homeVisits.tillTime}
                                            onChange={e => handleServiceTimeChange("homeVisits", "tillTime", e.target.value)}
                                            className="w-full border border-orange-500 rounded-md p-2"
                                        >
                                            <option value="">Select time</option>
                                            {timeOptions.map((time, index) => (
                                                <option key={index} value={time}>{time}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {/* Price */}
                                <div>
                                    <input
                                        type="number"
                                        min="0"
                                        value={formData.homeVisits.price}
                                        placeholder="Price Per Visit (Rs.)"
                                        onChange={e => handleServicePriceChange("homeVisits", e.target.value)}
                                        className="w-full border border-orange-500 rounded-md p-2"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* Offering */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <div className="relative input-custom">
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Offering</label>
                        {offeringOptions.map((option, index) => (
                            <label key={index} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={option}
                                    checked={formData.offering.includes(option)}
                                    onChange={() => handleMultiCheckbox("offering", option)}
                                    className="accent-orange-500 cursor-pointer"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                </div>
                {/* Experience */}
                <div className='relative mx-auto w-1/2 pb-6'>
                    <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Experience (Years)</label>
                    <input required type="number" name="experience" value={formData.experience} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                </div>
                {/* Submit */}
                <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center items-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Signup</button>
            </form>
        </div>
    );
};

export default DrCompleteProfile;