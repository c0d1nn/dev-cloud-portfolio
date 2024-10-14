import { Hero } from "./sections/Hero";
import { Portfolio } from "./sections/Portfolio";
import { Stack } from "./sections/Stack";
import { Services } from "./sections/Services";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import { Navbar } from "./sections/Navbar";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Stack/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}
