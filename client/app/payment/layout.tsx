
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useAppSelector } from '../lib/hook';
import { api } from '../utili/axiosConfig';


export default function PaymentLayout() {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  // Payment methods data
  const paymentMethods = [
    { id: 'bkash', name: 'bKash Payment Method', description: 'Fast and secure mobile payment', image: '/bkash.png', bgColor: 'bg-pink-100' },
    { id: 'nagad', name: 'Nagad Payment Method', description: 'Fast and secure mobile payment', image: '/nagad.png', bgColor: 'bg-orange-100' },
    { id: 'online', name: 'Online Payment Method', description: 'Credit or debit card payment', image: '/visa.png', bgColor: 'bg-blue-100' }
  ];

  const handlePaymentMethodSelect = (methodId : any) => {
    setSelectedMethod(methodId);
  };

  const handleSubmitPayment = async () => {
    // Reset previous messages
    setMessage({ text: '', type: '' });
    
    // Validate if payment method is selected
    if (!selectedMethod) {
      setMessage({ text: 'Please select a payment method', type: 'error' });
      return;
    }

    // Validate if user is logged in
    if (!isLoggedIn || !user?.email) {
      setMessage({ text: 'Please log in to continue with payment', type: 'error' });
      return;
    }
    
    setIsLoading(true);
    try {
      // Create the payload with user email and selected payment method
      const payload = {
        email: user.email,
        paymentMethod: selectedMethod
      };
      
      // Make the POST request to your backend API
      const response = await api.post('/payment/create-payment', payload);
      
      if (response.status === 200) {
        setMessage({ text: 'Payment initiated successfully, we will contact you soon', type: 'success' });
        // You can add redirect logic here if needed
      } else {
        setMessage({ text:'Failed to process payment', type: 'error' });
      }
    } catch (error) {
      console.error('Payment submission error:', error);
      setMessage({ text: 'An error occurred during payment processing', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 m-12 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Select Payment Method</h2>
        
        {/* Show error/success message if any */}
        {message.text && (
          <div className={`mb-4 p-3 rounded ${message.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
            {message.text}
          </div>
        )}
        
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div 
              key={method.id}
              className={`p-4 border rounded-lg cursor-pointer transition-colors flex items-center ${
                selectedMethod === method.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-blue-50'
              }`}
              onClick={() => handlePaymentMethodSelect(method.id)}
            >
              <div className={`${method.bgColor} p-2 rounded-full mr-4`}>
                
                  <Image src={method.image} alt={method.name} width={30} height={30} />
                
              </div>
              <div>
                <p className="font-medium text-gray-800">{method.name}</p>
                <p className="text-sm text-gray-500">{method.description}</p>
              </div>
              {selectedMethod === method.id && (
                <div className="ml-auto">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-6">
          <button 
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
              isLoading 
                ? 'bg-gray-400 text-gray-100 cursor-not-allowed' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            onClick={handleSubmitPayment}
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Continue to Payment'}
          </button>
        </div>
        
        {!isLoggedIn && (
          <div className="mt-4 text-center text-sm text-red-500">
            You need to be logged in to complete payment
          </div>
        )}
      </div>
    </div>
  );
}