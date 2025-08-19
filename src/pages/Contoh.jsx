import React from "react";
import { useState } from "react";

export default function Contoh() {
  const [activeTab, setActiveTab] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Terima kasih ${formData.name}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda melalui email.`);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button onClick={() => setActiveTab("home")} className="text-lg font-bold text-indigo-600">
                DigitalSolution
              </button>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <button
                onClick={() => setActiveTab("home")}
                className={`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeTab === "home" ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700"}`}
              >
                Beranda
              </button>
              <button
                onClick={() => setActiveTab("services")}
                className={`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === "services" ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Layanan
              </button>
              <button
                onClick={() => setActiveTab("contact")}
                className={`border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  activeTab === "contact" ? "border-indigo-500" : "border-transparent hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Kontak
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* {activeTab === 'home' && (
        <div className=""> */}
        {/* Hero Section */}
        <div className="bg-indigo-700 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">Solusi Digital untuk Bisnis Anda</h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl">Kami menawarkan layanan desain web, pengembangan front-end, dan hosting yang cepat dan terjangkau.</p>
              <div className="mt-10">
                <button onClick={() => setActiveTab("services")} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50">
                  Lihat Layanan
                </button>
                <button onClick={() => setActiveTab("contact")} className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 bg-opacity-90 hover:bg-opacity-70">
                  Hubungi Kami
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Mengapa memilih kami?</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Cepat, Responsif, dan Terjangkau untuk Bisnis Lokal</p>
            </div>

            {/* Services Highlights */}
            <div className="mt-10">
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {/* Service 1 */}
                <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <h3 className="text-lg font-medium text-gray-900">Desain Web</h3>
                        <p className="mt-1 text-sm text-gray-500">Kami buat tampilan modern yang cocok untuk bisnis kamu.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <h3 className="text-lg font-medium text-gray-900">Front-end Dev</h3>
                        <p className="mt-1 text-sm text-gray-500">Interaktif dan cepat, pakai ReactJS dan Tailwind.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="bg-gray-50 overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                          />
                        </svg>
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <h3 className="text-lg font-medium text-gray-900">Deploy & Hosting</h3>
                        <p className="mt-1 text-sm text-gray-500">Kami bantu kamu online lewat Netlify atau GitHub Pages.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-indigo-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Testimoni</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Apa kata klien kami</p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
              {/* Testimonial 1 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/472d799a-356e-4e6f-b6ad-d0bf86a30243.png"
                        alt="Portrait of a satisfied middle-aged male client with a friendly smile"
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Budi Santoso</h3>
                      <p className="text-sm text-indigo-600">Pemilik Warung Kopi</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500">"Layanan yang sangat memuaskan! Website kami kini lebih menarik dan fungsional dengan tampilan modern yang membuat pelanggan kami semakin betah."</p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6e26cbd6-942e-4084-87a5-e54d684989d9.png"
                        alt="Portrait of a young female entrepreneur with curly hair looking confident"
                        className="h-12 w-12 rounded-full"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Siti Rahayu</h3>
                      <p className="text-sm text-indigo-600">Pemilik Salon Rumahan</p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-500">"Prosesnya cepat dan hasilnya luar biasa! Website kami sekarang memiliki booking online yang membuat pelanggan lebih mudah membuat janji."</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="bg-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">Siap memulai proyek Anda?</h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
