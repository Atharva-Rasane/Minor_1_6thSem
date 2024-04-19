import Image from "next/image";
import Sidebar from "@/components/common/Sidebar";
import Profile from "@/components/pages.jsx/profile";
import RegisterForm from "@/components/forms/RegisterForm";
import FormTemplate from "@/components/forms/FormTemplate";
import Credits from "@/components/pages.jsx/Credits";

export default function Home() {
  return (
    <>
      <Sidebar></Sidebar>
      <Credits></Credits>
    </>
  );
}
