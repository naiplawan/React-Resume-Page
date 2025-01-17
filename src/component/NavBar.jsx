import TextTransition, { presets } from 'react-text-transition';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {
  const TEXTS = ['Learn', 'Unlearn', 'Relearn', 'Repeat'];
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000 // every 2 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <>
      <nav className="flex flex-row justify-between  items-center p-5  rounded-b-2xl mb-10 cursor-pointer">
        {/* Right Box */}
        <div className="text-3xl" onClick={() => navigate('/')}>
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </div>

        {/* Left Box */}
        <div className="flex-row hidden md:inline-flex ">
          <motion.div
            className="rounded-3xl p-4 transition duration-100 ease-in-out hover:bg-white hover:text-black hover:rounded-3xl hover:delay-100 text-xl cursor-pointer"
            onClick={() => navigate('/about')}
            whileHover={{ scale: 1.0 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            About Me
          </motion.div>

          <motion.div
            className="rounded-3xl p-4 transition duration-100 ease-in-out hover:bg-white hover:text-black hover:rounded-3xl hover:delay-100 text-xl cursor-pointer"
            onClick={() => navigate('/portfolio')}
            whileHover={{ scale: 1.01 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Portfolio
          </motion.div>

          <motion.div
            className="rounded-3xl p-4 transition duration-100 ease-in-out hover:bg-white hover:text-black hover:rounded-3xl hover:delay-100 text-xl cursor-pointer"
            onClick={() => navigate('/contact')}
            whileHover={{ scale: 1.01 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
          >
            Contact
          </motion.div>
        </div>

        <div className="dropdown md:hidden p-5">
          <label tabIndex={0} className="btn btn-ghost btn-circle text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-1 shadow bg-base-100 rounded-box w-52 cursor-pointer"
          >
            <li>
              <a onClick={() => navigate('/about')}>About Me</a>
            </li>
            <li>
              <a onClick={() => navigate('/portfolio')}>Portfolio</a>
            </li>
            <li>
              <a onClick={() => navigate('/contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
