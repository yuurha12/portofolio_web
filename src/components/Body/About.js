import React from "react";
import Coding from "../../assets/code.jpg";

export default function About() {
  return (
    <section id="about"
    style={{height:"700px"}}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm HOKI.
            <br className="hidden lg:inline-block" /> Enjoying Every Proccess of
            coding, But sometimes get stress out of it.
          </h1>
          <p className="mb-8 leading-relaxed">
            Hello let me introduce myself, my name is Hoki Wahyuono Pranto and
            i'm junior fullstack developer. even fullstack i want to learn more
            about backend.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:online-none hover:text-white rounded text-lg"
            >
              My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={Coding}
          />
        </div>
      </div>
    </section>
  );
}
