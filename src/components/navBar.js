import React from 'react';

function NavBar(props){
    return (<div className="nav-bar w-full h-24 p-2 flex items-center ">
        <p className="logo text-3xl italic tracking-wider font-extrabold opacity-100">Pomodoro</p>
        <a href="#whatis" className="text-lg text-blue-600 ml-auto mr-3">What is Pomodoro ?</a>
        <a href="#howto" className="text-lg text-blue-600">How it Works ?</a>
    </div>);
}

export {NavBar};