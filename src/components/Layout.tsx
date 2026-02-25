import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />

      <main className="flex-1 w-full px-8">
        <div className="flex flex-col items-center gap-12 max-w-5xl mx-auto pb-16">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
}
