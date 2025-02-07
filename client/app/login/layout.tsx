
'use client';

import React, {useState} from 'react'
import { useAppDispatch } from '../lib/hook';
import { login } from '../lib/features/authSlice';
import { FormEvent } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
export default function layout() {

  //state for form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const dispatch = useAppDispatch();


  //handle form submission
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const resultAction = await dispatch(login({ email, password }));
      if(login.fulfilled.match(resultAction)){
        window.location.reload();
      }else if (login.rejected.match(resultAction)) {
        console.log(resultAction.payload);      }
    } catch (error:any) {
      console.log(error.message);
      
    }
  }

  return (
    <>
<div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-50 flex flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mx-auto w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="space-y-1 mb-8">
            <div className="flex justify-center">
              <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-center text-gray-900 mt-4">
              Welcome back
            </h2>
            <p className="text-sm text-center text-gray-500">
              Sign in to your account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 block mb-1">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 ease-in-out"
                    placeholder="you@example.com"
                    required
                  />
                  <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-12 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition-all duration-200 ease-in-out"
                    placeholder="••••••••"
                    required
                  />
                  <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                'Sign in'
              )}
            </button>

            <div className="text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <Link
                href="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200"
              >
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}
