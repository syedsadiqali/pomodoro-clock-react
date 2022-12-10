import React from "react";

function NavBar(props) {
  return (
    <div className="nav-bar w-full h-30 sm:h-24 p-2 flex items-center flex-col sm:flex-row">
      <p className="logo text-3xl italic tracking-wider font-extrabold opacity-100 leading-relaxed">
        Pomodoro
      </p>
      <a
        href="#whatis"
        className="text-lg text-blue-600 sm:ml-auto sm:mr-3 leading-relaxed"
      >
        What is Pomodoro ?
      </a>
      <a href="#howto" className="text-lg text-blue-600 leading-relaxed">
        How it Works ?
      </a>
    </div>
  );
}

export { NavBar };
