import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const ForgetPassword = () => {

    const location = useLocation();
    const isVet = location.state?.isVet || false;
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res;
        try {
            if (isVet) {
                res = await axios.post(`${API_URL}/api/v1/vets/forgetPassword`, { email: email.trim() });
            } else {
                res = await axios.post(`${API_URL}/api/v1/users/forgetPassword`, { email: email.trim() });
            }
            console.log(res.data);
            if (res.data.status === 'success') {
                alert('link sent to mail!');
            } else {
                alert(res.data.message || 'Failed');
            }
        } catch (err) {
            alert(err.response?.data?.message || err.message || 'Something went wrong');
        }
    };

    return (
        <>
            <div className="w-1/2 pt-10 mx-auto">
                <div className='pt-10 pb-10'>
                    <h1 className="font-montserrat-semibold text-center text-3xl mb-0 leading-none">FORGET</h1>
                    <h1 className="font-montserrat-extrabold c-text-orange text-center text-4xl leading-none -mt-px">PASSWORD</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='relative mx-auto w-1/2 pb-2'>
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Email</label>
                        <input type="email" required name="email" value={email} onChange={(e) => setEmail(e.target.value)} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>
                    <div className="w-1/2 mx-auto pb-6">
                        <Link to={'/login'} className="font-montserrat-regular cursor-pointer flex flex-row">
                            <IoMdArrowRoundBack className="c-text-orange text-2xl block" /> <p className="pl-3">Back to Signin</p>
                        </Link>
                    </div>
                    <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Send Reset Link</button>
                </form>
            </div>
        </>
    )
}

export default ForgetPassword
