import React from 'react';

export default function RiskScore({ value = 50 }) {
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
                <span className="text-[10px] text-gray-500">A</span>
                <span className="text-[10px] text-gray-500">C</span>
            </div>
            <div className="relative h-5 bg-gradient-to-r from-green-500 to-yellow-500 rounded-md grow">
                <div
                    className="absolute top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white border-yellow-400 rounded-full grow-lg"
                    style={{ left: `${value}%` }}
                />
            </div>
        </div>
    );
}
