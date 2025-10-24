import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faBarChart, faBars, faContactBook, faHome, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ThemeToggleSwitch from "./ThemeToggleSwitch";

export default function Header() {
  const [open, setOpen] = useState(false);
  const touchStartX = useRef(null);
  const [openListMobile, setOpenListMobile] = useState(false);

  //Swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  //Swipe close
  const handleTouchMove = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.touches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    if (diffX > 50) {
      // Swipe ke kiri lebih dari 50px -> tutup sidebar
      setOpen(false);
      touchStartX.current = null;
    }
  };
  return (
    <header className=" flex flex-col items-center">
      <nav className="flex items-center justify-between p-4 md:px-16 lg:px-24 xl:px-32 md:py-6 w-full">
        <a href="https://syahrul-dev.netlify.app" className="text-xl flex justify-center items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-900 to-sky-900 flex justify-center items-center p-2">
            <FontAwesomeIcon icon={faBarChart} className="w-5 h-5 text-slate-300" />
          </div>
          <p className="p-1">Syahrul Studio</p>
        </a>
        <div
          id="menu"
          className="max-md:absolute max-md:top-0 max-md:z-10 max-md:left-0 max-md:w-0 max-md:transition-all max-md:duration-300 max-md:overflow-hidden max-md:h-full max-md:bg-black/50 max-md:backdrop-blur max-md:flex-col max-md:justify-center flex items-center gap-8 font-medium"
        >
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <div className="relative group flex items-center gap-1 cursor-pointer">
            <Link to="/layanan">Layanan</Link>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="absolute bg-slate-900 font-normal flex flex-col gap-2 w-max rounded-lg p-4 top-36 left-0 opacity-0 -translate-y-full group-hover:top-44 group-hover:opacity-100 transition-all duration-300">
              <Link to="/layanan" className="hover:translate-x-1 hover:text-slate-500 transition-all">
                Design Web
              </Link>
              <Link to="/layanan" className="hover:translate-x-1 hover:text-slate-500 transition-all">
                Front-end Dev
              </Link>
              <Link to="/layanan" className="hover:translate-x-1 hover:text-slate-500 transition-all">
                Deploys
              </Link>
              <Link to="/layanan" className="hover:translate-x-1 hover:text-slate-500 transition-all">
                Web Apps
              </Link>
            </div>
          </div>
          {/* <a href="#" className="hover:text-gray-300">
            Layanan
          </a> */}
          <a href="#" className="hover:text-gray-300">
            Kontak
          </a>
          <button className="md:hidden bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-medium transition">Sign up</button>

          {/* Toggle Menu
          <button onClick={() => setOpen(true)} className="md:hidden bg-gray-900 hover:bg-gray-800 text-white p-2 rounded-md aspect-square font-medium transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button> */}
        </div>
        {/* <button className="hidden md:block bg-sky-600 hover:bg-sky-700 text-white px-6 py-2.5 rounded-full font-medium transition">Sign up</button> */}
        <div className="hidden md:block ">
          <ThemeToggleSwitch />
        </div>
        <button onClick={() => setOpen(true)} className="md:hidden bg-gray-900 hover:bg-slate-800 text-white p-2 rounded-md aspect-square font-medium transition">
          <FontAwesomeIcon icon={faBars} className="w-5 h-5" />
        </button>
      </nav>
      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setOpen(false)}></div>}

      {/* Menu Mobile */}
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className={`fixed top-0 right-0 w-64 h-full bg-gradient-to-br from-slate-900 to-sky-900 px-2 py-4 gap-10 rounded-2xl shadow-lg z-50 transform transition-smooth ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between text-gray-100  px-4 py-2 border-b transition-all mb-6">
          <h2 className="text-lg font-bold dark:text-gray-200">Menu</h2>
          <button onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faXmark} className="w-5 h-5  hover:scale-105 hover:text-gray-300" />
          </button>
        </div>

        <div className="flex flex-col flex-1 gap-3 px-4">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-gray-300 flex items-center gap-2 py-2  hover:bg-opacity-25 rounded-2xl transition-smooth ">
            <FontAwesomeIcon icon={faHome} className="h-5 w-5" /> Home
          </Link>
          <a href="#contact" className="hover:text-gray-300 flex items-center gap-2 py-2">
            <FontAwesomeIcon icon={faContactBook} className="h-5 w-5" /> Kontak
          </a>
          {/* Dropdown Layanan */}
          <div className="flex flex-col">
            <button onClick={() => setOpenListMobile(!openListMobile)} className="  flex items-center gap-1 py-2">
              <a>
                <FontAwesomeIcon icon={faAlignLeft} className="h-4 w-4" /> Layanan
              </a>
              <svg className={`ml-1 transition-transform duration-300 ${openListMobile ? "rotate-180" : ""}`} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {openListMobile && (
              <div className="flex flex-col gap-2 pl-6 py-2 bg-slate-900 rounded-lg transition-all duration-300">
                <a href="#desain" className="hover:translate-x-1 hover:text-slate-500 transition-all">
                  Desain Web
                </a>
                <a href="#services" className="hover:translate-x-1 hover:text-slate-500 transition-all">
                  Front-end Dev
                </a>
                <a href="#services" className="hover:translate-x-1 hover:text-slate-500 transition-all">
                  Deploy & Hosting
                </a>
                <a href="#dukungan" className="hover:translate-x-1 hover:text-slate-500 transition-all">
                  Dukungan & Maintenance
                </a>
              </div>
            )}
          </div>
          {/* ThemeToggle Down */}
          <div className="block ">
            <ThemeToggleSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
