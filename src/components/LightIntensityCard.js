"use client";

import { useEffect, useState } from "react";

export default function LightIntensityCard({ isLightOn }) {
    const [intensity, setIntensity] = useState(0);
    const [history, setHistory] = useState([]);

    // Simulasi perubahan intensitas cahaya
    useEffect(() => {
        if (!isLightOn) {
            setIntensity(0);
            return;
        }

        const interval = setInterval(() => {
            // Nilai acak antara 80-100 ketika lampu menyala
            const randomValue = Math.floor(Math.random() * 21) + 80;
            setIntensity(randomValue);

            // Simpan history (maksimal 5 data)
            setHistory((prev) => {
                const newHistory = [...prev, randomValue];
                return newHistory.slice(-5);
            });
        }, 2000);

        return () => clearInterval(interval);
    }, [isLightOn]);

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 w-full max-w-md border border-gray-100">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Light Intensity Dashboard
            </h2>

            {/* Display utama */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <div
                        className={`w-4 h-4 rounded-full mr-2 ${isLightOn ? "bg-yellow-400 animate-pulse" : "bg-gray-300"
                            }`}
                    ></div>
                    <span className="text-sm font-medium text-gray-600">
                        {isLightOn ? "Active" : "Inactive"}
                    </span>
                </div>

                <div className="text-3xl font-bold text-gray-800">
                    {intensity}
                    <span className="text-lg text-gray-500">%</span>
                </div>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                <div
                    className="bg-gradient-to-r from-yellow-300 to-yellow-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${intensity}%` }}
                ></div>
            </div>

            {/* History */}
            <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">
                    RECENT HISTORY
                </h3>
                <div className="flex justify-between">
                    {history.length > 0 ? (
                        history.map((value, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="text-xs text-gray-500">
                                    {index === history.length - 1
                                        ? "Now"
                                        : `-${history.length - index}s`}
                                </div>
                                <div className="text-sm font-medium text-gray-700 mt-1">
                                    {value}%
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-sm text-gray-400 py-2">No data available</div>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-gray-500">
                    Last updated: {new Date().toLocaleTimeString()}
                </span>
                <span
                    className={`px-2 py-1 rounded text-xs font-medium ${intensity > 90
                            ? "bg-red-100 text-red-800"
                            : intensity > 70
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                        }`}
                >
                    {intensity > 90 ? "High" : intensity > 70 ? "Medium" : "Low"}
                </span>
            </div>
        </div>
    );
}
