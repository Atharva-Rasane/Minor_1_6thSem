import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import FoodListing from "@/components/sections/FoodListing";
import CardsIndex from "@/components/sections/CardsIndex";
import Footer from "@/components/common/Footer";
import SignIn from "@/components/pages.jsx/SignIn";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <SignIn></SignIn>
      <Footer></Footer>
    </>
  );
}
