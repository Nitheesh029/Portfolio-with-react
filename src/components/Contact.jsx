import Button from "./Button";
import { useState } from "react";

function Contact() {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e90af311-4444-4116-beab-76801a9481f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center flex-col"
      id="Contacts"
    >
      <div className="text-center leading-10 md:pt-0 pt-[100px]">
        <p className="text-slate-400 text-xl">
          Get <span className="text-blue-400">In</span>
        </p>
        <h1 className="text-6xl font-semibold">Touch</h1>
      </div>
      <div className="flex md:flex-row mt-[100px] flex-col items-center justify-around gap-20 border-none contact-bg rounded-md p-10 shadow-xl">
        <div className="w-[350px] md:w-[400px] flex flex-col gap-20">
          <div className="flex flex-col flex-1 gap-5">
            <h1 className="text-2xl text-center">
              Lets <span className="text-blue-400">Talk</span>
            </h1>
            <p className="text-lg font-medium text-justify">
              I'm currently available to take on new projects, so feel free to
              send me a message about anything that you want me to work on. You
              can contact anytime.
            </p>
          </div>
          <div>
            <div className="flex gap-2 items-center hover:text-blue-400 cursor-pointer">
              <i class="fa-solid fa-square-phone"></i>
              <p>9944335522</p>
            </div>
            <div className="flex gap-2 items-center hover:text-blue-400 cursor-pointer">
              <i class="fa-solid fa-envelope"></i>
              <p>qxnitheesh@gmail.com</p>
            </div>
            <div className="flex gap-2 items-center hover:text-blue-400 cursor-pointer">
              <i class="fa-solid fa-location-dot"></i>
              <p>chennai</p>
            </div>
          </div>
        </div>
        <form
          className="flex flex-col gap-5 md:w-[400px] w-[350px]"
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="text-black py-2 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="text-black py-2 px-2 rounded-md"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Write your message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
              className="text-black py-2 px-2 rounded-md h-[200px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-2 border-blue-400 px-10 py-2 rounded-md blueShadow duration-200 outline-none bg-slate-950"
            onClick={() => {
              <span>{alert(result)}</span>;
            }}
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
