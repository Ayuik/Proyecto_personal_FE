import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"
import Works from "../components/Works";

function HomePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
                <Home />
            </section>
            <section id="about" className="py-20 bg-gray-200">
                <About />
            </section>   
            <section id="works" className="py-20 bg-gradient-to-b from-purple-400 to-purple-600">
                <Works />
            </section>       
        </div>
    );
}

export default HomePage