import Navbar from "../common/Navbar";
import Hero from "./Hero";

function Home() {
  return (
    <>
      <Navbar withButton={true} />
      <Hero />
    </>
  );
}

export default Home;
