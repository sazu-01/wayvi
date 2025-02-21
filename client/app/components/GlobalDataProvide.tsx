

'use client';

import { useAppDispatch, useAppSelector } from "../lib/hook";
import { RootState } from "../lib/store";
import { useEffect } from "react";
import { getProduct } from "../lib/features/templateSlice";
import { getCurrentUser } from "../lib/features/authSlice";
export default function GlobalDataProvide({
    children,
  }: {
    children: React.ReactNode
  }) {
    const dispatch = useAppDispatch()
    const { isLoggedIn } = useAppSelector((state: RootState) => state.auth)
    
    useEffect(() => {
      dispatch(getProduct())
      
      const isLoggedInLocal = localStorage.getItem('isLoggedIn') === 'true'
      if (isLoggedInLocal && !isLoggedIn) {
        dispatch(getCurrentUser())
      }
    }, [dispatch, isLoggedIn])
  
    return <>{children}</>
  }