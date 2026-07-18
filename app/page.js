
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MandalCard from "./components/MandalCard";
export default function Home() {
  const mandals = [
    {
      name: "Lalbaugcha Raja",
      location: "Lalbaug, Mumbai"
    },



    {
      name: "GSB Seva Mandal",
      location: "King's Circle, Mumbai"
    },


    {
      name: "Andhericha Raja",
      location: "Andheri, Mumbai"
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
            />
          );
        })}
      </div>



    </div>
  );
}