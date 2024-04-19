import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/sections/Hero";
import FoodListing from "@/components/sections/FoodListing";
import CardsIndex from "@/components/sections/CardsIndex";
import Footer from "@/components/common/Footer";
import ItemSingle from "@/components/pages.jsx/ItemSingle";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <ItemSingle></ItemSingle>
      <Footer></Footer>
    </>
  );
}
