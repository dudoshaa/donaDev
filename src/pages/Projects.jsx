import React from "react";

function Projects() {
  return (
    <div className="container">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
        <li className="col-span-1 sm:col-span-2 md:col-span-2 row-span-2 rounded-2xl overflow-hidden border-[ridge">
          <img
            src="/assets/search-image.png"
            className="w-full h-full "
          />
        </li>

        <li className="rounded-2xl overflow-hidden">
          <img
            src="/assets/desserts.png"
            className="w-full h-full object-cover object-left"
          />
          
        </li>

        <li className="rounded-2xl overflow-hidden">
          <img
            src="/assets/dev-finder.png"
            className="w-full h-full object-cover"
          />
        </li>

        <li className="rounded-2xl overflow-hidden">
          <img src="/assets/rps.png" className="w-full h-full object-cover" />
        </li>

        <li className="rounded-2xl overflow-hidden">
          <img src="/assets/todo.png" className="w-full h-full object-cover" />
        </li>

        <li className="rounded-2xl overflow-hidden">
          <img
            src="/assets/player.png"
            className="w-full h-full object-cover"
          />
        </li>

        <li className="rounded-2xl overflow-hidden">
          <img
            src="/assets/d-group.png"
            className="w-full h-full object-cover"
          />
        </li>

        <li className="col-span-1 sm:col-span-2 rounded-2xl overflow-hidden">
          <img
            src="/assets/healthy.webp"
            className="w-full h-full object-cover"
          />
        </li>
      </ul>
    </div>
  );
}

export default Projects;
