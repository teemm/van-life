import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}