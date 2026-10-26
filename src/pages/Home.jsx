import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Qualifications } from "@/sections/Qualifications";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function Home() {
return ( <div className="min-h-screen overflow-x-hidden"> <Navbar /> <main> <Hero /> <About /> <Qualifications /> <Experience /> <Projects /> <Contact /> </main> <Footer /> </div>
);
}

export default Home;
