import Button from "./components/Button";
import Hero from "./components/Hero";
export default function Home() {
  return (  
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 m-4 text-center " >
      <Hero/>
      <Button/>
      </div>
  );
}