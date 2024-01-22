const Banner = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div
          className="hero h-[80vh]"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/4dvjs1J/2301-q702-004-S-m005-c12-real-estate.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold">
                Discover Your Perfect Home
              </h1>
              <p className="mb-5 text-sm md:text-base">
                Embark on a journey to find more than just a house – find your
                sanctuary. Explore our thoughtfully curated collection of rental
                properties, each offering a unique blend of comfort, style, and
                convenience. Welcome to a new chapter, where every door opens to
                the warmth of home.
              </p>
              <form>
                <div className="flex w-full justify-center items-end">
                  <div className="relative mr-2 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                    <label className="leading-7 text-sm text-white">
                      Search your home
                    </label>
                    <input
                      type="text"
                      name="search"
                      className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
