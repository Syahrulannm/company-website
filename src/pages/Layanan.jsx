import Header from "../components/Header";

export default function Layanan() {
  return (
    <section className=" bg-gradient-to-b from-slate-900 to-sky-950 text-white pb-16">
      <Header />
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
            <h2 className="text-4xl md:text-6xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-r from-accent-pink to-primary-500">Powerful Website Features</h2>
            <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg">Experience next-generation web capabilities designed to elevate your online presence.</p>
          </div>

          {/* <!-- Features list --> */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* <!-- Feature 1 --> */}
            <div className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-purple p-1 animate-float">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Lightning Fast Performance</h3>
                <p className="text-gray-400 leading-relaxed">Optimized for speed with 95+ Lighthouse scores. Our websites load instantly thanks to advanced caching, image optimization, and minimal JavaScript.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-pink">SSR</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">CDN</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-cyan">Optimized</span>
                </div>
              </div>
            </div>

            {/* <!-- Feature 2 --> */}
            <div className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-cyan p-1 animate-float-reverse">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Cutting-Edge Technology</h3>
                <p className="text-gray-400 leading-relaxed">Built with modern frameworks like React, Next.js, and Tailwind CSS. We leverage the latest web standards for exceptional user experiences.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">React</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-purple">Next.js</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-cyan">Web3</span>
                </div>
              </div>
            </div>

            {/* <!-- Feature 3 --> */}
            <div className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-purple to-primary-500 p-1 animate-float">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">SEO Optimized</h3>
                <p className="text-gray-400 leading-relaxed">Our websites are built for search engines from the ground up with semantic HTML, structured data, and performance optimizations that Google loves.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-purple">SEO</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-pink">Analytics</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">Schema</span>
                </div>
              </div>
            </div>

            {/* <!-- Feature 4 --> */}
            <div className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-cyan to-primary-500 p-1 animate-float-reverse">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-accent-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Mobile-First Design</h3>
                <p className="text-gray-400 leading-relaxed">Perfectly responsive designs that work flawlessly on all devices. We design for mobile first, then scale up to desktop for optimal performance.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-cyan">Responsive</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-pink">Touch</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">PWA</span>
                </div>
              </div>
            </div>

            {/* <!-- Feature 5 --> */}
            <div className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-pink to-accent-cyan p-1 animate-float">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-accent-pink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Enterprise Security</h3>
                <p className="text-gray-400 leading-relaxed">Military-grade security with HTTPS, CSP headers, rate limiting, and regular audits. We protect your data and your visitors' privacy.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-pink">SSL</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">GDPR</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-cyan">2FA</span>
                </div>
              </div>
            </div>

            {/* <!-- Feature 6 --> */}
            <div className="flex flex-col md:flex-row gap-8 group">
              <div className="flex-shrink-0 relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-pink p-1 animate-float-reverse">
                  <div className="w-full h-full bg-dark-800 rounded-xl flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="absolute -z-10 -inset-2 rounded-2xl bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">Custom CMS</h3>
                <p className="text-gray-400 leading-relaxed">Easy-to-use content management tailored to your needs. Update anything on your site without technical knowledge through our intuitive dashboard.</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-primary-500">Headless</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-purple">GraphQL</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-dark-700 text-accent-pink">No-Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
