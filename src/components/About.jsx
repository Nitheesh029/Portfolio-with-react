function About() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      id="About"
    >
      <div className="text-center leading-10">
        <p className="text-slate-400 text-xl">
          Get to <span className="text-blue-400">Know More</span>
        </p>
        <h1 className="text-6xl font-semibold">About Me</h1>
      </div>
      <div className="flex lg:gap-[200px] gap-10 mt-[100px] flex-col md:flex-row">
        <div className="mx-auto md:mx-0">
          <img
            src="about.jpg"
            alt=""
            className="w-[350px] h-[400px] object-cover rounded-xl"
          />
        </div>
        <div className="flex flex-col justify-around gap-10 md:gap-0">
          <div className="flex gap-10 flex-col md:flex-row mx-auto md:mx-0">
            <div className="w-[300px] md:w-[250px] h-[150px] border-2 flex flex-col items-center justify-center gap-1 rounded-xl">
              <i className="fa-solid fa-award"></i>
              <p>Experience</p>
              <p>On</p>
              <p>Frontend Development</p>
            </div>
            <div className="w-[300px] md:w-[250px] h-[150px] border-2 flex flex-col items-center justify-center gap-1 rounded-xl">
              <i className="fa-solid fa-user-graduate"></i>
              <p>Education</p>
              <p>B.sc, Bachelors Degree</p>
              <p>Computer Science</p>
            </div>
          </div>
          <p className="md:w-[550px] w-[400px] sm:w-[500px] mx-auto md:mx-0 text-justify px-1 sm:px-0">
            I'm a web developer and Computer Science student skilled in HTML,
            CSS, JavaScript, and Tailwind CSS. I love building user-friendly web
            apps and aim to become a software engineer creating impactful
            digital solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
