

import React from 'react';
import Image from 'next/image';

const HeroTwo = () => {
  return (
    <div className="min-h-auto bg-indigo-100 p-4 sm:p-6 lg:p-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto items-center lg:items-start">
        {/* Left Side */}
        <div className="w-full lg:w-2/3 space-y-6 lg:space-y-8 text-center lg:text-left">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 lg:mb-8">
              Run your business from one dashboard
            </h1>
            
            <div className="space-y-4 lg:space-y-6">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">CRM solution</h2>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">Custom automations</h2>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">Data & analytics</h2>
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-semibold">Export Code</h2>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-full mt-4 hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Dashboard */}
        <div className="w-full sm:w-4/5 lg:w-1/3 bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <div className="relative w-full">
            <Image 
              src="/demo.jpg" 
              width={800}
              height={800}
              alt="Dashboard demo"
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;