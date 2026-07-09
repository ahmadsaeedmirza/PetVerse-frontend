import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const ResetPassword = () => {

    const { type, token } = useParams();
    const navigate = useNavigate();
    const [dotsPass, setDotsPass] = useState('password');
    const [dotsPassConfirm, setDotsPassConfirm] = useState('password');
    const [eyePass, setEyePass] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);
    const [eyePassConfirm, setEyePassConfirm] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = `${API_URL}/api/v1/${type}s/resetPassword/${type}/${token}`;
        try {
            const res = await axios.patch(endpoint, { password, confirmPassword });
            console.log(res.data);
            if (res.data.status === 'success') {
                alert("Password changed successfully!")
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
                    <h1 className="font-montserrat-semibold text-center text-3xl mb-0 leading-none">RESET</h1>
                    <h1 className="font-montserrat-extrabold c-text-orange text-center text-4xl leading-none -mt-px">PASSWORD</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <div className="relative">
                            <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Password</label>
                            <input type={dotsPass} name="password" value={password} onChange={(e) => setPassword(e.target.value)} className={`input-custom font-montserrat-regular focus:outline-none block mx-auto ${dotsPass === 'text' ? 'text-black' : 'c-text-orange'}`} />
                            <div onClick={() => togglePassword(dotsPass, 1)}>{eyePass}</div>
                        </div>
                    </div>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <div className="relative">
                            <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Confirm Password</label>
                            <input type={dotsPassConfirm} name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={`input-custom font-montserrat-regular focus:outline-none block mx-auto ${dotsPassConfirm === 'text' ? 'text-black' : 'c-text-orange'}`} />
                            <div onClick={() => togglePassword(dotsPassConfirm, 2)}>{eyePassConfirm}</div>
                        </div>
                    </div>
                    <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Change Password</button>
                </form>
            </div>
        </>
    )
}

export default ResetPassword
