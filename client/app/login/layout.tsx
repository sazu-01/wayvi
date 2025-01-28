
'use client';

import React, {useState} from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hook';
import { login } from '../lib/features/authSlice';
import { FormEvent } from 'react';
import Link from 'next/link'
export default function layout() {

  //state for form input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



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
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md  border border-black/10 bg-white px-3 py-1.5 text-base
                   text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 
                   focus:outline-3 focus:-outline-offset-3 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border border-black/10 bg-white px-3 py-1.5 text-base 
                  text-gray-900 outline-1 300 placeholder:text-gray-400 
                  focus:outline-3 focus:-outline-offset-3 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account?
            <Link href="/register" className="font-semibold text-indigo-600 hover:text-indigo-500">
             please register
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
