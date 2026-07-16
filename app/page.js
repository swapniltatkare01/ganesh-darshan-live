
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MandalCard from "./components/MandalCard";
export default function Home() {
  return (

    <div >
      <Navbar />
      <Hero />
      <MandalCard
  name="Lalbaugcha Raja"
  location="Lalbaug, Mumbai"
/>

<MandalCard
  name="GSB Seva Mandal"
  location="King's Circle, Mumbai"
/>

<MandalCard
  name="Andhericha Raja"
  location="Andheri, Mumbai"
/>

    </div>
  );
}