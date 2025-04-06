import Header from "../components/Header"
import Home from "../components/Home"
function HomePage() {
    return (
        <div className="min-h-screen">
            <Header />
            <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
                <Home />
            </section>
        </div>
    );
}

export default HomePage