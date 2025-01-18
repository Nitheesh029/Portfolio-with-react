import Button from "./Button";

function Home() {
  return (
    <div
      className="min-h-screen flex md:flex-row flex-col justify-center items-center gap-20"
      id="Home"
    >
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
        <div className="flex justify-evenly gap-5">
          <a href="https://github.com/Nitheesh029" target="_blank">
            <Button>
              Github<i className="fa-brands fa-square-github text-lg"></i>
            </Button>
          </a>
          <a
            href="https://www.linkedin.com/in/s-nitheesh-203171314/"
            target="_blank"
          >
            <Button>
              LinkedIn<i className="fa-brands fa-linkedin text-lg"></i>
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
