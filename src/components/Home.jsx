function Home() {
  return (
    <div className="min-w-screen pt-[200px] flex md:flex-row flex-col justify-center items-center gap-20">
      <div>
        <img
          src="profile1.png"
          alt=""
          className="w-[300px] h-[300px] object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3 font-semibold text-center">
        <p className="capitalize text-3xl md:text-4xl">hello , i'am</p>
        <p className="capitalize text-4xl md:text-5xl">s nitheesh</p>
        <p className="capitalize text-3xl md:text-4xl">
          frontend <span className="text-blue-400">developer</span>
        </p>
        <div className="flex justify-evenly sm:gap-0 gap-5">
          <button className="border-2 border-blue-400 px-10 py-2 rounded-md blueShadow duration-200">
            Github
          </button>
          <button className="border-2 border-blue-400 px-10 py-2 rounded-md blueShadow duration-200">
            LinkedIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
