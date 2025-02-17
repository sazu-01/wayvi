
'use client'
import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../lib/hook';
import Image from 'next/image';
import Link from 'next/link';
import { Layout, Store, UtensilsCrossed } from 'lucide-react';
import Loading from '../components/Loading';

export default function Templates() {
  const { templates } = useAppSelector((state) => state.templates);

  
  
  const restaurantWebsite = templates?.filter((template) => 
    template.category.name === "restaurant"
  );
  
  const ecommerceWebsite = templates?.filter((template) => 
    template.category.name === "e-commerce"
  );
  
  const [website, setWebsite] = useState(ecommerceWebsite);
  const [activeCategory, setActiveCategory] = useState('e-commerce');

  useEffect(() => {
    if (ecommerceWebsite) {
      setWebsite(ecommerceWebsite);
    }
  }, [templates]);
 
  if (!templates) {
    return <Loading />
  }

  const handleCategoryChange = (category: any, websites: any) => {
    setActiveCategory(category);
    setWebsite(websites);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Website Templates</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 space-y-2">
            <button 
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
                activeCategory === 'e-commerce' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
              onClick={() => handleCategoryChange('e-commerce', ecommerceWebsite)}
            >
              <Store className="w-5 h-5" />
              <span className="font-medium">E-commerce</span>
              <span className="ml-auto text-sm">
                {ecommerceWebsite?.length || 0}
              </span>
            </button>
            
            <button 
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
                activeCategory === 'restaurant' 
                  ? 'bg-blue-500 text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-blue-50'
              }`}
              onClick={() => handleCategoryChange('restaurant', restaurantWebsite)}
            >
              <UtensilsCrossed className="w-5 h-5" />
              <span className="font-medium">Restaurant</span>
              <span className="ml-auto text-sm">
                {restaurantWebsite?.length || 0}
              </span>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {website?.map((web) => (
                <Link 
                  href={web?.link ? `/product/${web.slug}` : `/`}
                  className="group block"
                  key={web._id}
                >
                  <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                    <div className="relative aspect-video">
                      {web.images?.length > 0 ? (
                        <Image 
                          src={web.images[0]} 
                          alt={web.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <Layout className="w-8 h-8 text-gray-400" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-gray-900 mb-1">
                        {web.title}
                      </h2>
                      <p className="text-sm text-gray-500">
                        Version {web.version}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}