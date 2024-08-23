import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";  // Updated reference
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Experience />
      <Projects />
      <Education />   {/* Updated reference */}
      <ContactMe />
      <Footer /> 
    </div>
  );
}

export default App;
