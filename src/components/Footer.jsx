import { Link } from "react-router-dom";
function Footer(){
    return(
        <footer className="py-6 border-t border-border bg-black text-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">© 2025 <Link to="/signinadminpage">Gonzalo Blanco Ortiz</Link>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer