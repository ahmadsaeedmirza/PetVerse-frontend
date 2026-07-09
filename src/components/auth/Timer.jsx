import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const Timer = ({ expiresAt, otp, email }) => {
    const [time, setTime] = useState(0);
    const timerRef = useRef(null);

    // Format time as MM:SS
    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    // Start timer with given seconds
    const startTimer = (seconds) => {
        if (timerRef.current) clearInterval(timerRef.current);
        setTime(seconds);
        timerRef.current = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    // Start timer based on initial expiresAt prop
    useEffect(() => {
        if (expiresAt) {
            const now = Date.now();
            const remaining = Math.max(Math.floor((expiresAt - now) / 1000), 0);
            startTimer(remaining);
        }
        return () => clearInterval(timerRef.current);
    }, [expiresAt]);

    // Resend OTP and restart timer
    const handleResend = async () => {
        try {
            const res = await axios.post(`${API_URL}/api/v1/users/resend-otp`, { email });
            if (res.status === 200) {
                localStorage.setItem("expiresAt", res.data.expiresAt);
                console.log("OTP sent successfully");

                // Restart timer with new expiry
                const remaining = Math.max(
                    Math.floor((res.data.expiresAt - Date.now()) / 1000),
                    0
                );
                startTimer(remaining);
            } else {
                alert(res.data.message || "Signup failed");
            }
        } catch (err) {
            alert(err);
        }
    };

    return (
        <div>
            <h1 className="font-montserrat-regular text-center pt-5">
                OTP expires in -{" "}
                <span className="c-text-orange">{formatTime(time)}</span>
            </h1>
            <button
                onClick={handleResend}
                className="pt-2 c-link-blue underline cursor-pointer"
                disabled={time > 0} // Only enable resend when timer hits 0
            >
                Resend Code
            </button>
        </div>
    );
};

export default Timer;
