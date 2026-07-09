import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    { name: "Mon", online: 5, home: 3, clinic: 2 },
    { name: "Tue", online: 3, home: 2, clinic: 3 },
    { name: "Wed", online: 6, home: 2, clinic: 3 },
    { name: "Thu", online: 4, home: 3, clinic: 3 },
    { name: "Fri", online: 5, home: 2, clinic: 3 },
    { name: "Sat", online: 9, home: 3, clinic: 3 },
    { name: "Sun", online: 3, home: 2, clinic: 3 },
];

const Graph = () => {
    return (
        <div className="w-full h-[350px] p-4 rounded-2xl shadow-md bg-white">
            <h2 className="text-lg font-semibold mb-1">Patients</h2>
            <p className="text-sm text-gray-500 mb-4">Week graph of patients</p>

            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data} barGap={4}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="online" fill="#E74C3C" name="Online" />
                    <Bar dataKey="home" fill="#F39C12" name="Home Visit" />
                    <Bar dataKey="clinic" fill="#27AE60" name="Clinic Visit" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Graph