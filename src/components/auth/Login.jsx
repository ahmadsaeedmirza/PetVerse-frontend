import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;

const Login = ({ isVet = false }) => {

    const navigate = useNavigate();
    const [dots, setDots] = useState('password');
    const [eye, setEye] = useState(<IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const togglePassword = (dots) => {
        if (dots === "password") {
            setDots("text");
            setEye(
                <IoEye className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />
            );
        } else {
            setDots("password");
            setEye(
                <IoMdEyeOff className="c-text-orange absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-2xl" />
            );
        }
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res;
        try {
            console.log(formData);
            if (isVet) {
                res = await axios.post(`${API_URL}/api/v1/vets/login`, formData, { withCredentials: true });
            } else {
                res = await axios.post(`${API_URL}/api/v1/users/login`, formData, { withCredentials: true });
            }
            console.log(res.data);
            if (res.status === 200) {
                alert('Logged in successfully!');
                navigate("/home");
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
                    {isVet ?
                        <h1 className="font-montserrat-semibold text-center mb-0 leading-none">WELCOME VETS</h1> :
                        <h1 className="font-montserrat-semibold text-center mb-0 leading-none">WELCOME BACK</h1>}
                    <h1 className="font-montserrat-extrabold c-text-orange text-center text-4xl leading-none -mt-px">SIGNIN</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='relative mx-auto w-1/2 pb-6'>
                        <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange} className='input-custom font-montserrat-regular focus:outline-none block mx-auto' />
                    </div>
                    <div className='relative mx-auto w-1/2 pb-2'>
                        <div className="relative">
                            <label className='absolute -top-3 left-3 bg-white c-text-orange px-3'>Password</label>
                            <input type={dots} name="password" value={formData.password} onChange={handleChange} className={`input-custom font-montserrat-regular focus:outline-none block mx-auto ${dots === 'text' ? 'text-black' : 'c-text-orange'}`} />
                            <div onClick={() => togglePassword(dots)}>{eye}</div>
                        </div>
                    </div>
                    <div className="w-1/2 mx-auto pb-6">
                        <Link to={'/forgetPassword'} state={{ isVet }} className="font-montserrat-regular cursor-pointer">
                            Forget Password?
                        </Link>
                    </div>
                    <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center align-center p-3 c-orange text-white mx-auto border-0 rounded-lg'>Signin</button>
                </form>
            </div>
        </>
    )
}

export default Login
