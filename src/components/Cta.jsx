export default function Cta() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-sky-900 to-slate-900 rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
          <h2 className="text-3xl text-gray-200 font-bold mb-4">
            Siap Punya<span className="text-gray-100"> Website </span>Keren?
          </h2>
          <p className="text-xl max-w-2xl text-gray-200 mx-auto mb-6">Hubungi kami sekarang dan mulai proyek pertamamu bersama Syahrul Studio!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <a href="#" className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors">
              Penawaran Harga
            </a> */}
            <a href="https://wa.me/088225316312" className="bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center">
              {/* <!-- Phone Icon Placeholder --> */}
              <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM3 16a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2zM10 3a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V3zM10 9a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V9zM10 15a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1v-2z"
                />
              </svg>
              Mulai Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
