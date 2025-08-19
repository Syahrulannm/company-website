export default function ShowCase() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 text-gray-800 dark:text-white">
      <main className="container mx-auto px-6 py-20">
        <h1 className=" text-3xl md:text-4xl  font-bold text-center mb-6 bg-clip-text text-transparent  bg-gray-900 dark:text-gray-100">Hasil Pekerjaan Saya</h1>
        <h2 className="text-xl md:text-2xl max-w-3xl  mx-auto font-semibold text-center text-gray-600 dark:text-gray-200 mt-4 mb-12  animate-fade-in">
          Dari landing page hingga e-commerce, setiap proyek saya rancang dengan detail, desain modern, dan hasil yang nyata.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 p-3 md:p-4 xl:p-5 dark:bg-gray-900">
          {/* Card 1 */}
          <div className="bg-white border rounded-lg shadow-md dark:bg-slate-800 dark:border-gray-700 ">
            <div className="p-2 flex justify-center overflow-hidden">
              <a href="https://syahrul-dev.netlify.app">
                <img className="rounded-lg hover:scale-110 transition-smooth object-cover object-center" src="/preview-portfolio.webp" alt="Portfolio" loading="lazy" />
              </a>
            </div>
            <div className="px-4 pb-3">
              <div>
                <a href="https://syahrul-dev.netlify.app">
                  <h5 className="text-xl font-semibold tracking-tight hover:text-sky-800 dark:hover:text-sky-300 text-gray-900 dark:text-white ">Portfolio v1</h5>
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">Portfolio elegan, responsive, dan modern</p>
              </div>
              <div className="mt-2 flex justify-between">
                <div className="flex items-center gap-2 py-2">
                  <a href="https://syahrul-dev.netlify.app">
                    <img src="/syahrul-profil.webp" className="object-cover w-6 h-6 rounded-full" alt="team-tailwindflex" loading="lazy" />
                  </a>
                  <div className="text-gray-600 dark:text-gray-300 hover:text-sky-800 ">
                    <a href="flex flex-col" className="text-sm">
                      <small>Author:</small>
                      <p>Syahrul.dev</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-2.5">
                  <span className="text-sm dark:text-gray-400">Ratings</span>
                  <span className="bg-sky-100 text-sky-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800 ml-3">5.0</span>
                </div>
              </div>
              <div className="mt-8 mb-4 text-center bg-sky-950 hover:bg-slate-900 w-full  py-3 px-8 rounded-lg transition-colors">
                <a href="#" className=" text-white font-bold">
                  Live Preview
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border rounded-lg shadow-md dark:bg-slate-800 dark:border-gray-700 ">
            <div className="p-2 flex justify-center overflow-hidden">
              <a href="https://jaya-motor.netlify.app">
                <img className="rounded-lg hover:scale-110 transition-smooth object-cover object-center" src="/preview-landing-motor.webp" alt="Simple Search Bar" loading="lazy" />
              </a>
            </div>
            <div className="px-4 pb-3">
              <div>
                <a href="https://jaya-motor.netlify.app">
                  <h5 className="text-xl font-semibold tracking-tight hover:text-sky-800 dark:hover:text-sky-300 text-gray-900 dark:text-white ">E-commerce Motor</h5>
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">Minimalist design</p>
              </div>
              <div className="mt-2 flex justify-between">
                <div className="flex items-center gap-2 py-2">
                  <a href="https://syahrul-dev.netlify.app">
                    <img src="/syahrul-profil.webp" className="object-cover w-6 h-6 rounded-full" alt="team-tailwindflex" loading="lazy" />
                  </a>
                  <div className="text-gray-600 dark:text-gray-300 hover:text-sky-800 ">
                    <a href="flex flex-col" className="text-sm">
                      <small>Author:</small>
                      <p>Syahrul.dev</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-2.5">
                  <span className="text-sm dark:text-gray-400">Ratings</span>
                  <span className="bg-sky-100 text-sky-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800 ml-3">5.0</span>
                </div>
              </div>
              <div className="mt-8 mb-4 text-center bg-sky-950 hover:bg-slate-900 w-full  py-3 px-8 rounded-lg transition-colors">
                <a href="#" className=" text-white font-bold">
                  Live Preview
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border rounded-lg shadow-md dark:bg-slate-800 dark:border-gray-700 ">
            <div className="p-2 flex justify-center overflow-hidden">
              <a href="https://mindwealth.netlify.app">
                <img className="rounded-lg hover:scale-110 transition-smooth object-cover object-center" src="https://tailwindflex.com/public/images/thumbnails/simple-search-bar/thumb_u.min.webp" alt="Simple Search Bar" loading="lazy" />
              </a>
            </div>
            <div className="px-4 pb-3">
              <div>
                <a href="https://mindwealth.netlify.app">
                  <h5 className="text-xl font-semibold tracking-tight hover:text-sky-800 dark:hover:text-sky-300 text-gray-900 dark:text-white ">Blog-MindWealth</h5>
                </a>
                <p className="text-gray-600 dark:text-gray-400 text-sm break-all">Minimalist design</p>
              </div>
              <div className="mt-2 flex justify-between">
                <div className="flex items-center gap-2 py-2">
                  <a href="https://syahrul-dev.netlify.app">
                    <img src="/syahrul-profil.webp" className="object-cover w-6 h-6 rounded-full" alt="team-tailwindflex" loading="lazy" />
                  </a>
                  <div className="text-gray-600 dark:text-gray-300 hover:text-sky-800 ">
                    <a href="flex flex-col" className="text-sm">
                      <small>Author:</small>
                      <p>Syahrul.dev</p>
                    </a>
                  </div>
                </div>
                <div className="flex items-center mt-2.5">
                  <span className="text-sm dark:text-gray-400">Ratings</span>
                  <span className="bg-sky-100 text-sky-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-sky-200 dark:text-sky-800 ml-3">5.0</span>
                </div>
              </div>
              <div className="mt-8 mb-4 text-center bg-sky-950 hover:bg-slate-900 w-full  py-3 px-8 rounded-lg transition-colors">
                <a href="#" className=" text-white font-bold">
                  Live Preview
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-5">
          <button
            className="inline-flex items-center justify-center px-8 py-4
          text-lg font-bold text-white
          bg-gradient-to-r from-sky-700 to-sky-900
          dark:from-sky-700 dark:to-sky-900
          rounded-lg
          drop-shadow-md
          transform-gpu
          hover:rotate-[1deg] hover:scale-105
          hover:skew-x-1
          transition-all duration-300
          shadow-lg hover:shadow-xl"
          >
            <span className="uppercase">Lihat Semua Project</span>
          </button>
        </div>
      </main>
    </div>
  );
}
