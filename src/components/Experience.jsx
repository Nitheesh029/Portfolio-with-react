import { programmingLanguages, frontendSkills } from "../utils/skills";

function Experience() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      id="Experience"
    >
      <div className="text-center leading-10">
        <p className="text-slate-400 text-xl">
          Explore <span className="text-blue-400">My</span>
        </p>
        <h1 className="text-6xl font-semibold">Experience</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-[100px]">
        <div className=" border-2 w-[300px] py-4 flex flex-col items-center gap-5 rounded-xl">
          <p className="text-xl text-slate-400 font-bold">
            Programming Language
          </p>
          {programmingLanguages.map((lang, langIndex) => {
            return (
              <div className="text-center">
                <p key={langIndex} className="text-lg font-semibold">
                  {lang.language}
                </p>
                <p key={langIndex} className="text-sm text-blue-400 font-light">
                  {lang.level}
                </p>
              </div>
            );
          })}
        </div>
        <div className="border-2 w-[300px] py-4 flex flex-col items-center gap-5 rounded-xl">
          <p className="text-xl text-slate-400 font-bold">
            Frontend Development
          </p>
          {frontendSkills.map((lang, langIndex) => {
            return (
              <div className="text-center">
                <p key={langIndex} className="text-lg font-semibold">
                  {lang.language}
                </p>
                <p key={langIndex} className="text-sm text-blue-400 font-light">
                  {lang.level}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
