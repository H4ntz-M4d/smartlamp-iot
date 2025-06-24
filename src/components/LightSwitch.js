"use client";

import { useState, useEffect } from "react";

export default function LightSwitch({ isOn, setIsOn }) {
    const [glowIntensity, setGlowIntensity] = useState(0);

    // Efek untuk animasi glow
    useEffect(() => {
        if (isOn) {
            const interval = setInterval(() => {
                setGlowIntensity((prev) => Math.min(prev + 0.1, 1));
            }, 50);
            return () => clearInterval(interval);
        } else {
            setGlowIntensity(0);
        }
    }, [isOn]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
            {/* SVG Lampu - TIDAK DIUBAH BENTUK ASLINYA */}
            <div className="relative mb-12 transition-all duration-1000" style={{
                filter: isOn 
                    ? `drop-shadow(0 0 ${10 + glowIntensity * 20}px rgba(255, 230, 100, ${0.5 + glowIntensity * 0.5}))`
                    : 'none',
                transform: isOn ? "scale(1.05)" : "scale(1)"
            }}>
                <svg 
                    version="1.1" 
                    viewBox="0 0 511.996 511.996" 
                    className="w-48 h-48"
                >
                    <g id="SVGRepo_iconCarrier"> 
                        <path 
                            style={{fill: isOn ? "#F6BB42" : "#CCD1D9"}} 
                            d="M351.992,245.323c-5.891,0-10.656-4.765-10.656-10.655V192.66c0-5.89,4.766-10.663,10.656-10.663 s10.656,4.773,10.656,10.663v42.008C362.648,240.558,357.883,245.323,351.992,245.323z"
                        /> 
                        <rect 
                            x="244.558" 
                            y="197.726" 
                            style={{fill: isOn ? "#FFEEAA" : "#f7f7f7"}} 
                            width="21.336" 
                            height="314.27"
                        /> 
                        <path 
                            style={{fill: isOn ? "#F6BB42" : "#CCD1D9"}} 
                            d="M277.338,255.995h-42.68c-5.89,0-10.663-4.781-10.663-10.672c0-5.89,4.773-10.655,10.663-10.655 h42.68c5.875,0,10.655,4.766,10.655,10.655C287.993,251.214,283.213,255.995,277.338,255.995z"
                        /> 
                        <path 
                            style={{fill: isOn ? "#FFCE54" : "#F6BB42"}} 
                            d="M338.961,0H173.034c-1.874,65.577-66.373,212.145-66.373,212.145c33.187,0,82.936-16.32,82.936-16.32 s39.663,13.234,66.397,15.867c26.734-2.633,66.404-15.867,66.404-15.867s49.75,16.32,82.937,16.32 C405.335,212.144,340.836,65.577,338.961,0z"
                        /> 
                        <path 
                            style={{fill: isOn ? "#FFEE88" : "#FFCE54"}} 
                            d="M189.612,195.879c0.102-0.039,0.164-0.055,0.164-0.055s39.655,13.234,66.39,15.867 c25.766-2.531,63.482-14.906,66.232-15.812v-0.055C286.213,117.123,285.9,0,285.9,0h-59.819c0,0-0.312,117.123-36.484,195.824 L189.612,195.879z"
                        /> 
                        <path 
                            style={{fill: isOn ? "#F6BB42" : "#CCD1D9"}} 
                            d="M330.648,511.992H181.331c-5.891,0-10.671-4.781-10.671-10.672s4.78-10.656,10.671-10.656h149.317 c5.906,0,10.688,4.766,10.688,10.656S336.555,511.992,330.648,511.992z"
                        /> 
                    </g>
                </svg>
                
                {/* Efek cahaya */}
                {isOn && (
                    <>
                        <div className="absolute inset-x-0 -top-8 left-5 w-38 h-38 opacity-30 bg-yellow-200 rounded-full animate-pulse -z-10"></div>
                        <div
                            className="absolute inset-x-0 -top-8 left-5 w-38 h-38 opacity-20 bg-yellow-100 rounded-full -z-10"
                            style={{
                                animation: 'pulse 2s infinite',
                                animationDelay: '0.5s'
                            }}
                        ></div>
                    </>
                )}
            </div>

            {/* Toggle Switch */}
            <div
                className={`relative w-24 h-12 rounded-full p-1 cursor-pointer transition-all duration-500 ${isOn ? "bg-blue-500" : "bg-gray-400"
                    }`}
                onClick={() => setIsOn(!isOn)}
            >
                <div
                    className={`absolute w-10 h-10 rounded-full bg-white shadow-md transform transition-all duration-500 ${isOn ? "translate-x-12" : "translate-x-0"
                        }`}
                ></div>
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white">
                    OFF
                </span>
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white">
                    ON
                </span>
            </div>

            {/* Teks status */}
            <p className="mt-8 text-xl font-light text-gray-600 dark:text-gray-300">
                {isOn ? "Lampu Menyala" : "Lampu Mati"}
            </p>

            {/* Efek latar belakang */}
            {isOn && (
                <div
                    className="fixed inset-0 -z-20 bg-gradient-to-b from-yellow-50 to-white opacity-0 pointer-events-none"
                    style={{
                        opacity: glowIntensity * 0.3,
                        transition: "opacity 1s ease-out",
                    }}
                ></div>
            )}
        </div>
    );
}