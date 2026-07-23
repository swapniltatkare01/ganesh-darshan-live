
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MandalCard from "./components/MandalCard";
export default function Home() {
  const mandals = [
    {
      name: "Lalbaugcha Raja",
      location: "Lalbaug, Mumbai",
      image :"/images/lalbaug_cha_raja.jpg"
    },



    {
      name: "GSB Seva Mandal",
      location: "King's Circle, Mumbai",
      image : "/images/gsb_seva_mandal.jpg"
    },


    {
      name: "Andhericha Raja",
      location: "Andheri, Mumbai",
      image : "/images/Andhericha-Raja.webp"
    }
  ];

  return (

    <div >
      <Navbar />
      <Hero />
      <div className="grid grid-cols-3 gap-6">
        {mandals.map((mandal) => {
          return (
            <MandalCard
              key={mandal.name}
              name={mandal.name}
              location={mandal.location}
              image = {mandal.image}
            />
          );
        })}
      </div>



    </div>
  );
}