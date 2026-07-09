import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const SchedulingComp = ({ heading }) => {
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

    const [availability, setAvailability] = useState(
        days.map(day => ({
            day,
            available: false,
            slots: [{ start: "", end: "" }] // initially one slot
        }))
    );

    // Handle checkbox toggle
    const toggleAvailability = (index) => {
        const newData = [...availability];
        newData[index].available = !newData[index].available;
        setAvailability(newData);
    };

    // Handle time changes
    const handleTimeChange = (dayIndex, slotIndex, field, value) => {
        const newData = [...availability];
        newData[dayIndex].slots[slotIndex][field] = value;
        setAvailability(newData);
    };

    // Add a new slot
    const addSlot = (dayIndex) => {
        const newData = [...availability];
        newData[dayIndex].slots.push({ start: "", end: "" });
        setAvailability(newData);
    };

    // Remove a slot
    const removeSlot = (dayIndex, slotIndex) => {
        const newData = [...availability];
        newData[dayIndex].slots.splice(slotIndex, 1);
        setAvailability(newData);
    };

    // Save data to API
    const handleSave = () => {
        // Filter only available days
        const payload = availability
            .filter(day => day.available)
            .map(day => ({
                day: day.day,
                slots: day.slots.filter(slot => slot.start && slot.end)
            }));

        console.log("Sending data:", payload);

        // Example API call (replace with real endpoint)
        fetch("/api/saveAvailability", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                alert("Availability saved successfully!");
                console.log("Response:", data);
            })
            .catch(err => console.error("Error:", err));
    };

    return (
        <div className="p-5">
            <h2 className="font-montserrat-bold text-2xl">{heading}</h2>

            {availability.map((day, dayIndex) => (
                <div key={day.day} className="flex flex-wrap">
                    <label className="flex items-center gap-2 py-3 w-1/2">
                        <input
                            type="checkbox"
                            checked={day.available}
                            onChange={() => toggleAvailability(dayIndex)}
                            className="w-5 h-5 accent-orange-500 mr-2 font-white"
                        />
                        <span className="font-montserrat-light text-xl w-1/2 border p-3 px-5 rounded">{day.day}</span>
                    </label>

                    {day.available &&
                        day.slots.map((slot, slotIndex) => (
                            <div key={slotIndex} className={`flex gap-2 items-center w-1/2 py-3 ${slotIndex > 0 ? "ml-[50%]" : ""
                                }`} >
                                <select
                                    className="font-montserrat-light border p-3 px-5 rounded w-1/3 text-center"
                                    value={slot.start}
                                    onChange={(e) =>
                                        handleTimeChange(dayIndex, slotIndex, "start", e.target.value)
                                    }
                                >
                                    <option value="">Opening</option>
                                    {timeOptions.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>

                                <select
                                    className="font-montserrat-light border p-3 px-5 rounded w-1/3 text-center"
                                    value={slot.end}
                                    onChange={(e) =>
                                        handleTimeChange(dayIndex, slotIndex, "end", e.target.value)
                                    }
                                >
                                    <option value="">Closing</option>
                                    {timeOptions.map((time) => (
                                        <option key={time} value={time}>{time}</option>
                                    ))}
                                </select>

                                {slotIndex === day.slots.length - 1 && (
                                    <button
                                        className="bg-red-500 text-white rounded p-3"
                                        onClick={() => addSlot(dayIndex)}
                                    >
                                        <FaPlus style={{ color: "white", fontSize: '24px' }} />
                                    </button>
                                )}

                                {slotIndex > 0 && (
                                    <button
                                        className="bg-black text-white rounded p-3"
                                        onClick={() => removeSlot(dayIndex, slotIndex)}
                                    >
                                        <RxCross2 style={{ color: "white", fontSize: '24px' }} />
                                    </button>
                                )}
                            </div>
                        ))}
                </div>
            ))
            }

            <button
                onClick={handleSave}
                className="cursor-pointer p-3 c-orange text-white mx-auto border-0 rounded-lg font-montserrat-semibold my-3"
            >
                Save Changes
            </button>
        </div >
    );
};

export default SchedulingComp;
