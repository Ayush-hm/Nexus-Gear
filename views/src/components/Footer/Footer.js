import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faDiscord, faTwitter, faGithub, faDribbble } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Assets/NexusGear.png'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-900  inset-x-0 bottom-0">
      <div className="mx-auto w-full max-w-screen-xl p-2 py-2 lg:py-4">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={Logo} className="h-20 mr-3" alt="FlowBite Logo" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://NexusGear.com/" className="hover:underline">NexusGear</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-3">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="/" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">NexusGear™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FontAwesomeIcon icon={faFacebook} className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FontAwesomeIcon icon={faDiscord} className="w-4 h-4" />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FontAwesomeIcon icon={faTwitter} className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FontAwesomeIcon icon={faDribbble} className="w-4 h-4" />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
