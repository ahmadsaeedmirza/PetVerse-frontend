import { IoIosArrowDropdown } from "react-icons/io";
import NoPet from '../../assets/images/petPage/pet-logo.svg'
import Edit from '../../assets/images/myAccount/edit.png'
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const AddPets = () => {

    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [petImage, setPetImage] = useState(NoPet);
    const [formData, setFormData] = useState({
        name: "",
        specie: "",
        breed: "",
        age: "",
        gender: "",
        medicalHistory: "",
    });

    // Handle form field changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/api/v1/users/uploadPet`, formData, {
                withCredentials: true
            });
            console.log(res.data);
            if (res.data.status === 'success') {
                console.log(res);
                navigate('/pets');
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
                <form onSubmit={handleSubmit}>
                    <div className="mx-auto relative rounded-full h-[150px] w-[150px] mb-10">
                        <img
                            src={typeof petImage === "string" ? petImage : URL.createObjectURL(petImage)}
                            alt="Pet"
                            className="h-32 w-32 object-cover rounded-full border mb-2"
                            style={{ objectFit: 'cover' }}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={e => {
                                if (e.target.files && e.target.files[0]) {
                                    setPetImage(e.target.files[0]);
                                }
                            }}
                        />

                        <img
                            src={Edit}
                            alt=""
                            className="absolute bottom-0 right-0 cursor-pointer h-5 w-auto"
                            onClick={() => fileInputRef.current && fileInputRef.current.click()}
                        />

                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Pet Name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>

                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Specie</label>
                        <input type='text' name="specie" value={formData.specie} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Breed</label>
                        <input type='text' name="breed" value={formData.breed} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Age (Years)</label>
                        <input type='number' name="age" value={formData.age} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <div className="relative">
                            <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>
                                Gender
                            </label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className='input-custom appearance-none font-montserrat-regular focus:outline-none block mx-auto pr-10'
                            >
                                <option value=""></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Neutral">Neutral</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700">
                                <IoIosArrowDropdown className="text-2xl c-text-orange" />
                            </div>
                        </div>
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Medical History</label>
                        <textarea type='text' name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>

                    <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center items-center p-3 c-orange text-white mb-6 mx-auto border-0 rounded-lg'>Add Pet</button>
                </form>
            </div>
        </>
    )
}

export default AddPets
