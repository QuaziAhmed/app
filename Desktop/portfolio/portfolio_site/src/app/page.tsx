import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar.jsx"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] container ">
      <Navbar/>
      <div className="containermx-auto px-12 py-4">
       <HeroSection/>
      </div>
    </main>
  );
}
