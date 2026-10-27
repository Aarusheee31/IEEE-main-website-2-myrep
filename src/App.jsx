import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import Chapters from './components/Chapters';
import People from './components/People';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

function App() {
    return (
        <>
            <Preloader />

            <main>
                <Hero />
                <About />
                <Events />
                <Chapters />
                <People />
                <Footer />
            </main>
        </>
    );
}

export default App;