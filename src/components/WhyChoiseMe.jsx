import { faChargingStation, faFaceFlushed, faFeatherPointed, faFire, faPersonCircleXmark, faPlugCircleExclamation, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WhyChoiceMe() {
  return (
    <section className=" bg-gradient-to-b from-slate-900 to-sky-950 text-white">
      <main className="bg-slate-900 ">
        <div className="relative max-w-7xl mx-auto px-6 py-24">
          {/* <!-- Background elements --> */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-accent-purple/10 to-accent-pink/10 blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-primary-500/10 to-accent-cyan/10 blur-3xl"></div>
          </div>

          {/* <!-- Section header --> */}
          <div className="relative text-center mb-24">
            <span className="text-sm font-semibold tracking-wider text-accent-purple">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-100 to-sky-900">Dari Ide Jadi Website Siap Pakai</h2>
            <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">Mulai dari nol sampai online, kami bantu wujudkan website impian Anda dengan langkah yang mudah.</p>
          </div>

          {/* <!-- Features list --> */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* <!-- Feature 1 --> */}
            <div id="desain" className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-purple p-1 animate-float">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Desain modern & mobile friendly</h3>
                <p className="text-gray-400 leading-relaxed">
                  Tampilan adalah kesan pertama bisnis Anda. Dengan desain modern dan mobile-friendly, website Anda siap menarik perhatian dan memberikan pengalaman terbaik bagi pengunjung di perangkat apa pun.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-pink">Responsive</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500"> CleanUI</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-cyan"> CrossDevice</span>
                </div>
              </div>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan p-1 animate-float-reverse">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Kode rapi & mudah dikembangkan</h3>
                <p className="text-gray-400 leading-relaxed">Dengan kode yang bersih dan terstruktur, website Anda siap untuk berkembang seiring pertumbuhan bisnis tanpa harus membangun ulang dari awal.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">CleanCode</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-purple"> Maintainable</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-cyan"> Scalable</span>
                </div>
              </div>
            </div>

            {/* <!-- Feature 3 --> */}
            <div id="dukungan" className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-purple p-1 animate-float">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Support after delivery</h3>
                <p className="text-gray-400 leading-relaxed">Website Anda tetap aman setelah project selesai. Dengan dukungan after delivery, Anda tidak perlu khawatir jika ada masalah teknis atau ingin pengembangan lanjutan.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-pink">AfterSupport</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">Reliable </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-cyan">LongTermCare</span>
                </div>
              </div>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-pink p-1 animate-float-reverse">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <FontAwesomeIcon icon={faFeatherPointed} className="h-10 w-10 text-accent-cyan" />
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Harga bersahabat</h3>
                <p className="text-gray-400 leading-relaxed">Investasi terjangkau untuk hasil profesional. Dengan harga bersahabat, Anda bisa mendapatkan website berkualitas tinggi yang mendukung pertumbuhan bisnis.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">Affordable</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-purple">BestValue</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-pink">BudgetFriendly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
