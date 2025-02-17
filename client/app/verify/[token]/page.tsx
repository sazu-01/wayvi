"use client";

import React, { useCallback, useState } from "react";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { api } from "@/app/utili/axiosConfig";
import Link from "next/link";


export default function Token() {
  const { token } = useParams();

  const [status, setStatus] = useState("verifying");

  const handleCompleteRegister = useCallback(async () => {
    try {
      const response = await api.post(`/users/complete-register`, { token });
      if (response.data.success) {
        setStatus("success");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  }, [token]);

  useEffect(() => {
    handleCompleteRegister();
  }, [handleCompleteRegister]);

  return (
    <div className="container mx-auto">
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-8">
          {status === "verifying" && (
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent mb-6" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Verifying your email...</h3>
              <p className="text-gray-600">
                Please wait while we confirm your email address
              </p>
            </div>
          )}
          
          {status === "success" && (
            <div className="text-center">
              <div className="mb-6">
                <svg 
                  className="w-12 h-12 text-green-500 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-500 mb-3">
                Email Verified Successfully!
              </h3>
              <p className="text-gray-600 mb-6">
                Your email has been verified successfully.
              </p>
              <Link
                href="/login"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Continue to Login
              </Link>
            </div>
          )}
          
          {status === "error" && (
            <div className="text-center">
              <div className="mb-6">
                <svg 
                  className="w-12 h-12 text-red-500 mx-auto"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-red-500 mb-3">
                Verification Failed
              </h3>
              <p className="text-gray-600 mb-6">
                We couldn&apos;t verify your email. Please try again or contact support.
              </p>
              <Link
                href="/register"
                className="inline-block border border-blue-600 text-blue-600 px-6 py-2 rounded-md hover:bg-blue-50 transition-colors"
              >
                Back to Registration
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
</div>
  );
}