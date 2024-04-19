import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import Profile from "@/components/pages.jsx/profile";
import RegisterForm from "@/components/forms/RegisterForm";
import FormTemplate from "@/components/forms/FormTemplate";
import RewardListing from "@/components/sections/RewardsListing";


export default function Home() {
  return (
    <>
      <Sidebar></Sidebar>
      <RewardListing></RewardListing>
    </>
  );
}
