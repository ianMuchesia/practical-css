import { Experience, Footer, Hero, Navbar, Numbers, Team, Testimonial } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Numbers />
        <Team />
        <Testimonial/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
