"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { api } from "@/app/utili/axiosConfig";
import { singleProductType } from "@/app/types/productTypes";
import Loading from "@/app/components/Loading";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const { slug } = useParams();

  const [SingleProduct, setSingleProduct] = useState<singleProductType | null>(
    null
  );

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const response = await api.get(`/template/${slug}`);
        setSingleProduct(response.data?.payload?.singleProduct);
      } catch (error: any) {
        console.log(error.response?.data?.message);
      }
    };

    fetchSingleProduct();
  }, [slug]);

  console.log(SingleProduct);

  if (!SingleProduct) {
    return <Loading />;
  }

  return (

    <>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-lg bg-white p-4">
              <Link  href="https://unishop-frontend.vercel.app" target="_blank" >
              <Image
                src={SingleProduct.images[0]}
                alt={SingleProduct.title}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
              </Link>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                {SingleProduct.title}
              </h2>

               <h2 className="font-bold mb-2">Key features:</h2>
               <p className="font-semibold opacity-[0.8]">super fast & smooth</p>
               <p className="font-semibold opacity-[0.8]">20+ reusable components</p>
               <p className="font-semibold opacity-[0.8]">responsive and beautiful layout</p>
               <p className="font-semibold opacity-[0.8]">organized code and use of best practise</p>
               <p></p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href=""
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  start using it
                </Link>
                
                <Link
                  href="https://unishop-frontend.vercel.app/"
                  target="_blank"
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    ></path>
                  </svg>
                  See Live
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}
