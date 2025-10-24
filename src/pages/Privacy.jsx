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
            <span className="text-sm font-semibold tracking-wider text-accent-purple">Terakhir diperbarui: 24 Oktober 2025</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-100 to-sky-900">Kebijakan Privasi – Syam AI Agent</h2>
            <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">
              Kami di Syam AI Agent menghormati dan melindungi privasi pengguna yang berinteraksi dengan layanan kami melalui WhatsApp dan platform digital lainnya. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
              dan melindungi informasi pribadi Anda.
            </p>
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
                <h3 className="text-2xl font-bold mb-3">1. Informasi yang Kami Kumpulkan</h3>
                <p className="text-gray-400 leading-relaxed">
                  Kami dapat menerima dan memproses data berikut:
                  <br />- Nomor telepon WhatsApp yang digunakan untuk berinteraksi dengan kami.
                  <br />- Isi pesan teks, audio, gambar, atau dokumen yang dikirimkan melalui WhatsApp.
                  <br />- Metadata terkait pesan (waktu pengiriman, jenis pesan, dan status).{" "}
                </p>
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
                <h3 className="text-2xl font-bold mb-3">2. Cara Kami Menggunakan Informasi</h3>
                <p className="text-gray-400 leading-relaxed">
                  Informasi yang dikumpulkan digunakan untuk:
                  <br />- Memberikan respons otomatis atau dukungan pelanggan melalui sistem AI kami.
                  <br />- Meningkatkan kualitas layanan dan pengalaman pengguna.
                  <br />- Tujuan operasional internal, seperti pemantauan performa dan debugging. <br />- Nomor telepon WhatsApp yang digunakan untuk berinteraksi dengan kami.
                </p>
              </div>
            </div>

            {/* <!-- Feature 3 --> */}
            <div id="dukungan" className="flex flex-col md:flex-row gap-8 group">
              <div cl assName="flex-shrink-0 relative">
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
                <h3 className="text-2xl font-bold mb-3">3. Penyimpanan dan Retensi Data</h3>
                <p className="text-gray-400 leading-relaxed">
                  <br />- Data pesan disimpan sementara hanya untuk pemrosesan layanan dan akan dihapus secara berkala setelah tidak lagi diperlukan.
                  <br />- Kami tidak menyimpan atau mengarsipkan percakapan pengguna untuk kepentingan lain.{" "}
                </p>
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
                <h3 className="text-2xl font-bold mb-3">4. Berbagi Informasi</h3>
                <p className="text-gray-400 leading-relaxed">Kami tidak menjual, menyewakan, atau membagikan informasi pribadi pengguna kepada pihak ketiga tanpa persetujuan eksplisit, kecuali jika diwajibkan oleh hukum.</p>
              </div>
            </div>
          </div>
          <div className="py-12">
            <div className="py-1 bg-white"></div>
          </div>
          {/* <!-- Features list 2 --> */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 py-12">
            {/* <!-- Feature 5 --> */}
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
                <h3 className="text-2xl font-bold mb-3">5. Keamanan Data</h3>
                <p className="text-gray-400 leading-relaxed">Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data pengguna dari akses tidak sah, perubahan, atau pengungkapan. </p>
              </div>
            </div>

            {/* <!-- Feature 6 --> */}
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
                <h3 className="text-2xl font-bold mb-3">6. Hak Pengguna</h3>
                <p className="text-gray-400 leading-relaxed">Pengguna dapat meminta penghapusan data pribadi mereka kapan saja dengan menghubungi kami melalui email di bawah ini. </p>
              </div>
            </div>

            {/* <!-- Feature 7 --> */}
            <div id="dukungan" className="flex flex-col md:flex-row gap-8 group">
              <div cl assName="flex-shrink-0 relative">
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
                <h3 className="text-2xl font-bold mb-3">7. Kontak Kami</h3>
                <p className="text-gray-400 leading-relaxed">Jika Anda memiliki pertanyaan tentang kebijakan privasi ini atau ingin menggunakan hak privasi Anda, silakan hubungi kami di: 📧 syamstoreapp@gmail.com </p>
              </div>
            </div>

            {/* <!-- Feature 8 --> */}
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
                <h3 className="text-2xl font-bold mb-3">8. Perubahan Kebijakan</h3>
                <p className="text-gray-400 leading-relaxed">Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diumumkan melalui pembaruan tanggal di bagian atas halaman ini.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
