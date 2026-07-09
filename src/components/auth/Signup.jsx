import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Google from "../../assets/images/google.svg";
const API_URL = import.meta.env.VITE_API_URL;

const Signup = ({ isVet = false }) => {

    const navigate = useNavigate();
    const [dotsPass, setDotsPass] = useState('password');
    const [dotsPassConfirm, setDotsPassConfirm] = useState('password');
    const [eyePass, setEyePass] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);
    const [eyePassConfirm, setEyePassConfirm] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email.trim()) {
            return alert("Please enter your email");
        }

        let res;
        try {
            if (!isVet) {
                res = await axios.post(`${API_URL}/api/v1/users/signup-otp`, { email: email.trim() });
            } else {
                res = await axios.post(`${API_URL}/api/v1/vets/signup-otp`, { email: email.trim() });
            }
            console.log(res.data);
            if (res.status === 200) {
                // Save email to localStorage so OTP page can access it
                localStorage.setItem("signupEmail", email);
                localStorage.setItem("expiresAt", res.data.expiresAt);
                localStorage.setItem("role", isVet ? "vet" : "user");
                console.log(res.data.expiresAt);
                navigate("/otp-verification");
            } else {
                alert(res.data.message || 'Signup failed');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <div className="w-1/2 pt-10 mx-auto">
                <div className='pt-10 pb-10'>
                    {isVet ? <h1 className="font-montserrat-semibold text-center mb-0 leading-none">WELCOME VETS</h1> :
                        <h1 className="font-montserrat-semibold text-center text-3xl mb-0 leading-none">WELCOME</h1>
                    }
                    <h1 className="font-montserrat-extrabold c-text-orange text-center text-4xl leading-none -mt-px">SIGNUP</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Email</label>
                        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>
                    <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Send OTP</button>
                </form>
                <div className="relative my-8 w-1/2 mx-auto">
                    <div className="border-t border-gray-300"></div>
                    <h3 className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-3 text-gray-500 text-sm font-montserrat-regular">
                        Or Signup With
                    </h3>
                </div>
                <button className='relative cursor-pointer w-1/2 flex justify-center align-center p-3 c-light-gray text-black mx-auto border-0 rounded-lg'> <img src={Google} className="w-[24px] h-auto mx-3" alt="" /> Continue with Google</button>

            </div>
        </>
    )
}

export default Signup
