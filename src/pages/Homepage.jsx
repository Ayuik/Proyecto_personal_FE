import Header from "../components/Header"
import Home from "../components/Home"
import About from "../components/About"

function HomePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
                <Home />
            </section>
            <section id="about" className="py-20 bg-gray-100">
                <About />
            </section>          
        </div>
    );
}

export default HomePage