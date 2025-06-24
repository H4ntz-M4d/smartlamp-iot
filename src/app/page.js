"use client";

import LightSwitch from '@/components/LightSwitch';
import LightIntensityCard from '@/components/LightIntensityCard';
import { useState } from 'react';

export default function Home() {
  const [isLightOn, setIsLightOn] = useState(false);

  return (
    <div className="min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-12 text-gray-300">Light Control Dashboard</h1>
        
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Komponen Lampu */}
          <div className="w-full lg:w-1/2">
            <LightSwitch isOn={isLightOn} setIsOn={setIsLightOn} />
          </div>
          
          {/* Komponen Card Intensitas Cahaya */}
          <div className="w-full lg:w-1/2">
            <LightIntensityCard isLightOn={isLightOn} />
          </div>
        </div>
      </div>
    </div>
  );
}