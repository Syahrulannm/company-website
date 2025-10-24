import { faBarChart, faBrain, faCodeMerge, faFastForward, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-sky-900 px-6 md:px-16 lg:px-24 xl:px-32 w-full">
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
        <div className="max-w-96">
          <a href="https://syahrul-dev.netlify.app" className="flex items-center">
            <div className="flex items-center  w-10 h-10 bg-gradient-to-br from-slate-900 to-sky-900 rounded-full p-2 hover:rotate-6">
              <FontAwesomeIcon icon={faBarChart} className="w-6 h-6 text-slate-300" />
            </div>
            <p className="text-sky-50 p-1">Syahrul Studio</p>
          </a>
          <p className="mt-6 text-sm text-gray-300 flex items-center">
            Dari ide ke website nyata
            <FontAwesomeIcon icon={faRocket} className="w-4 h-4 text-white p-1 animate-bounce" />
          </p>

          <div className="flex items-center gap-2 mt-3">
            <a href="https://instagram.com/syahrulannm" target="_blank" className="hover:scale-110  hover:bg-sky-900 p-2 rounded-full transition-smooth">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 50 50" fill="none">
                <path
                  d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
                  fill="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
            <a href="https://github.com/Syahrulannm" target="_blank" className="hover:scale-110  hover:bg-sky-900 p-2 rounded-full transition-smooth">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 15.833c-4.167 1.25-4.167-2.084-5.833-2.5m11.666 5v-3.225a2.8 2.8 0 0 0-.783-2.175c2.616-.292 5.366-1.283 5.366-5.833a4.53 4.53 0 0 0-1.25-3.125 4.22 4.22 0 0 0-.075-3.142s-.983-.292-3.258 1.233a11.15 11.15 0 0 0-5.833 0C5.225.541 4.242.833 4.242.833a4.22 4.22 0 0 0-.075 3.142 4.53 4.53 0 0 0-1.25 3.15c0 4.516 2.75 5.508 5.366 5.833a2.8 2.8 0 0 0-.783 2.15v3.225"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="https://id.linkedin.com/in/syahrul-annam" target="_blank" className="hover:scale-110  hover:bg-sky-900 p-2 rounded-full transition-smooth">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.333 6.667a5 5 0 0 1 5 5V17.5H15v-5.833a1.667 1.667 0 0 0-3.334 0V17.5H8.333v-5.833a5 5 0 0 1 5-5M5 7.5H1.667v10H5zM3.333 5a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap gap-10 md:flex-nowrap justify-between">
          <div>
            <h2 className="font-semibold text-gray-100 mb-5">RESOURCES</h2>
            <div>
              <ul className="text-sm text-gray-300 space-y-2 list-none">
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">Tutorials</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-gray-100  mb-5">COMPANY</h2>
            <div className="text-sm text-gray-300 space-y-2 list-none">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <a href="#">Terms</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-500">
        © 2025 <a href="https://syahrul-dev.netlify.app">Syahrul Web Studio.</a> All Right Reserved.
      </p>
    </footer>
  );
}
