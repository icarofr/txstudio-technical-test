import React from 'react';

export default function FeatureCard({ icon, bgColor, title, description }) {
    return (
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <div className={`w-12 h-12 rounded-md ${bgColor} flex items-center justify-center mb-6`}>
                {icon}
            </div>

            <h3 className="text-base font-bold text-gray-900 mb-2">
                {title}
            </h3>

            <p className="text-gray-500 text-xs/relaxed">
                {description}
            </p>
        </div>
    );
}
