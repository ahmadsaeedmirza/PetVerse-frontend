import OTPInput from "react-otp-input";
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";
import Timer from './Timer'
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const OtpVerification = () => {

    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const expiresAt = Number(localStorage.getItem("expiresAt"));

    useEffect(() => {
        const savedEmail = localStorage.getItem("signupEmail");
        const role = localStorage.getItem("role");
        if (role) {
            setRole(role);
        }
        if (savedEmail) {
            setEmail(savedEmail);
        }
    }, []);

    const handleChange = (value) => {
        setOtp(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let res;
        try {
            if (role === 'vet') {
                res = await axios.post(`${API_URL}/api/v1/users/verify-otp`, { otp, email });
            } else {
                res = await axios.post(`${API_URL}/api/v1/vets/verify-otp`, { otp, email });
            }
            console.log(res.data);
            if (res.data.status === 'success') {
                console.log(res);
                if (role === 'vet') {
                    navigate('/signup/vet');
                } else {
                    navigate('/signup');
                }
            } else {
                alert(res.data.message || 'Signup failed');
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <>
            <div className="otp-verification-container mx-auto w-1/2 pt-10">
                <div className="pt-10 pb-10">
                    <p className="text-center font-montserrat-medium text-2xl">Check Your Email</p>
                    <p className="text-center font-montserrat-bold text-4xl">We Send You <span className='c-text-orange font-montserrat-bold text-4xl'>6 Digit OTP</span> on Email</p>
                </div>
                <div className="w-1/2 mx-auto">
                    <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                        <OTPInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={6}
                            inputType="number"
                            className="font-montserrat-bold"
                            renderInput={(props) => <input {...props} />}
                            inputStyle={{
                                width: "2.5rem",
                                height: "3rem",
                                fontSize: "2rem",
                                border: "none",
                                borderBottom: "2px solid #F05147",
                                textAlign: "center",
                                outline: "none",
                                fontFamily: 'Montserrat',
                                fontWeight: '700',
                                margin: '0 auto'
                            }}
                            focusStyle={{
                                borderBottom: "2px solid #F05147",
                            }}
                        />

                        <Timer expiresAt={expiresAt} otp={otp} email={email} />
                        <button type="submit" className='relative cursor-pointer w-1/2 flex justify-center align-center mt-3 p-3 c-orange text-white mx-auto border-0 rounded-lg'>Verify OTP</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default OtpVerification
