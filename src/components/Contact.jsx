import React, { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "syahrul123", // ganti dengan Service ID
        "template_annam123", // ganti dengan Template ID
        form.current,
        "EGdWF17TtP1zGEVYy" // ganti dengan Public Key dari EmailJS
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Pesan berhasil dikirim!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Terjadi kesalahan, coba lagi.");
        }
      );
  };
  return (
    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-2">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">Kontak</p>
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">Hubungi Saya</h2>
            <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-200">Ingin diskusi tentang proyek Anda? Kirim pesan anda sekarang</p>
          </div>
        </div>
        <div className="card h-fit mx-auto text-center max-w-3xl p-5 md:p-12" id="form">
          {/* <h2 className="mb-4 text-2xl font-bold dark:text-white">"Siap diskusi tentang proyek Anda? Hubungi saya sekarang."</h2> */}
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <div className="mx-0 mb-1 sm:mb-4">
                <div className="mx-0 mb-1 sm:mb-4">
                  <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                  <input type="text" name="from_name" id="name" autoComplete="given-name" placeholder="Nama anda" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md  sm:mb-0" />
                </div>
                <div className="mx-0 mb-1 sm:mb-4">
                  <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                  <input type="email" name="reply_to" id="email" autoComplete="email" placeholder="Alamat email" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" />
                </div>
              </div>
              <div className="mx-0 mb-1 sm:mb-4">
                <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                <textarea id="textarea" name="message" cols="30" rows="5" placeholder="Pesan anda" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0"></textarea>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="w-full bg-sky-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
