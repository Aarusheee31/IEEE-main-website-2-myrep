//App.jsx
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Chapters from './components/Chapters';
import People from './components/People';
import FAQ from "./components/FAQ";

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Events />
        <Chapters />
        <People />
        <FAQ />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
