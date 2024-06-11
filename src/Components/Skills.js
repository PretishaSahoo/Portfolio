import React from 'react';

export default function Skills() {
  return (
    <>
      <h3  align="center" className=" w-full p-6 text-white text-4xl sm:text-4xl lg:text-6xl font-extrabold">
          <span className=" text-center primary-color py-4">
            Skills and Tech Stack
            </span>
      </h3>
      <div className="flex flex-wrap justify-center items-center p-6"  style={{animation:"float 3s ease-in-out infinite"}}>
        <a  href="https://getbootstrap.com" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="50" height="50"/>
        </a>
        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="50" height="50"/>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="50" height="50"/>
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="50" height="50"/>
        </a>
        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="50" height="50"/>
        </a>
        <a href="https://www.java.com" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="50" height="50"/>
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="50" height="50"/>
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="50" height="50"/>
        </a>
        <a href="https://www.python.org" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="50" height="50"/>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/>
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="p-2">
          <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="50" height="50"/>
        </a>
      </div>
    </>
  );
}
