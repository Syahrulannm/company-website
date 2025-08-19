export default function Card({ title, description, image, tech, demo, aos }) {
  return (
    <div data-aos={aos} className=" bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-smooth  hover:shadow-sky-600/50 dark:hover:shadow-sky-500/50">
      <div className="overflow-hidden hover:scale-105 brightness-95 hover:brightness-110  transition-smooth">
        <img src={image} alt={title} className="object-cover object-center rounded-t-lg" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm font-sans text-gray-600 dark:text-gray-300">{description[language]}</p>
        {/*bilingual*/}
        <div className="mt-4 flex flex-wrap gap-2 text-xs mb-6">
          {tech.map((item, idx) => (
            <span key={idx} className={` px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md `}>
              {item}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <Link to={demo} target="_blank" className="card-link flex-1 bg-gradient-custom hover:bg-gradient-custom-hover text-white py-2 px-4 rounded-lg text-center font-medium transition-smooth">
            {" "}
            Live Preview{" "}
          </Link>
          {/* <Link to={demo} target="_blank" className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 py-2 px-4 rounded-lg text-center font-medium transition duration-300">
            {" "}
            View Code{" "}
          </Link> */}
        </div>
      </div>
    </div>
  );
}
