import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLink } from "react-icons/md";
import { FaCode } from "react-icons/fa6";

function Projects() {
  return (
    <div className="container mb-8">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
        <li
          data-aos="fade-right"
          className="relative group col-span-1 sm:col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/search-image.png"
            className="w-full h-full object-cover transition duration-500 md:group-hover:scale-110"
          />

          <div
            className="absolute   inset-0 bg-black/60
               flex flex-col items-center justify-center
               opacity-100 md:opacity-0
               md:group-hover:opacity-100
               transition duration-300"
          >
            <span className="text-white text-xl font-semibold mb-7 lg:mb-15">
              Search Image
            </span>
            <div className="flex items-center gap-8 lg:gap-20">
              <Link
                className=" px-2 py-1 border-2 border-transparent lg:px-5 lg:py-4 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
                to="https://github.com/dudoshaa/searchimg"
              >
                <FaCode className="text-2xl lg:text-4xl" />
              </Link>
              <Link
                to="https://searchimg-eight.vercel.app/"
                className=" px-2 py-1 border-2 border-transparent lg:px-5 lg:py-4 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
              >
                <MdOutlineLink className="text-2xl   lg:text-4xl" />
              </Link>
            </div>
          </div>
        </li>

        <li
          data-aos="fade-down"
          className="relative group rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/desserts.png"
            className="w-full h-full object-cover object-left transition duration-500 md:group-hover:scale-110"
          />

          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
          >
            <span className="text-white text-lg font-semibold mb-7 ">
              Desserts
            </span>
            <div className="flex items-center gap-8 lg:gap-20">
              <Link
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
                to="https://github.com/dudoshaa/Desserts-redux"
              >
                <FaCode className="text-2xl lg:text-4xl" />
              </Link>
              <Link
                to="https://1dars-five.vercel.app/"
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
              >
                <MdOutlineLink className="text-2xl   lg:text-4xl" />
              </Link>
            </div>
          </div>
        </li>

        <li
          data-aos="fade-left"
          className="relative group rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/dev-finder.png"
            className="w-full h-full object-cover transition duration-500 md:group-hover:scale-110"
          />

          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
          >
            <span className="text-white text-lg font-semibold mb-7">
              Dev Finder
            </span>
            <div className="flex items-center gap-8 lg:gap-20">
              <Link
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
                to="https://github.com/dudoshaa/devfinder"
              >
                <FaCode className="text-2xl lg:text-4xl" />
              </Link>
              <Link
                to="https://devfinder-liard.vercel.app/"
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
              >
                <MdOutlineLink className="text-2xl   lg:text-4xl" />
              </Link>
            </div>
          </div>
        </li>

        <li
          data-aos="fade-up"
          className="relative group rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/rps.png"
            className="w-full h-full object-cover transition duration-500 md:group-hover:scale-110"
          />

          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
          >
            <span className="text-white text-lg font-semibold mb-7">
              Rock Paper Scissors
            </span>
            <div className="flex items-center gap-8 lg:gap-20">
              <Link
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
                to="https://github.com/dudoshaa/rps"
              >
                <FaCode className="text-2xl lg:text-4xl" />
              </Link>
              <Link
                to="https://rps-kohl-theta.vercel.app/"
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
              >
                <MdOutlineLink className="text-2xl   lg:text-4xl" />
              </Link>
            </div>
          </div>
        </li>

        <li
          data-aos="fade-left"
          className="relative group rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/todo.png"
            className="w-full h-full object-cover transition duration-500 md:group-hover:scale-110"
          />

          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
          >
            <span className="text-white text-lg font-semibold mb-7">Todo</span>
            <div className="flex items-center gap-8 lg:gap-20">
              <Link
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
                to="https://github.com/dudoshaa/todo"
              >
                <FaCode className="text-2xl lg:text-4xl" />
              </Link>
              <Link
                to="https://todo-rosy-iota.vercel.app/"
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
              >
                <MdOutlineLink className="text-2xl   lg:text-4xl" />
              </Link>
            </div>
          </div>
        </li>

        <li
          data-aos="fade-down"
          className="relative group rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/player.png"
            className="w-full h-full object-cover transition duration-500 md:group-hover:scale-110"
          />

          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
          >
            <span className="text-white text-lg font-semibold mb-7">
              Music Player
            </span>
            <div className="flex items-center gap-8 lg:gap-18">
              <Link
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
                to="https://github.com/dudoshaa/player"
              >
                <FaCode className="text-2xl lg:text-4xl" />
              </Link>
              <Link
                to="https://player-alpha-two.vercel.app/"
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
              >
                <MdOutlineLink className="text-2xl   lg:text-4xl" />
              </Link>
            </div>
          </div>
        </li>

        <li
          data-aos="fade-down"
          className="relative group rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/d-group.png"
            className="w-full h-full object-cover transition duration-500 md:group-hover:scale-110"
          />

          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
          >
            <span className="text-white text-lg font-semibold mb-7">
              D-Group
            </span>
            <div className="flex items-center gap-8 lg:gap-18">
              <Link
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
                to="#"
              >
                <FaCode className="text-2xl lg:text-4xl" />
              </Link>
              <Link
                to="#"
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
              >
                <MdOutlineLink className="text-2xl   lg:text-4xl" />
              </Link>
            </div>
          </div>
        </li>

        <li
          data-aos="fade-down"
          className="relative group col-span-1 sm:col-span-2 rounded-2xl overflow-hidden"
        >
          <img
            src="/assets/healthy.webp"
            className="w-full h-full object-cover transition duration-500 md:group-hover:scale-110"
          />

          <div
            className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center
                  opacity-100 md:opacity-0 md:group-hover:opacity-100 transition"
          >
            <span className="text-white text-lg font-semibold mb-8">
              Healthy Food
            </span>
            <div className="flex items-center gap-8 lg:gap-18">
              <Link
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
                to="https://github.com/dudoshaa/healthy"
              >
                <FaCode className="text-2xl lg:text-4xl" />
              </Link>
              <Link
                to="https://healthy-umber.vercel.app/"
                className=" px-2 py-1 border-2 border-transparent lg:px-4 lg:py-3 bg-[#cccccca1] rounded-4xl hover:border-[#9c210b] hover:text-[#9c210b]"
              >
                <MdOutlineLink className="text-2xl   lg:text-4xl" />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Projects;
