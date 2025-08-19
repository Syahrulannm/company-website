import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-slate-50 dark:bg-slate-900 pt-20  text-gray-800 dark:text-white">
      <main className="container mx-auto px-6 py-20">
        <h1 className=" text-3xl md:text-4xl  font-bold text-center mb-6 bg-clip-text text-transparent  bg-gray-900 dark:text-gray-100">Layanan Kami</h1>
        <h2 className="text-xl md:text-2xl font-semibold text-center text-gray-600 dark:text-gray-200 mt-4 mb-12  animate-fade-in">Solusi Web Lengkap untuk Kebutuhanmu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-900 mb-4 ">
              <div className="w-full h-full rounded-xl p-1 text-sky-100 dark:text-sky-400 flex items-center justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-sky-800 dark:text-white mb-2">Desain Web</h2>
            <p className="text-gray-600 dark:text-gray-300">Tampilan modern dan user-friendly untuk menarik pengunjung.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-900 mb-4">
              <div className="w-full h-full rounded-xl p-1 text-sky-100 dark:text-sky-400  flex items-center justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-sky-800 dark:text-white mb-2">Front-end Development</h2>
            <p className="text-gray-600 dark:text-gray-300">Website responsif dengan React & Tailwind, cepat dan rapi.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-slate-900 to-sky-900  mb-4 ">
              <div className="w-full h-full rounded-xl p-1 text-sky-100 dark:text-sky-400 flex items-center justify-center ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-sky-800 dark:text-white mb-2">Deploy & Hosting</h2>
            <p className="text-gray-600 dark:text-gray-300">Kami bantu website kamu online dengan cepat lewat GitHub / Netlify.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services;
