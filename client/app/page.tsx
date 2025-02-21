'use client'
import Hero from "./layouts/Hero";
import HeroTwo from "./layouts/HeroTwo"
import { useAppSelector } from "./lib/hook";
import MyStore from "./store/layout";

export default function Home() {
  const { isLoggedIn } = useAppSelector((state)=> state.auth);

  return (
    <>
   { isLoggedIn ? <MyStore /> : 
   <><Hero />
    <HeroTwo /></>
}
     
    </>
  );
}
